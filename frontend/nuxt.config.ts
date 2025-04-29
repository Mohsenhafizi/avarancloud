import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl',
      },
      title: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo-avarancloud.png' },
        { rel: 'canonical', href: 'https://avarancloud.com' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ساخت سایت تخصصی و فروشگاهی با تمام امکانات لازم برای مدیریت سایت و سفارشات مانند خدمات پرداخت و ارسال، ابزارهای جذب ترافیک و مشتری و افزایش فروش تضمینی' },
        { name: 'keywords', content: 'سایت ساز ابرآوران, ابر آوران, avarancloud, ساخت سایت, طراحی سایت, فروشگاه آنلاین, طراحی سایت فروشگاهی, فروشگاه اینترنتی, سایت شرکتی, سایت شخصی, ابر ساز, طراحی وب سایت, سئو, طراحی سایت ارزان, طراحی سایت حرفه ای, وب سایت, سایت اختصاصی, سایت رسپانسیو, بهینه سازی سایت, ساخت فروشگاه اینترنتی, افزایش فروش آنلاین, راه اندازی کسب و کار آنلاین, درگاه پرداخت اینترنتی, سیستم مدیریت محتوا, cloud services, web design, online store' },
        { name: 'author', content: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'google-site-verification', content: 'sW6_X2EOWkYsOXoznwKUn4GQZcEPKDHxJrzb1yDXdkw' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای' },
        { property: 'og:description', content: 'ساخت سایت تخصصی و فروشگاهی با تمام امکانات لازم برای مدیریت سایت و سفارشات مانند خدمات پرداخت و ارسال ابزارهای جذب ترافیک و مشتری و افزایش فروش تضمینی' },
        { property: 'og:url', content: 'https://avarancloud.com' },
        { property: 'og:site_name', content: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای' },
        { property: 'og:image', content: 'https://avarancloud.com/logo-avarancloud.png' },
        { property: 'og:locale', content: 'fa_IR' },
        { property: 'og:updated_time', content: new Date().toISOString() },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای' },
        { name: 'twitter:description', content: 'ساخت سایت تخصصی و فروشگاهی با تمام امکانات لازم برای مدیریت سایت و سفارشات' },
        { name: 'twitter:image', content: 'https://avarancloud.com/logo-avarancloud.png' },
        { name: 'twitter:site', content: '@avarancloud' },

        // Additional SEO tags
        { name: 'application-name', content: 'ابرآوران' },
        { name: 'apple-mobile-web-app-title', content: 'ابرآوران' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:email', content: 'info@avarancloud.com' },
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
            "url": "https://avarancloud.com",
            "logo": "https://avarancloud.com/logo-avarancloud.png",
            "description": "ابرآوران ارائه دهنده خدمات طراحی سایت و فروشگاه اینترنتی حرفه‌ای با امکانات کامل مدیریتی",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+98-XXX-XXX-XXXX",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.instagram.com/avarancloud",
              "https://www.linkedin.com/company/avarancloud",
              "https://t.me/avarancloud"
            ]
          }`,
          type: 'application/ld+json'
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "ابرآوران",
            "url": "https://avarancloud.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://avarancloud.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }`,
          type: 'application/ld+json'
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "خانه",
                "item": "https://avarancloud.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "سایت ساز",
                "item": "https://avarancloud.com/site-builder"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "ابر ساز",
                "item": "https://avarancloud.com/cloud-builder"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "درباره ما",
                "item": "https://avarancloud.com/about-us"
              }
            ]
          }`,
          type: 'application/ld+json'
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "هزینه طراحی سایت توسط ابرآوران چقدر است؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "هزینه طراحی سایت در ابرآوران بسته به نیازهای شما و نوع پروژه متفاوت است. ما پکیج‌های مختلفی با قیمت‌های مناسب برای کسب و کارهای کوچک تا بزرگ ارائه می‌دهیم."
                }
              },
              {
                "@type": "Question",
                "name": "آیا امکان سفارشی‌سازی سایت وجود دارد؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بله، در ابرآوران تمامی سایت‌ها طبق نیاز مشتری طراحی و سفارشی‌سازی می‌شوند. شما می‌توانید ویژگی‌های مورد نیاز خود را به ما اعلام کنید."
                }
              },
              {
                "@type": "Question",
                "name": "چه خدمات پشتیبانی پس از طراحی سایت ارائه می‌دهید؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ابرآوران پس از طراحی سایت، خدمات پشتیبانی کامل شامل رفع اشکالات، بروزرسانی، افزودن ویژگی‌های جدید و مشاوره در زمینه بهینه‌سازی سایت ارائه می‌دهد."
                }
              }
            ]
          }`,
          type: 'application/ld+json'
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "طراحی سایت",
            "provider": {
              "@type": "Organization",
              "name": "ابرآوران",
              "url": "https://avarancloud.com"
            },
            "description": "طراحی و توسعه انواع وب‌سایت‌های شخصی، شرکتی و فروشگاهی با جدیدترین تکنولوژی‌ها",
            "areaServed": "ایران",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "خدمات طراحی سایت",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "طراحی سایت فروشگاهی"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "طراحی سایت شرکتی"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "خدمات سئو"
                  }
                }
              ]
            }
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  },
  ssr: true,
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
      hostname: 'https://avarancloud.com',
      gzip: true,
      routes: [
        '/',
        '/site-builder',
        '/cloud-builder',
        '/about-us',
        '/site-builder#features',
        '/site-builder#tozihat',
        '/site-builder#packages',
        '/site-builder#submenu',
        '/cloud-builder#features',
        '/cloud-builder#tozihat',
        '/cloud-builder#aaS',
        '/cloud-builder#packages',
        '/cloud-builder#submenu',
        '/about-us#contact-us'
      ]
    }]
  ],
});