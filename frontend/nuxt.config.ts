import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl'
      },
      title: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای با تیم متخصص',
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/photos/logo-avarancloud.png' },
        { rel: 'canonical', href: 'https://avarancloud.ir' },
        { rel: 'apple-touch-icon', href: '/assets/photos/logo-avarancloud.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ابرآوران - تیم متخصص طراحی سایت و فروشگاه اینترنتی با بیش از 10 سال تجربه. ارائه‌دهنده خدمات وب سایت حرفه‌ای، فروشگاه آنلاین، سایت‌ساز ابرآوران و ابرساز با قابلیت‌های پیشرفته مدیریت محصولات، سبد خرید و درگاه پرداخت آنلاین' },
        { name: 'keywords', content: 'سایت ساز ابرآوران, ابر آوران, avarancloud, ساخت سایت, طراحی سایت, فروشگاه آنلاین, طراحی سایت فروشگاهی, فروشگاه اینترنتی, سایت شرکتی, سایت شخصی, ابر ساز, طراحی وب سایت, سئو, طراحی سایت ارزان, طراحی سایت حرفه ای, وب سایت, سایت اختصاصی, سایت رسپانسیو, بهینه سازی سایت, ساخت فروشگاه اینترنتی, افزایش فروش آنلاین, راه اندازی کسب و کار آنلاین, درگاه پرداخت اینترنتی, سیستم مدیریت محتوا, cloud services, web design, online store' },
        { name: 'author', content: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'google-site-verification', content: 'sW6_X2EOWkYsOXoznwKUn4GQZcEPKDHxJrzb1yDXdkw' },
        
        // Navigation Meta Tags
        { name: 'navigation', content: 'صفحه اصلی, سایت ساز, ابر ساز, درباره ما, ارتباط با ما' },
        { name: 'navigation-order', content: '1, 2, 3, 4, 5' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای با تیم متخصص' },
        { property: 'og:description', content: 'ابرآوران - تیم متخصص طراحی سایت و فروشگاه اینترنتی با بیش از 10 سال تجربه. ارائه‌دهنده خدمات وب سایت حرفه‌ای، فروشگاه آنلاین، سایت‌ساز و ابرساز با قابلیت‌های پیشرفته مدیریت محتوا و فروش' },
        { property: 'og:url', content: 'https://avarancloud.ir' },
        { property: 'og:site_name', content: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای' },
        { property: 'og:image', content: 'https://avarancloud.ir/assets/photos/logo-avarancloud.png' },
        { property: 'og:locale', content: 'fa_IR' },
        { property: 'og:updated_time', content: new Date().toISOString() },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ابرآوران | طراحی سایت و فروشگاه اینترنتی حرفه‌ای با تیم متخصص' },
        { name: 'twitter:description', content: 'ابرآوران - تیم متخصص طراحی سایت و فروشگاه اینترنتی با بیش از 10 سال تجربه. ارائه‌دهنده خدمات وب سایت حرفه‌ای، فروشگاه آنلاین، سایت‌ساز و ابرساز' },
        { name: 'twitter:image', content: 'https://avarancloud.ir/assets/photos/logo-avarancloud.png' },
        { name: 'twitter:site', content: '@avarancloud' },

        // Additional SEO tags
        { name: 'application-name', content: 'ابرآوران' },
        { name: 'apple-mobile-web-app-title', content: 'ابرآوران' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:email', content: 'info@avarancloud.ir' },
        
        // Mobile specific
        { name: 'theme-color', content: '#059669' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      script: [
        { 
          innerHTML: 'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-RWKELS7NMX");',
          type: 'text/javascript',
          async: true,
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ابرآوران",
            "url": "https://avarancloud.ir",
            "logo": "https://avarancloud.ir/assets/photos/logo-avarancloud.png",
            "description": "ابرآوران ارائه دهنده خدمات طراحی سایت و فروشگاه اینترنتی حرفه‌ای با امکانات کامل مدیریتی",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+989391637282",
              "contactType": "customer service",
              "availableLanguage": ["Persian", "English"],
              "email": "info@avarancloud.ir"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "تهران، خیابان شاهزاده قاسم میثاق ششم",
              "addressLocality": "آران و بیدگل",
              "addressCountry": "IR"
            },
            "sameAs": [
              "https://www.instagram.com/avarancloud",
              "https://www.linkedin.com/company/avarancloud",
              "https://t.me/avarancloud"
            ],
            "foundingDate": "2020",
            "founders": [
              {
                "@type": "Person",
                "name": "مدیریت ابرآوران"
              }
            ],
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "10+"
            }
          }`,
          type: 'application/ld+json'
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "ابرآوران",
            "url": "https://avarancloud.ir",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://avarancloud.ir/search?q={search_term_string}",
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
                "item": "https://avarancloud.ir/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "سایت ساز",
                "item": "https://avarancloud.ir/site-builder"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "ابر ساز",
                "item": "https://avarancloud.ir/cloud-builder"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "درباره ما",
                "item": "https://avarancloud.ir/about-us"
              }
            ]
          }`,
          type: 'application/ld+json'
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": ["صفحه اصلی", "سایت ساز", "ابر ساز", "درباره ما", "ارتباط با ما"],
            "url": [
              "https://avarancloud.ir/",
              "https://avarancloud.ir/site-builder",
              "https://avarancloud.ir/cloud-builder",
              "https://avarancloud.ir/about-us", 
              "https://avarancloud.ir/about-us#contact-us"
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
                  "text": "هزینه طراحی سایت در ابرآوران بسته به نیازهای شما و نوع پروژه متفاوت است. ما پکیج‌های مختلفی با قیمت‌های مناسب برای کسب و کارهای کوچک تا بزرگ ارائه می‌دهیم. برای دریافت قیمت دقیق با کارشناسان ما تماس بگیرید."
                }
              },
              {
                "@type": "Question",
                "name": "آیا امکان سفارشی‌سازی سایت وجود دارد؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بله، در ابرآوران تمامی سایت‌ها طبق نیاز مشتری طراحی و سفارشی‌سازی می‌شوند. شما می‌توانید ویژگی‌های مورد نیاز خود را به ما اعلام کنید و تیم متخصص ما آنها را به بهترین شکل پیاده‌سازی خواهد کرد."
                }
              },
              {
                "@type": "Question",
                "name": "چه خدمات پشتیبانی پس از طراحی سایت ارائه می‌دهید؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ابرآوران پس از طراحی سایت، خدمات پشتیبانی کامل شامل رفع اشکالات، بروزرسانی، افزودن ویژگی‌های جدید و مشاوره در زمینه بهینه‌سازی سایت ارائه می‌دهد. ما همواره در کنار شما هستیم تا وب‌سایت شما همیشه بهترین عملکرد را داشته باشد."
                }
              },
              {
                "@type": "Question",
                "name": "آیا سایت‌های طراحی شده توسط ابرآوران برای موبایل بهینه‌سازی شده‌اند؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بله، تمامی سایت‌های طراحی شده توسط ابرآوران کاملاً واکنش‌گرا (Responsive) هستند و برای تمامی دستگاه‌ها از جمله موبایل، تبلت و دسکتاپ بهینه‌سازی شده‌اند. ما از جدیدترین تکنولوژی‌های طراحی وب استفاده می‌کنیم تا تجربه کاربری عالی در همه دستگاه‌ها تضمین شود."
                }
              },
              {
                "@type": "Question",
                "name": "آیا خدمات سئو (SEO) هم ارائه می‌دهید؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بله، ابرآوران خدمات کامل بهینه‌سازی برای موتورهای جستجو (SEO) ارائه می‌دهد. این خدمات شامل بهینه‌سازی فنی سایت، تولید محتوای مناسب، بهبود ساختار لینک‌ها و استراتژی‌های افزایش رتبه در نتایج جستجو می‌شود. هدف ما افزایش ترافیک ارگانیک و بهبود دیده شدن سایت شماست."
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
              "url": "https://avarancloud.ir"
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
                    "name": "طراحی سایت فروشگاهی",
                    "description": "طراحی فروشگاه آنلاین با امکانات کامل مدیریت محصولات، سبد خرید و درگاه پرداخت"
                  },
                  "price": "توافقی",
                  "priceCurrency": "IRR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "طراحی سایت شرکتی",
                    "description": "طراحی وب‌سایت حرفه‌ای برای معرفی شرکت‌ها، خدمات و محصولات"
                  },
                  "price": "توافقی",
                  "priceCurrency": "IRR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "خدمات سئو",
                    "description": "بهینه‌سازی سایت برای موتورهای جستجو و افزایش رتبه در نتایج جستجو"
                  },
                  "price": "توافقی",
                  "priceCurrency": "IRR"
                }
              ]
            }
          }`,
          type: 'application/ld+json'
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ابرآوران",
            "alternateName": "Avaran Cloud",
            "url": "https://avarancloud.ir",
            "logo": {
              "@type": "ImageObject",
              "url": "https://avarancloud.ir/assets/photos/logo-avarancloud.png",
              "width": "180",
              "height": "60"
            },
            "image": "https://avarancloud.ir/assets/photos/logo-avarancloud.png",
            "description": "ابرآوران ارائه دهنده خدمات طراحی سایت و فروشگاه اینترنتی حرفه‌ای با امکانات کامل مدیریتی"
          }`,
          type: 'application/ld+json'
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-RWKELS7NMX',
          async: true,
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
    optimizeDeps: {
      include: ['vue', 'vue-router'],
    },
    build: {
      minify: true,
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
          },
        },
      },
    },
  },

  modules: [
    "nuxt-swiper",
    ["@nuxtjs/sitemap", {
      hostname: 'https://avarancloud.ir',
      gzip: true,
      cacheTime: 1000 * 60 * 15,
      routes: [
        {
          url: '/',
          priority: 1.0,
          changefreq: 'daily',
          lastmod: new Date().toISOString()
        },
        {
          url: '/site-builder',
          priority: 0.8,
          changefreq: 'weekly',
          lastmod: new Date().toISOString(),
          links: [
            { lang: 'fa', url: '/site-builder' }
          ]
        },
        {
          url: '/cloud-builder',
          priority: 0.8,
          changefreq: 'weekly',
          lastmod: new Date().toISOString(),
          links: [
            { lang: 'fa', url: '/cloud-builder' }
          ]
        },
        {
          url: '/about-us',
          priority: 0.7,
          changefreq: 'monthly',
          lastmod: new Date().toISOString(),
          links: [
            { lang: 'fa', url: '/about-us' }
          ]
        },
        {
          url: '/site-builder#features',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly'
        },
        {
          url: '/site-builder#tozihat',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly'
        },
        {
          url: '/site-builder#packages',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly'
        },
        {
          url: '/site-builder#submenu',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly'
        },
        {
          url: '/cloud-builder#features',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly'
        },
        {
          url: '/cloud-builder#tozihat',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly'
        },
        {
          url: '/cloud-builder#aaS',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly'
        },
        {
          url: '/cloud-builder#packages',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly'
        },
        {
          url: '/cloud-builder#submenu',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly'
        },
        {
          url: '/about-us#contact-us',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly'
        }
      ]
    }],
    "@nuxt/image"
  ],
  
  // Add performance optimization
  nitro: {
    compressPublicAssets: true
  },
  
  // Add route rules for better SEO
  routeRules: {
    '/': { prerender: true },
    '/site-builder': { prerender: true },
    '/cloud-builder': { prerender: true },
    '/about-us': { prerender: true }
  },
  
  build: {
    transpile: ['vue-router']
  }
});