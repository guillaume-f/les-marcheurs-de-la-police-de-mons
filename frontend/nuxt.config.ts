// https://nuxt.com/docs/api/configuration/nuxt-config

import 'dotenv/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  css: [
    // './node_modules/bootstrap/dist/css/bootstrap.min.css',
      '~/assets/scss/style.scss'
    ],
  runtimeConfig: {
    public: {
      apiBase: process.env.STRAPI_URL
    }
  },
  app: {
    head: {
      titleTemplate: '%s · Les marcheurs de la police de Mons',
      htmlAttrs: {
        lang: 'fr',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        { name: 'description', content: 'Site vitrine' }
      ]
    }
  },
  typescript: {
    strict: true  
  },
  devtools: { enabled: true },
  vite: {
    css: {
      devSourcemap: true
    }
  }
})
