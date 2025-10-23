  <template>
      <div class="min-h-screen overflow-x-hidden bg">
          <NavBarNavDesktop />
          <NavBarNavMobile />
          <NavBarBottom />
          <CloudHeader />
          <div id="tozihat">
            <CloudFeatures />
          </div>
          <div id="features">
            <CloudTozihat />
          </div>
          <div id="aaS">
            <CloudAaS />
          </div>
          <div id="packages">
            <CloudPackages />
          </div>
          <div id="submenu">
            <CloudSubmenu />
          </div>
          <CloudFooter />
          <EndFooter />
      </div>
  </template>

  <script lang="ts">
  import { useHead } from '@vueuse/head';

  export default {
      name: 'CloudBuilder',
      setup() {
          useHead({
              title: 'ابرساز ابرآوران | طراحی فروشگاه اینترنتی با تیم متخصص و امکانات پیشرفته',
              meta: [
                  { name: 'description', content: 'ابرساز ابرآوران - پلتفرم حرفه‌ای طراحی فروشگاه اینترنتی با تیم متخصص. امکانات پیشرفته مدیریت محصولات، سبد خرید هوشمند، درگاه‌های پرداخت متنوع، سیستم تخفیف، مدیریت انبار، گزارش‌های آماری و پشتیبانی فنی قدرتمند' },
                  { name: 'keywords', content: 'ابرساز ابرآوران, فروشگاه اینترنتی, فروشگاه آنلاین, طراحی فروشگاه اینترنتی, فروشگاه ساز حرفه‌ای, ساخت فروشگاه آنلاین, مدیریت محصولات, سبد خرید هوشمند, درگاه پرداخت آنلاین, تیم متخصص طراحی فروشگاه, سیستم تخفیف و کوپن, مدیریت انبار, گزارش‌های آماری فروش, پنل مدیریت فروشگاه, فروشگاه چندفروشنده, فروشگاه دیجیتال, افزایش فروش اینترنتی, بهینه‌سازی سئو فروشگاه, سیستم فروش آنلاین, راه‌اندازی کسب و کار آنلاین, دیجیتال مارکتینگ, امنیت فروشگاه آنلاین, پشتیبانی فنی فروشگاه, ابرآوران, avarancloud, ecommerce, online store' },
                  { property: 'og:title', content: 'ابرساز ابرآوران | طراحی فروشگاه اینترنتی با تیم متخصص و امکانات پیشرفته' },
                  { property: 'og:description', content: 'ابرساز ابرآوران - پلتفرم حرفه‌ای طراحی فروشگاه اینترنتی با تیم متخصص. امکانات پیشرفته مدیریت محصولات، سبد خرید هوشمند، درگاه‌های پرداخت متنوع و پشتیبانی فنی قدرتمند' },
                  { property: 'og:url', content: 'https://avarancloud.ir/cloud-builder' },
                  { property: 'og:type', content: 'website' },
                  { property: 'og:image', content: 'https://avarancloud.ir/cloud-builder-thumb.png' },
                  { name: 'twitter:card', content: 'summary_large_image' },
                  { name: 'twitter:title', content: 'ابرساز ابرآوران | طراحی فروشگاه اینترنتی با تیم متخصص و امکانات پیشرفته' },
                  { name: 'twitter:description', content: 'ابرساز ابرآوران - پلتفرم حرفه‌ای طراحی فروشگاه اینترنتی با امکانات پیشرفته و پشتیبانی فنی قدرتمند' },
                  { name: 'canonical', content: 'https://avarancloud.ir/cloud-builder' },
              ],
              link: [
                  { rel: 'canonical', href: 'https://avarancloud.ir/cloud-builder' }
              ],
              script: [
                  {
                      innerHTML: `{
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "ابرساز ابرآوران",
                        "description": "سرویس طراحی فروشگاه اینترنتی حرفه‌ای با امکانات کامل فروش آنلاین",
                        "brand": {
                          "@type": "Brand",
                          "name": "ابرآوران"
                        },
                        "offers": {
                          "@type": "AggregateOffer",
                          "lowPrice": "3000000",
                          "highPrice": "15000000",
                          "priceCurrency": "IRR",
                          "offerCount": "3"
                        },
                        "review": {
                          "@type": "Review",
                          "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "4.9",
                            "bestRating": "5"
                          },
                          "author": {
                            "@type": "Person",
                            "name": "فروشندگان آنلاین"
                          }
                        }
                      }`
                  }
              ]
          });
      },
      data() {
          return {
              observer: null as MutationObserver | null
          };
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
