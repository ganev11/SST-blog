export default defineNuxtConfig({
  ssr: true, // Explicitly enable SSR
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image"],
  image: {
    // Use the IPX provider normally. During an offline build we disable image
    // processing entirely to avoid Windows path issues when IPX tries to create
    // files based on remote URLs.
    provider: process.env.OFFLINE_BUILD ? "none" : "ipx",
    domains: ["www.datocms-assets.com"],
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
