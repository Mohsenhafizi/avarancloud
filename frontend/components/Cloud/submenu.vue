<template>
  <div class="z-0 hidden md:flex justify-center items-center relative bottom-80 xl:bottom-74 2xl:my-30">
    <img class="absolute w-220 h-460 lg:w-220 lg:180 2xl:w-248 rotate-10 md:-rotate-2 lg:-rotate-2" src="../../assets/svg/arrowc.svg" data-aos="fade-up" alt="سوالات متداول از ساخت سایت">
  </div>
  <div class="faq-container relative rtl top-20 md:top-0">
    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-16 text-purple-950" data-aos="fade-up">سوالات متداول</h2>
    
    <div class="flex flex-col items-center w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto gap-3 sm:gap-4 md:gap-5 lg:gap-6">
      <!-- منوی اول -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">1.</span>
          <span class="text-sm sm:text-base md:text-lg">چگونه می‌توانم از خدمات ابری ابرآوران استفاده کنم؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">برای استفاده از خدمات ابری ابرآوران، کافیست با ما تماس بگیرید. کارشناسان ما پس از بررسی نیازهای شما، مناسب‌ترین پکیج ابری را پیشنهاد می‌دهند و در تمام مراحل راه‌اندازی و پشتیبانی در کنار شما خواهند بود.</p>
        </template>
      </SubmenuItem>

      <!-- منوی دوم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">2.</span>
          <span class="text-sm sm:text-base md:text-lg">آیا خدمات ابری ابرآوران برای کسب و کارهای کوچک مناسب است؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">بله، ابرآوران پکیج‌های متنوعی برای کسب و کارهای مختلف ارائه می‌دهد. از پکیج‌های پایه برای کسب و کارهای کوچک تا راهکارهای پیشرفته برای سازمان‌های بزرگ، همه نیازها را پوشش می‌دهیم.</p>
        </template>
      </SubmenuItem>

      <!-- منوی سوم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">3.</span>
          <span class="text-sm sm:text-base md:text-lg">امنیت داده‌ها در سرویس‌های ابری ابرآوران چگونه است؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">امنیت داده‌ها در ابرآوران از بالاترین اولویت‌هاست. ما از آخرین تکنولوژی‌های امنیتی، رمزنگاری داده‌ها، پشتیبان‌گیری خودکار و سیستم‌های نظارتی پیشرفته استفاده می‌کنیم تا امنیت کامل داده‌های شما را تضمین کنیم.</p>
        </template>
      </SubmenuItem>

      <!-- منوی چهارم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">4.</span>
          <span class="text-sm sm:text-base md:text-lg">آیا امکان مقیاس‌پذیری در سرویس‌های ابری ابرآوران وجود دارد؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">بله، یکی از مزایای اصلی سرویس‌های ابری ابرآوران، مقیاس‌پذیری است. شما می‌توانید منابع مورد نیاز خود را بر اساس نیاز کسب و کارتان افزایش یا کاهش دهید، بدون اینکه نیاز به تغییرات زیرساختی داشته باشید.</p>
        </template>
      </SubmenuItem>

      <!-- منوی پنجم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">5.</span>
          <span class="text-sm sm:text-base md:text-lg">پشتیبانی فنی ابرآوران چگونه است؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">ابرآوران با تیم پشتیبانی فنی حرفه‌ای و 24/7 در خدمت شماست. کارشناسان ما آماده پاسخگویی به سوالات و رفع مشکلات شما هستند و در تمام مراحل استفاده از سرویس‌های ابری در کنار شما خواهند بود.</p>
        </template>
      </SubmenuItem>

      <!-- منوی ششم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">6.</span>
          <span class="text-sm sm:text-base md:text-lg">آیا امکان انتقال داده‌ها از سرویس‌های دیگر به ابرآوران وجود دارد؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">بله، تیم فنی ابرآوران در انتقال داده‌ها و برنامه‌های شما از سرویس‌های دیگر به زیرساخت ابری ما کمک می‌کند. این فرآیند با کمترین اختلال در خدمات شما انجام می‌شود.</p>
        </template>
      </SubmenuItem>

      <!-- منوی هفتم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">7.</span>
          <span class="text-sm sm:text-base md:text-lg">آیا ابرآوران از برنامه‌های خاصی پشتیبانی می‌کند؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">ابرآوران از طیف گسترده‌ای از برنامه‌ها و پلتفرم‌ها پشتیبانی می‌کند. از برنامه‌های وب ساده تا برنامه‌های پیچیده با نیازهای خاص، همه می‌توانند روی زیرساخت ابری ما اجرا شوند.</p>
        </template>
      </SubmenuItem>

      <!-- منوی هشتم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">8.</span>
          <span class="text-sm sm:text-base md:text-lg">آیا ابرآوران پشتیبانی فنی ارائه می‌دهد؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">بله، ابرآوران پشتیبانی فنی 24/7 ارائه می‌دهد. تیم پشتیبانی ما آماده پاسخگویی به سوالات شما و کمک به حل مشکلات احتمالی است. همچنین مرکز راهنما و آموزش‌های ویدیویی نیز در دسترس شما قرار دارد.</p>
        </template>
      </SubmenuItem>
    </div>
  </div>
</template>

<script>
import SubmenuItem from './SubmenuItem.vue'

export default {
  name: 'FAQSection',
  components: {
    SubmenuItem
  }
}
</script>

<style scoped>
.faq-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
}

@media (min-width: 640px) {
  .faq-container {
    padding: 0 15px;
  }
}

@media (min-width: 768px) {
  .faq-container {
    padding: 0 20px;
  }
}
</style>


