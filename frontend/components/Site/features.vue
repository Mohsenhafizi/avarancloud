<template>
<div class="hidden md:flex justify-center">
  <img class="relative left-2 bottom-20 lg:bottom-10 w-80 h-60 rotate-20" src="../../assets/photos/arrrow6.png" alt="طراحی سایت با سایت ساز ابرآوران" data-aos="fade-up" data-aos-duration="1000">
</div>
    <div class="relative bottom-10 md:bottom-30 z-0">
        <div class="text-center text-purple-950 py-10 lg:pt-20 text-4xl md:text-6xl font-bold mx-4" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
            چرا سایت ساز ابرآوران را برای طراحی سایت انتخاب کنید؟
        </div>
        <div class="text-center text-xl md:text-2xl mx-10 md:mx-20 xl:mx-100" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            سایت ساز ابرآوران یک پلتفرم حرفه‌ای طراحی سایت است که با امکانات پیشرفته و رابط کاربری ساده، طراحی وب‌سایت را برای شما آسان می‌کند. با سایت ساز ابرآوران می‌توانید سایت خود را با استانداردهای روز دنیا طراحی کنید، از بهینه‌سازی سئو برای موتورهای جستجو بهره‌مند شوید و پشتیبانی فنی ۲۴/۷ دریافت کنید.
        </div>
    </div>
</template>

<script>
export default {
    name: 'StoreFeatures',
    mounted() {
        // Initialize AOS
        if (typeof window !== 'undefined') {
            import('aos').then((AOS) => {
                AOS.default.init({
                    once: true,
                    offset: 100,
                    duration: 1000,
                });
            });
        }
    }
}
</script>

<style scoped>
/* Add smooth transitions */
.text-center {
    transition: all 0.3s ease-in-out;
}
</style>

