import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  app: {
    head:{
      title: 'Home',
      link: [
        { rel: 'icon', type: 'svg', href: '~/assets/svg/cloud.svg' }
      ]
    }
  },
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/font.css'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["nuxt-swiper"],
});