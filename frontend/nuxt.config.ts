import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'fa',
      },
      title: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/cloud2.svg' },
        { rel: 'canonical', href: 'https://avarancloud.ir' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ساخت سایت تخصصی و فروشگاهی با تمام امکانات لازم برای مدیریت سایت و سفارشات مانند خدمات پرداخت و ارسال ابزارهای جذب ترافیک و مشتری و افزایش فروش تضمینی' },
        { name: 'keywords', content: 'سایت ساز ابرآوران, ابر آوران, avarancloud, ساخت سایت, طراحی سایت, فروشگاه آنلاین, طراحی سایت فروشگاهی, فروشگاه اینترنتی, سایت شرکتی, سایت شخصی' },
        { name: 'author', content: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای' },
        { name: 'robots', content: 'index, follow' },
        { name: 'google-site-verification', content: 'sW6_X2EOWkYsOXoznwKUn4GQZcEPKDHxJrzb1yDXdkw' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای' },
        { property: 'og:description', content: 'ساخت سایت تخصصی و فروشگاهی با تمام امکانات لازم برای مدیریت سایت و سفارشات مانند خدمات پرداخت و ارسال ابزارهای جذب ترافیک و مشتری و افزایش فروش تضمینی' },
        { property: 'og:url', content: 'https://avarancloud.ir' },
        { property: 'og:site_name', content: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای' },
        { property: 'og:image', content: 'https://avarancloud.ir/cloud2.svg' },
        { property: 'og:locale', content: 'fa_IR' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای' },
        { name: 'twitter:description', content: 'ساخت سایت تخصصی و فروشگاهی با تمام امکانات لازم برای مدیریت سایت و سفارشات' },
        { name: 'twitter:image', content: 'https://avarancloud.ir/cloud2.svg' },
      ],
      script: [
        { 
          innerHTML: 'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-XXXXXXXXXX");',
          type: 'text/javascript',
          async: true,
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ابرآوران",
            "url": "https://avarancloud.ir",
            "logo": "https://avarancloud.ir/cloud2.svg",
            "description": "ابرآوران ارائه دهنده خدمات طراحی سایت و فروشگاه اینترنتی حرفه‌ای با امکانات کامل مدیریتی",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+98-XXX-XXX-XXXX",
              "contactType": "customer service"
            }
          }`,
          type: 'application/ld+json'
        }
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

  modules: [
    "nuxt-swiper",
    ["@nuxtjs/sitemap", {
      hostname: 'https://avarancloud.ir',
      gzip: true,
      routes: [
        '/',
        '/site-builder',
        '/cloud-builder',
        '/about-us'
      ]
    }]
  ],
});