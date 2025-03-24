import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  app: {
    head: {
      title: 'avarancloud', // مقدار پیش‌فرض برای عنوان
      titleTemplate: '%s - avarancloud', // قالب برای عنوان صفحه [[4]]
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/cloud2.svg' }
      ],
      meta: [
        { name: 'description', content: 'ساخت سایت تخصصی و فروشگاهی با تمام امکانات لازم برای مدیریت سایت و سفارشات مانند خدمات پرداخت و ارسال ابزارهای جذب ترافیک و مشتری و افزایش فروش تضمینی' },
        { name: 'keywords', content: ' سایت ساز ابرآوران, ابر آوران, avarancloud' },
        { property: 'og:title', content: 'ابرآوران' },
        { property: 'og:description', content: 'ساخت سایت تخصصی و فروشگاهی با تمام امکانات لازم برای مدیریت سایت و سفارشات مانند خدمات پرداخت و ارسال ابزارهای جذب ترافیک و مشتری و افزایش فروش تضمینی' },
        { property: 'og:url', content: 'https://avarancloud.ir' },
      ],
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