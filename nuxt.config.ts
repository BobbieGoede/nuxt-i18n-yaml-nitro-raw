// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales",
    defaultLocale: "en",
    experimental: {
      localeDetector: "./localeDetector.ts",
    },
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
      {
        name: "日本語",
        code: "ja",
        iso: "ja-JA",
        file: "ja.yaml",
      },
    ],
    strategy: "prefix",
    detectBrowserLanguage: false,
  },
});
