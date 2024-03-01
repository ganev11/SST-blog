export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN
    }
  },
  css: [
    '~/assets/css/main.css' // Path to your global CSS file
  ]
})
