# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Using the Nuxt Image module

This project now uses the `@nuxt/image` module for optimized image delivery.
After pulling the latest code, run `npm install` to install the new dependency
and then start the dev server as usual:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more
information.

## Environment Variables

Static generation needs the `DATO_CMS_TOKEN` environment variable so the
build step can fetch content from DatoCMS. Copy `.env.example` to `.env` and
replace the placeholder with your token:

```bash
cp .env.example .env
echo "DATO_CMS_TOKEN=your-real-token" >> .env
```

Run `npm run generate` (or `npx nuxi generate`) after setting this value. The
token is included in `runtimeConfig.public` within `nuxt.config.js`, so it will
be embedded in the generated JavaScript and visible to anyone who can access
the deployed site.

## Offline Build

To host the generated site without contacting DatoCMS for images, use the
`offline-build` script:

```bash
npm run offline-build
```

This command downloads all image assets referenced by the GraphQL queries into
`/public/datocms`, runs `nuxt generate`, and rewrites the built files in `dist/`
to point at those local images. It also copies any local images under
`/assets/img` into the generated `dist` directory so paths like
`/assets/img/Robot.png` continue to work. The script automatically loads variables from a
`.env` file and exits if `DATO_CMS_TOKEN` is missing. On Windows the script
automatically spawns `npx.cmd`, so ensure Node.js is installed and available on
your `PATH`. During this build the `OFFLINE_BUILD` environment variable is set
so Nuxt disables image processing (uses the `none` provider) instead of the
default `ipx` provider, avoiding Windows path issues when generating image
 assets. After the build completes, the script now generates multiple image
 sizes for each downloaded asset and updates the generated HTML `srcset`
 attributes so offline pages still use responsive images.


