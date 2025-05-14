import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl'
      },
      title: 'ابرآوران | طراحی سایت و سایت ساز حرفه‌ای با تیم متخصص',
      link: [
        { rel: 'icon', type: 'image/png', href: 'logo-avarancloud.png' },
        { rel: 'canonical', href: 'https://avarancloud.ir' },
        { rel: 'apple-touch-icon', href: '/assets/photos/logo-avarancloud.png' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ابرآوران: تخصصی‌ترین تیم طراحی سایت و سایت ساز ایران با بیش از 10 سال تجربه. سایت شخصی، سایت شرکتی و فروشگاه اینترنتی با امکانات کامل مدیریت سفارشات، پرداخت آنلاین و ارسال کالا. طراحی سایت با بهترین تکنولوژی‌های روز دنیا.' },
        { name: 'keywords', content: 'طراحی سایت, سایت ساز, سایت ساز ابرآوران, ابر آوران, avarancloud, ابرآوران (Abaravan), طراحی سایت حرفه‌ای, فروشگاه آنلاین, طراحی سایت فروشگاهی, فروشگاه اینترنتی, سایت شرکتی, سایت شخصی, ابر ساز, طراحی وب سایت, سئو, طراحی سایت ارزان, طراحی سایت حرفه ای, وب سایت, سایت اختصاصی, سایت رسپانسیو, بهینه سازی سایت, ساخت فروشگاه اینترنتی, افزایش فروش آنلاین, راه اندازی کسب و کار آنلاین, درگاه پرداخت اینترنتی, سیستم مدیریت محتوا, cloud services, web design, online store, قیمت طراحی سایت, خدمات طراحی سایت, هزینه طراحی سایت, مزایای طراحی سایت حرفه‌ای' },
        { name: 'author', content: 'ابرآوران | طراحی سایت و سایت ساز حرفه‌ای' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'google-site-verification', content: 'sW6_X2EOWkYsOXoznwKUn4GQZcEPKDHxJrzb1yDXdkw' },
        
        // Explicit spelling clarification
        { name: 'name', content: 'ابرآوران' },
        { name: 'correct-spelling', content: 'ابرآوران' },
        
        // Navigation Meta Tags
        { name: 'navigation', content: 'صفحه اصلی, سایت ساز, ابر ساز, درباره ما, ارتباط با ما' },
        { name: 'navigation-order', content: '1, 2, 3, 4, 5' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'ابرآوران | طراحی سایت و سایت ساز حرفه‌ای با تیم متخصص' },
        { property: 'og:description', content: 'ابرآوران: تخصصی‌ترین تیم طراحی سایت و سایت ساز ایران با بیش از 10 سال تجربه. سایت شخصی، سایت شرکتی و فروشگاه اینترنتی با امکانات کامل مدیریت سفارشات و پرداخت آنلاین. بهترین قیمت و کیفیت با تضمین رضایت مشتری.' },
        { property: 'og:url', content: 'https://avarancloud.ir' },
        { property: 'og:site_name', content: 'ابرآوران | طراحی سایت و سایت ساز حرفه‌ای' },
        { property: 'og:image', content: 'https://avarancloud.ir/assets/photos/logo-avarancloud.png' },
        { property: 'og:locale', content: 'fa_IR' },
        { property: 'og:updated_time', content: new Date().toISOString() },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ابرآوران | طراحی سایت و سایت ساز حرفه‌ای با تیم متخصص' },
        { name: 'twitter:description', content: 'ابرآوران: تخصصی‌ترین تیم طراحی سایت و سایت ساز ایران. طراحی سایت شخصی، شرکتی و فروشگاهی با بهترین تکنولوژی‌های روز دنیا.' },
        { name: 'twitter:image', content: 'https://avarancloud.ir/assets/photos/logo-avarancloud.png' },
        { name: 'twitter:site', content: '@avarancloud' },

        // Additional SEO tags
        { name: 'application-name', content: 'ابرآوران' },
        { name: 'apple-mobile-web-app-title', content: 'ابرآوران' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:email', content: 'info@avarancloud.ir' },
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
            "logo": "https://avarancloud.ir/assets/photos/logo-avarancloud.png",
            "description": "ابرآوران ارائه دهنده خدمات طراحی سایت و سایت ساز حرفه‌ای با امکانات کامل مدیریتی",
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
                  "text": "هزینه طراحی سایت در ابرآوران بسته به نیازهای شما و نوع پروژه متفاوت است. ما پکیج‌های مختلفی با قیمت‌های مناسب برای کسب و کارهای کوچک تا بزرگ ارائه می‌دهیم. برای دریافت مشاوره رایگان و تعیین دقیق هزینه با ما تماس بگیرید."
                }
              },
              {
                "@type": "Question",
                "name": "سایت ساز ابرآوران چه مزایایی دارد؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "سایت ساز ابرآوران با استفاده از تکنولوژی‌های روز دنیا طراحی شده و امکانات متنوعی از جمله طراحی واکنش‌گرا، بهینه‌سازی برای موتورهای جستجو، سرعت بارگذاری بالا، امنیت قوی، پشتیبانی از درگاه‌های پرداخت ایرانی و سیستم مدیریت محتوای کاربرپسند را در اختیار شما قرار می‌دهد."
                }
              },
              {
                "@type": "Question",
                "name": "آیا امکان سفارشی‌سازی سایت وجود دارد؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بله، در ابرآوران تمامی سایت‌ها طبق نیاز مشتری طراحی و سفارشی‌سازی می‌شوند. شما می‌توانید ویژگی‌های مورد نیاز خود را به ما اعلام کنید و تیم متخصص ما آن را دقیقاً مطابق نیازهای کسب‌وکار شما پیاده‌سازی خواهد کرد."
                }
              },
              {
                "@type": "Question",
                "name": "چه خدمات پشتیبانی پس از طراحی سایت ارائه می‌دهید؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ابرآوران پس از طراحی سایت، خدمات پشتیبانی کامل شامل رفع اشکالات، بروزرسانی، افزودن ویژگی‌های جدید، بهینه‌سازی سئو، مشاوره در زمینه بازاریابی دیجیتال و تحلیل عملکرد سایت ارائه می‌دهد تا کسب و کار آنلاین شما همیشه در بهترین وضعیت باشد."
                }
              },
              {
                "@type": "Question", 
                "name": "آیا طراحی سایت ابرآوران برای موتورهای جستجو بهینه‌سازی می‌شود؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بله، تمامی سایت‌های طراحی شده توسط ابرآوران با رعایت اصول سئو (SEO) طراحی می‌شوند. ما از ساختار کدنویسی استاندارد، محتوای بهینه شده و تگ‌های متا مناسب استفاده می‌کنیم تا سایت شما در نتایج جستجو رتبه بهتری داشته باشد و ترافیک هدفمند بیشتری جذب کند."
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
            "description": "طراحی و توسعه انواع وب‌سایت‌های شخصی، شرکتی و فروشگاهی با جدیدترین تکنولوژی‌ها و بهینه‌سازی کامل برای موتورهای جستجو",
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
                    "name": "سایت ساز حرفه‌ای"
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
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ابرآوران",
            "alternateName": ["Avaran Cloud", "ابر آوران", "آوران کلاود", "طراحی سایت ابرآوران", "سایت ساز ابرآوران"],
            "url": "https://avarancloud.ir",
            "logo": {
              "@type": "ImageObject",
              "url": "https://avarancloud.ir/assets/photos/logo-avarancloud.png",
              "width": "180",
              "height": "60"
            },
            "image": "https://avarancloud.ir/assets/photos/logo-avarancloud.png",
            "description": "ابرآوران ارائه دهنده خدمات طراحی سایت و سایت ساز حرفه‌ای با امکانات کامل مدیریتی"
          }`,
          type: 'application/ld+json'
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["header", "main", "footer"]
            },
            "name": "ابرآوران",
            "mainEntityOfPage": {
              "@type": "Organization",
              "name": "ابرآوران",
              "alternateName": ["Avaran Cloud", "ابر آوران"]
            }
          }`,
          type: 'application/ld+json'
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
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
      hostname: 'https://avarancloud.ir',
      gzip: true,
      routes: [
        {
          url: '/',
          priority: 1.0,
          changefreq: 'daily'
        },
        {
          url: '/site-builder',
          priority: 0.8,
          changefreq: 'weekly',
          links: [
            { lang: 'fa', url: '/site-builder' }
          ]
        },
        {
          url: '/cloud-builder',
          priority: 0.8,
          changefreq: 'weekly',
          links: [
            { lang: 'fa', url: '/cloud-builder' }
          ]
        },
        {
          url: '/about-us',
          priority: 0.7,
          changefreq: 'monthly',
          links: [
            { lang: 'fa', url: '/about-us' }
          ]
        },
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
  ]
});