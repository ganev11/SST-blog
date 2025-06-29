import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import sharp from 'sharp';

function loadEnv() {
  const envPath = path.resolve('.env');
  if (fsSync.existsSync(envPath)) {
    const lines = fsSync.readFileSync(envPath, 'utf-8').split(/\r?\n/);
    for (const line of lines) {
      const match = line.match(/^\s*([^#=]+?)\s*=\s*(.*)\s*$/);
      if (match) {
        let value = match[2];
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        if (!process.env[match[1]]) {
          process.env[match[1]] = value;
        }
      }
    }
  }
}

loadEnv();

const token = process.env.DATO_CMS_TOKEN;
if (!token) {
  console.error('DATO_CMS_TOKEN env variable is required');
  process.exit(1);
}

const endpoint = 'https://graphql.datocms.com';

async function fetchArticles() {
  const query = `{
    allArticles(first: 100) {
      featuredImage { url }
      seo { image { url } }
      content
    }
  }`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error(JSON.stringify(json.errors));
  }
  return json.data.allArticles;
}

async function download(url, dir) {
  const u = new URL(url);
  const filename = path.basename(u.pathname);
  const dest = path.join(dir, filename);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  const buffer = await res.arrayBuffer();
  await fs.writeFile(dest, Buffer.from(buffer));
  return filename;
}

async function generateVariants(filePath) {
  const { dir, name, ext } = path.parse(filePath);
  if (ext.toLowerCase() === '.svg') return {};
  const widths = [384, 400, 640, 768, 800, 1280];
  const variants = {};
  for (const w of widths) {
    const outName = `${name}-${w}w${ext}`;
    const outPath = path.join(dir, outName);
    await sharp(filePath).resize({ width: w }).toFile(outPath);
    variants[w] = `/datocms/${outName}`;
  }
  return variants;
}

async function downloadAssets(articles) {
  const dir = path.join('public', 'datocms');
  await fs.mkdir(dir, { recursive: true });
  const mapping = {};
  const variantsMap = {};
  const regex = /(https?:\/\/[^\s"')]+\.(?:png|jpe?g|gif|webp|svg))/gi;
  for (const art of articles) {
    const urls = [];
    if (art.featuredImage?.url) urls.push(art.featuredImage.url);
    if (art.seo?.image?.url) urls.push(art.seo.image.url);
    if (art.content) {
      for (const m of art.content.matchAll(regex)) urls.push(m[1]);
    }
    for (const url of urls) {
      if (mapping[url]) continue;
      try {
        const name = await download(url, dir);
        const localPath = path.join(dir, name);
        const variants = await generateVariants(localPath);
        mapping[url] = `/datocms/${name}`;
        variantsMap[`/datocms/${name}`] = variants;
      } catch (e) {
        console.error(e);
      }
    }
  }
  return { mapping, variantsMap };
}

async function runGenerate() {
  await new Promise((resolve, reject) => {
    const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    const options = { stdio: 'inherit' };
    if (process.platform === 'win32') options.shell = true;
    const child = spawn(npxCmd, ['nuxi', 'generate'], options);
    child.on('close', code => {
      if (code !== 0) reject(new Error('nuxt generate failed'));
      else resolve();
    });
  });
}

async function getFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getFiles(full));
    } else if (full.endsWith('.html') || full.endsWith('.js')) {
      files.push(full);
    }
  }
  return files;
}

async function rewriteDist(mapping) {
  const files = await getFiles('dist');
  for (const file of files) {
    let content = await fs.readFile(file, 'utf-8');
    let changed = false;
    for (const [remote, local] of Object.entries(mapping)) {
      if (content.includes(remote)) {
        content = content.split(remote).join(local);
        changed = true;
      }
    }
    if (changed) {
      await fs.writeFile(file, content);
    }
  }
}

async function rewriteSrcsets(variantsMap) {
  const files = await getFiles('dist');
  for (const file of files) {
    let content = await fs.readFile(file, 'utf-8');
    let changed = false;
    for (const [orig, variants] of Object.entries(variantsMap)) {
      for (const [w, pathVar] of Object.entries(variants)) {
        const escaped = orig.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`${escaped}\s+${w}w`, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, `${pathVar} ${w}w`);
          changed = true;
        }
      }
    }
    if (changed) await fs.writeFile(file, content);
  }
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function copyLocalAssets() {
  const srcDir = path.join('assets', 'img');
  const destDir = path.join('dist', 'assets', 'img');
  if (fsSync.existsSync(srcDir)) {
    await copyDir(srcDir, destDir);
  }
}

async function main() {
  const articles = await fetchArticles();
  const { mapping, variantsMap } = await downloadAssets(articles);
  // Disable IPX image processing during the static generation step
  // so Windows builds do not fail when "ipx" tries to create files
  // using invalid characters from remote URLs.
  process.env.OFFLINE_BUILD = '1';
  await runGenerate();
  await copyLocalAssets();
  await rewriteDist(mapping);
  await rewriteSrcsets(variantsMap);
  console.log('Offline build complete');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
