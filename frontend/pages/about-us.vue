<template>
   <div class="rtl ground min-h-screen overflow-x-hidden">

      <div class="z-20 relative">
      <NavBarNavDesktop />
      <NavBarNavMobile />
      <NavBarBottom />
      <AboutusHero />
      <AboutusKontainerinner1 />
      <AboutusProject />
      <AboutusAvatari />
      <div id="contact-us">
      <AboutusContact />
      </div>
      <AboutusFooter />
      <EndFooter />
      </div>
   </div>
</template>
  
<script lang="ts">
import { useHead } from '@vueuse/head';
import { onMounted } from 'vue';

export default{
    setup() {
    useHead({
      title: 'درباره ابرآوران | تیم متخصص طراحی سایت و فروشگاه اینترنتی با 10+ سال تجربه',
      meta: [
        { name: 'description', content: 'ابرآوران، تیم خلاق و متخصص طراحی سایت و فروشگاه اینترنتی با بیش از 10 سال تجربه در ارائه خدمات دیجیتال. با تخصص در طراحی وب، توسعه اپلیکیشن، سئو و دیجیتال مارکتینگ، ابرآوران ارائه‌دهنده راهکارهای نوآورانه برای کسب‌وکارهای آنلاین' },
        { name: 'keywords', content: 'ابرآوران, تیم متخصص طراحی سایت, متخصصان طراحی وب, تیم حرفه‌ای طراحی وب, تیم خلاق طراحی سایت, طراحان فروشگاه اینترنتی, توسعه‌دهندگان وب, سابقه کاری ابرآوران, تاریخچه ابرآوران, چشم‌انداز ابرآوران, تجربه طراحی سایت, متخصصین UI/UX, تیم دیجیتال مارکتینگ, خدمات سئو, پشتیبانی فنی وب, تیم پشتیبانی سایت, ارتباط با تیم ابرآوران, درباره شرکت ابرآوران, تخصص‌های ابرآوران, تماس با ابرآوران, avarancloud' },
        { property: 'og:title', content: 'درباره ابرآوران | تیم متخصص طراحی سایت و فروشگاه اینترنتی با 10+ سال تجربه' },
        { property: 'og:description', content: 'ابرآوران، تیم خلاق و متخصص طراحی سایت و فروشگاه اینترنتی با بیش از 10 سال تجربه در ارائه خدمات دیجیتال. ارائه‌دهنده راهکارهای نوآورانه برای کسب‌وکارهای آنلاین' },
        { property: 'og:url', content: 'https://avarancloud.ir/about-us' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://avarancloud.ir/about-us-thumb.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'درباره ابرآوران | تیم متخصص طراحی سایت و فروشگاه اینترنتی با 10+ سال تجربه' },
        { name: 'twitter:description', content: 'ابرآوران، تیم خلاق و متخصص طراحی سایت و فروشگاه اینترنتی با بیش از 10 سال تجربه در ارائه خدمات دیجیتال' },
        { name: 'canonical', content: 'https://avarancloud.ir/about-us' },
      ],
      link: [
        { rel: 'canonical', href: 'https://avarancloud.ir/about-us' }
      ],
      script: [
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ابرآوران",
            "url": "https://avarancloud.ir",
            "logo": "/avarancloud.ir/assets/photos/abr-avaran-logo.png",
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
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IR",
              "addressLocality": "تهران",
              "addressRegion": "تهران",
              "postalCode": "XXXXXX",
              "streetAddress": "تهران، خیابان XXXX، ساختمان XXXX"
            },
            "founder": {
              "@type": "Person",
              "name": "بنیانگذار ابرآوران"
            },
            "foundingDate": "2018",
            "employee": [
              {
                "@type": "Person",
                "name": "متخصص طراحی وب",
                "jobTitle": "Front-end Developer"
              },
              {
                "@type": "Person",
                "name": "متخصص برنامه نویسی",
                "jobTitle": "Back-end Developer"
              }
            ]
          }`
        }
      ]
    });

    onMounted(() => {
      // برای مدیریت اسکرول به بخش تماس با ما
      const handleHash = () => {
        // بررسی وجود هش در URL
        if (window.location.hash === '#contact-us') {
          // تاخیر کوتاه برای اطمینان از لود شدن کامل صفحه
          setTimeout(() => {
            const contactElement = document.getElementById('contact-us');
            if (contactElement) {
              window.scrollTo({
                top: contactElement.offsetTop - 100, // کمی بالاتر از المنت برای دید بهتر
                behavior: 'smooth'
              });
            }
          }, 300);
        }
      };

      // اجرای اولیه برای لود صفحه
      handleHash();

      // گوش دادن به تغییرات هش برای کلیک‌های داخلی
      window.addEventListener('hashchange', handleHash);

      // پاکسازی ایونت لیسنر در هنگام خروج از صفحه
      return () => {
        window.removeEventListener('hashchange', handleHash);
      };
    });
  },
}
</script>
  
<style>


.ground {
  position: relative;
  width: 100%; /* Fill the entire screen */
  height: 100%;
  overflow: hidden;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2),
    rgba(0, 0, 0, 0.1)
  );
}

.ground::before,
.ground::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background: conic-gradient(
    from 0deg,
    #ff9aa2,
    /* Soft pink */ #ffb7b2,
    /* Light peach */ #ffdac1,
    /* Pastel yellow */ #e2f0cb,
    /* Mint green */ #a2e4ff,
    /* Baby blue */ #c9afff,
    /* Lavender */ #ffb7b2,
    #ff9aa2
  );

}

/* Secondary rotating layer for depth */
.ground::after {
  width: 20000%;
  height: 20000%;
  animation: rotate-reverse 10s linear infinite;
  opacity: 0.6;
}

/* Rotating animations */
@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes rotate-reverse {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

</style>
