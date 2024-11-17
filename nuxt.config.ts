// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  serverHandlers: [
    {
      route: '/test/page',
      middleware: true,
      handler: '~/server/utils/handlePost.ts',
    }
  ],
})
