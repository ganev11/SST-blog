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
    // Use the IPX provider normally, but switch to the "ipxStatic" provider
    // when performing an offline build to avoid Windows path issues
    provider: process.env.OFFLINE_BUILD ? "ipxStatic" : "ipx",
    domains: ["www.datocms-assets.com"],
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
