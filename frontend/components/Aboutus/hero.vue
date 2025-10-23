<template>
      <div class="hero container-inner mx-4 lg:mx-40 flex flex-col sm:flex-row justify-between items-center py-7 md:py-14">
        <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-right pt-25 lg:pt-14 animate-fade-in">
          <div class="leading-tight animate-slide-in-right">مدیریت هوشمند زیرساخت‌های ابری</div>
          <div class="text-green-700 leading-tight animate-slide-in-right delay-200">با ابرآوران</div>
          <div class="text-xl font-normal mt-6 text-gray-800 animate-fade-in delay-300">
            <p class="mb-4"> ابرآوران با بیش از 10 سال تجربه در زمینه خدمات ابری، ارائه‌دهنده راهکارهای نوین در حوزه محاسبات ابری و مدیریت زیرساخت‌های IT است. ما با تیمی متخصص و متعهد، خدمات خود را با بالاترین استانداردهای کیفیت و امنیت ارائه می‌دهیم.</p>
            <p class="mb-4">پلتفرم ما با استفاده از آخرین تکنولوژی‌های روز دنیا، امکان مدیریت هوشمند منابع، بهینه‌سازی هزینه‌ها و افزایش امنیت را برای کسب‌وکارها فراهم می‌کند. ما معتقدیم که با استفاده از تکنولوژی‌های ابری، می‌توانیم به مشتریان خود کمک کنیم تا به اهداف تجاری خود دست یابند.</p>
            <p>تیم ما متشکل از متخصصان با تجربه در زمینه‌های مختلف فناوری اطلاعات، امنیت سایبری و مهندسی نرم‌افزار است. ما همواره در حال توسعه و بهبود خدمات خود هستیم و به صورت مداوم تکنولوژی‌های جدید را به پلتفرم خود اضافه می‌کنیم.</p>
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