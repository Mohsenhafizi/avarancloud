import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  app: {
    head: {
      title: 'avarancloud', // مقدار پیش‌فرض برای عنوان
      titleTemplate: '%s - avarancloud', // قالب برای عنوان صفحه [[4]]
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/cloud2.svg' }
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