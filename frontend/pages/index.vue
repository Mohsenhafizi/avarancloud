<template>
<div class="min-h-screen overflow-x-hidden bg">
    <NavBarNavDesktop />
    <NavBarNavMobile />
    <NavBarBottom />
    <MainSection1 />
    <MainSection2 />
    <MainSwiperSection2 />
    <MainSection3 />
    <MainSection4 />
    <MainSection5 />
    <EndFooter />
</div>
</template>

<script lang="ts">
import { MainSection5, NavBarNavDesktop, NavBarNavMobile, MainSection1, MainSection2, MainSwiperSection2, MainSection3, MainSection4, EndFooter } from '#components';
import { useHead } from '@vueuse/head';

export default {
  name: 'IndexPage',
  components: {
    MainSection5,
    NavBarNavDesktop,
    NavBarNavMobile,
    MainSection1,
    MainSection2,
    MainSwiperSection2,
    MainSection3,
    MainSection4,
    EndFooter
  },
  setup() {
    useHead({
      title: 'ابرآوران | طراحی سایت و سایت ساز حرفه‌ای با تیم متخصص',
      meta: [
        { name: 'description', content: 'ابرآوران - تیم متخصص طراحی سایت و سایت ساز حرفه‌ای با بیش از 10 سال تجربه. ارائه خدمات طراحی وب‌سایت شخصی، شرکتی و فروشگاهی با جدیدترین تکنولوژی‌ها، ظاهر مدرن، سرعت بالا و بهینه‌سازی کامل برای موتورهای جستجو' },
        { name: 'keywords', content: 'ابرآوران, طراحی سایت حرفه‌ای, سایت ساز, سایت‌ساز ابرآوران, ابرساز ابرآوران, طراحی وب, توسعه وب‌سایت, طراحی سایت شخصی, طراحی سایت شرکتی, سایت واکنش‌گرا, طراحی سایت مدرن, سایت سئو شده, طراحی UI/UX, راه‌اندازی فروشگاه آنلاین, طراحی فروشگاه اینترنتی, سیستم فروش آنلاین, درگاه پرداخت آنلاین, مدیریت محصولات, سبد خرید اینترنتی, خدمات دیجیتال مارکتینگ, بهینه‌سازی موتورهای جستجو, افزایش فروش اینترنتی, راه‌اندازی کسب و کار آنلاین, قیمت طراحی سایت, خدمات طراحی سایت, هزینه طراحی سایت, مزایای طراحی سایت حرفه‌ای, avarancloud' },
        { property: 'og:title', content: 'ابرآوران | طراحی سایت و سایت ساز حرفه‌ای با تیم متخصص' },
        { property: 'og:description', content: 'ابرآوران - تیم متخصص طراحی سایت و سایت ساز حرفه‌ای با بیش از 10 سال تجربه. ارائه خدمات طراحی وب‌سایت شخصی، شرکتی و فروشگاهی با جدیدترین تکنولوژی‌ها' },
        { property: 'og:url', content: 'https://avarancloud.ir/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://avarancloud.ir/assets/photos/abr-avaran-logo.png' },
        { property: 'og:locale', content: 'fa_IR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ابرآوران | طراحی سایت و سایت ساز حرفه‌ای با تیم متخصص' },
        { name: 'twitter:description', content: 'ابرآوران - تیم متخصص طراحی سایت و سایت ساز حرفه‌ای با بیش از 10 سال تجربه. طراحی وب‌سایت با بهترین تکنولوژی‌ها' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'canonical', content: 'https://avarancloud.ir/' },
      ],
      link: [
        { rel: 'canonical', href: 'https://avarancloud.ir/' }
      ],
      script: [
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ابرآوران",
            "description": "ابرآوران - تیم متخصص طراحی سایت و سایت ساز حرفه‌ای با بیش از 10 سال تجربه",
            "url": "https://avarancloud.ir/",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "name": "ابرآوران"
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["header", "main", "footer"]
            }
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
                "name": "چرا باید ابرآوران را برای طراحی سایت انتخاب کنم؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ابرآوران با تیمی از متخصصان حرفه‌ای در زمینه طراحی سایت و برنامه‌نویسی وب، سایت‌هایی با کیفیت بالا، سرعت عالی و بهینه‌سازی شده برای موتورهای جستجو ارائه می‌دهد. ما از جدیدترین تکنولوژی‌ها استفاده کرده و سایت‌هایی کاملاً سفارشی مطابق با نیازهای کسب و کار شما طراحی می‌کنیم."
                }
              },
              {
                "@type": "Question",
                "name": "آیا سایت‌های طراحی شده توسط ابرآوران در موبایل نمایش مناسبی دارند؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بله، تمامی سایت‌های طراحی شده توسط ابرآوران به صورت کاملاً واکنش‌گرا (رسپانسیو) طراحی می‌شوند و قابلیت نمایش مناسب در تمامی دستگاه‌ها از جمله موبایل، تبلت و دسکتاپ را دارند."
                }
              },
              {
                "@type": "Question",
                "name": "مدت زمان طراحی یک سایت توسط ابرآوران چقدر است؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "مدت زمان طراحی سایت بسته به نوع پروژه، پیچیدگی و امکانات درخواستی متفاوت است. سایت‌های شرکتی ساده معمولاً بین 1 تا 3 هفته و فروشگاه‌های اینترنتی پیچیده بین 3 تا 8 هفته زمان می‌برند. زمان دقیق پس از بررسی نیازهای شما اعلام خواهد شد."
                }
              }
            ]
          }`
        }
      ]
    });
  }
}
</script>

<style scoped>
.bg {
  width: 100%;
  position: relative;
  background: radial-gradient(
    125% 125% at -2% 101%,
    rgba(245, 87, 2, 1) 10.5%,
    rgba(245, 120, 2, 1) 16%,
    rgba(245, 140, 2, 1) 17.5%,
    rgba(245, 170, 100, 1) 25%,
    rgba(238, 174, 202, 1) 40%,
    rgba(202, 179, 214, 1) 65%,
    rgba(148, 201, 233, 1) 100%
  );
}
</style>