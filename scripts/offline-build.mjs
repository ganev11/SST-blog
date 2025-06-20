import fs from 'fs/promises';
import path from 'path';
import { spawn } from 'child_process';

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

async function downloadAssets(articles) {
  const dir = path.join('public', 'datocms');
  await fs.mkdir(dir, { recursive: true });
  const mapping = {};
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
        mapping[url] = `/datocms/${name}`;
      } catch (e) {
        console.error(e);
      }
    }
  }
  return mapping;
}

async function runGenerate() {
  await new Promise((resolve, reject) => {
    const child = spawn('npx', ['nuxi', 'generate'], { stdio: 'inherit' });
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

async function main() {
  const articles = await fetchArticles();
  const mapping = await downloadAssets(articles);
  await runGenerate();
  await rewriteDist(mapping);
  console.log('Offline build complete');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
