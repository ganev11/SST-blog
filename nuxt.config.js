export default defineNuxtConfig({
  ssr: true, // Explicitly enable SSR
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
    },
  },
  css: [
    "~/assets/css/main.css", // Path to your global CSS file
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
