<template>
      <div class="hero container-inner mx-4 lg:mx-40 flex flex-col sm:flex-row justify-between items-center py-7 md:py-14">
        <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-right pt-25 lg:pt-14 animate-fade-in">
          <div class="inline-block text-green-700 leading-tight animate-slide-in-right delay-200 pl-1">ابرآوران: </div>
          <div class="inline-block leading-tight animate-slide-in-right">خلق حضور دیجیتال قدرتمند و ماندگار </div>
          <div class="text-xl font-normal mt-6 text-gray-800 animate-fade-in delay-300">
            <p class="mb-4">ابرآوران بیش از یک شرکت طراحی وب است؛ ما یک شریک دیجیتال واقعی برای کسب‌وکارها هستیم. هر پروژه برای ما یک فرصت است تا تجربه‌ای بی‌نظیر و لوکس در فضای آنلاین خلق کنیم، جایی که طراحی، سرعت، امنیت و عملکرد در بالاترین سطح ترکیب می‌شوند.
            </p>
            <p class="mb-4">تیم ما از متخصصان طراحی، توسعه و تجربه کاربری تشکیل شده است که با استانداردهای جهانی و آخرین فناوری‌ها کار می‌کنند. ما باور داریم هر وب‌سایت باید نه تنها زیبا باشد، بلکه ابزاری واقعی برای رشد کسب‌وکار باشد و ارزش برند را به شکلی ملموس افزایش دهد.</p>
            <p>ابرآوران در هر مرحله، از تحلیل دقیق نیازها و برنامه‌ریزی استراتژیک گرفته تا طراحی اختصاصی، پیاده‌سازی کامل و پشتیبانی حرفه‌ای، کنار شماست. نتیجه، سایتی مدرن، قدرتمند و لوکس است که مخاطبان را جذب می‌کند و اعتماد آن‌ها را جلب می‌نماید.</p>
          </div>
        </div>
        <div class="mt-8 sm:mt-18 md:mt-10 lg:flex lg:items-center lg:justify-center animate-float">
          <img src="~assets/svg/developer.svg" alt="hero" class="mx-auto sm:mx-0 lg:w-[400px] lg:h-[200px]" />
        </div>
      </div> <!-- end hero -->
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero {
    gap: 2rem;
  }
}

/* Animation Classes */
.animate-fade-in {
  animation: fadeIn 1s ease-in;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

/* Keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>