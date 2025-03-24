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
          <span class="text-sm sm:text-base md:text-lg">چطور باید با ابرآوران سایت بسازم؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">وقتی در ابرآوران ثبت نام کنید پکیج کلیک براتون به صورت پیش فرض و کاملا رایگان فعال میشه و فقط کافیه 6 مرحله افتتاح فروشگاه رو تکمیل کنید تا سایت کسب و کارتون راه اندازی بشه</p>
        </template>
      </SubmenuItem>

      <!-- منوی دوم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">2.</span>
          <span class="text-sm sm:text-base md:text-lg">آیا برای ساخت سایت با ابرآوران نیاز به دانش برنامه‌نویسی دارم؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">خیر، ابرآوران به گونه‌ای طراحی شده که هر کسی بدون نیاز به دانش فنی بتواند سایت خود را راه‌اندازی کند. رابط کاربری ساده و امکانات drag-and-drop به شما کمک می‌کند تا به راحتی سایت خود را بسازید.</p>
        </template>
      </SubmenuItem>

      <!-- منوی سوم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">3.</span>
          <span class="text-sm sm:text-base md:text-lg">هزینه استفاده از خدمات ابرآوران چقدر است؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">ابرآوران پلن‌های مختلفی دارد که متناسب با نیازهای کسب و کارهای مختلف طراحی شده‌اند. پکیج کلیک به صورت رایگان ارائه می‌شود و پکیج‌های پیشرفته‌تر با امکانات بیشتر با قیمت‌های مقرون به صرفه در دسترس هستند.</p>
        </template>
      </SubmenuItem>

      <!-- منوی چهارم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">4.</span>
          <span class="text-sm sm:text-base md:text-lg">آیا می‌توانم دامنه اختصاصی برای سایتم داشته باشم؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">بله، در ابرآوران می‌توانید دامنه اختصاصی خود را ثبت کنید یا دامنه‌ای که قبلاً خریداری کرده‌اید را به سایت خود متصل کنید. این کار باعث می‌شود برند شما حرفه‌ای‌تر به نظر برسد.</p>
        </template>
      </SubmenuItem>

      <!-- منوی پنجم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">5.</span>
          <span class="text-sm sm:text-base md:text-lg">آیا ابرآوران از فروشگاه آنلاین پشتیبانی می‌کند؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">بله، ابرآوران امکانات کاملی برای راه‌اندازی فروشگاه آنلاین ارائه می‌دهد. شما می‌توانید محصولات خود را اضافه کنید، قیمت‌گذاری کنید، موجودی انبار را مدیریت کنید و سفارشات را پیگیری کنید.</p>
        </template>
      </SubmenuItem>

      <!-- منوی ششم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">6.</span>
          <span class="text-sm sm:text-base md:text-lg">آیا سایت‌های ساخته شده با ابرآوران برای موبایل بهینه هستند؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">بله، تمام قالب‌های ابرآوران به صورت ریسپانسیو طراحی شده‌اند و با تمام دستگاه‌ها از جمله موبایل، تبلت و دسکتاپ سازگار هستند. این یعنی سایت شما روی هر دستگاهی به خوبی نمایش داده می‌شود.</p>
        </template>
      </SubmenuItem>

      <!-- منوی هفتم -->
      <SubmenuItem class="w-full">
        <template #title>
          <span class="bg-gray-400 rounded-lg px-2 py-1 text-xs ml-1.5 sm:px-2 sm:py-0.5 sm:ml-2 md:px-2.5 md:py-0.5 md:ml-3 sm:text-sm">7.</span>
          <span class="text-sm sm:text-base md:text-lg">آیا می‌توانم سایتم را به شبکه‌های اجتماعی متصل کنم؟</span>
        </template>
        <template #content>
          <p class="text-xs sm:text-sm md:text-base">بله، ابرآوران امکان اتصال سایت شما به شبکه‌های اجتماعی مختلف را فراهم می‌کند. شما می‌توانید دکمه‌های اشتراک‌گذاری را اضافه کنید و فید شبکه‌های اجتماعی خود را در سایت نمایش دهید.</p>
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


