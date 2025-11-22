<template>
    <div class="z-0 shop color relative top-16 mb-36 md:mb-40 md:top-30 lg:mx-38 flex items-center justify-center bg-blue-50 md:rounded-3xl md:py-10">
      <div class="mx-auto pt-18 pb-10 md:pb-0 md:pt-0 md:py-20">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 px-4">
          <div class="md:w-1/2 mx-10 md:mx-20 relative">
            <div class="md:mt-10">
              <h1 class="text-center text-purple-950 md:text-right text-3xl md:text-5xl 2xl:text-6xl font-bold block animate-title" data-aos="fade-up" data-aos-delay="200">
                  سایت‌ساز حرفه‌ای ابرآوران | طراحی سایت شخصی و شرکتی
              </h1>    
              <span class="absolute top-26 sm:top-18 mx-10 flex -z-10" data-aos="fade-up">
                <img class="w-80" src="/svg/vector-7.svg" alt="سایت ساز حرفه‌ای ابرآوران">
              </span>
              <h2 class="text-center md:text-right text-lg md:text-xl 2xl:text-2xl pt-8 pb-4 md:py-10 animate-text" data-aos="fade-up" data-aos-delay="600">
                طراحی سایت حرفه‌ای با سایت ساز ابرآوران - تمام امکانات مورد نیاز برای مدیریت محتوا، 
                بهینه‌سازی SEO، طراحی واکنش‌گرا و پشتیبانی فنی 24/7 برای موفقیت کسب و کار آنلاین شما
              </h2>
              <div class="mb-3 flex justify-center md:justify-start" data-aos="zoom-in" data-aos-delay="800"> 
                <NuxtLink to="/about-us#contact-us" class="shadow__btn flex justify-center w-40 pulse-button">
                    درخواست طراحی سایت
                </NuxtLink>
              </div>
            </div>
          </div>
          
          <div class="md:w-1/2 flex md:justify-end justify-center md:relative md:left-10" data-aos="fade-left" data-aos-delay="1000">
            <img class="w-full max-w-lg floating-image" src="../../assets/photos/website-builder.png" alt="طراحی سایت با سایت ساز ابرآوران">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineComponent({
    name: 'StoreHeader',
    setup() {
        onMounted(() => {
            AOS.init({
                duration: 1000, // مدت زمان انیمیشن به میلی‌ثانیه
                easing: 'ease-in-out',
                once: true,
            });
        });
    }
});
</script>

<style>
.shop {
    direction: rtl;
}
.shadow__btn {
  padding: 10px 20px;
  border: none;
  font-size: 20px;
  color: #fff;
  border-radius: 7px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
  cursor: pointer;
}

.shadow__btn {
  background: rgb(0,140,255);
  box-shadow: 0 0 25px rgb(0,140,255);
}

.shadow__btn:hover {
  box-shadow: 0 0 5px rgb(0,140,255),
              0 0 25px rgb(0,140,255),
              0 0 50px rgb(0,140,255),
              0 0 100px rgb(0,140,255);
}
.color {
  position: relative;
  overflow: hidden;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2),
    rgba(0, 0, 0, 0.1)
  );
}

.color::before,
.color::after {
  content: "";
  position: absolute;
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
  transform: translate(-50%, -50%);
  animation: rotate 8s linear infinite;
  filter: blur(50px); /* Create a soft glowing effect */
  opacity: 0.8;
}

.color::after {
  width: 180%;
  height: 180%;
  animation: rotate-reverse 10s linear infinite;
  opacity: 0.5;
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

/* New animations */
.animate-title {
  animation: slideInDown 1s ease-out;
}

.animate-text {
  animation: fadeIn 1.5s ease-out;
}

.floating {
  animation: float 6s ease-in-out infinite;
}

.floating-image {
  animation: float 8s ease-in-out infinite;
}

.pulse-button {
  animation: pulse 2s infinite;
}

@keyframes slideInDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
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

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>