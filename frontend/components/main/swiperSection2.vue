<template>
    <div class="relative top-20 lg:hidden">   
      <div class="text-center font-bold text-2xl sm:text-3xl mx-2 mt-6">
        :ابرآوران بهترین انتخاب برای کسب‌وکار شماست، چون
      </div> 
        <ClientOnly>
          <div class="button-container pt-0.5 absolute z-10">
              <button class="button-3d top-36" @click="prevSlide">
                <div class="button-top">
                  <span class="material-icons">❮</span>
                </div> 
                <div class="button-bottom"></div>
                <div class="button-base"></div>
              </button>
        </div>
      <swiper-container class="z-0" ref="containerRef">
        <swiper-slide class="flex justify-center mb-14 mt-10">
          <div class="cart">
            <div class="flex justify-center md:my-1">
              <img class="w-50 h-36 md:w-60 md:h-44 border-2 border-slate-200 rounded-3xl" src="../../assets/photos/card.png" alt="">
            </div>
            <div class="px-4.5">
              <p class="font-bold pt-2 text-md md:text-lg">قابل توسعه‌ست</p>
              <p class="py-4 md:pb-9 text-sm md:text-[16px]">
                با بسته‌های سایت ساز و ابر ساز ابرآوران می‌تونید کسب‌وکار آنلاین خودتون رو مرحله به مرحله، رشد و توسعه بدید
              </p>
            </div>
        </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center mb-14 mt-10">
          <div class="cart">
          <div class="pb-2 md:pb-3">
            <img class="mx-2 md:mx-5 w-50 h-36 md:w-60 md:h-44 border-2 border-slate-200 rounded-3xl" src="../../assets/svg/icon.svg" alt="">
          </div>
          <div class="px-4.5">
            <p class="font-bold pb-4 text-md md:text-lg">
                در دسترسه
            </p>
            <p class="pb-9 text-sm md:text-[16px]">
                از هر جایی و در هر زمانی از شبانه‌روز به سایتتون دسترسی دارید و می‌تونید مدیریتش کنید
            </p>
          </div>
          </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center mb-14 mt-10">
          <div class="cart">
          <div class="flex justify-center">
            <img class="w-50 h-36 md:w-60 md:h-44 px-8 border-2 border-slate-200 rounded-3xl" src="../../assets/svg/icon2.svg" alt="">
          </div>
          <div class="px-4.5">
            <p class="font-bold pt-2 text-md md:text-lg">
              پشتیبانی اول تا آخر راه
            </p>
            <p class="py-4 text-sm md:text-[16px]">
              از اولین گفت و گوی ما با شما تا راه اندازی کامل سایت و فروش محصولاتتان,پشتیبانی فنی و غیرفنی در دسترس شماست
            </p>
          </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="button-container pt-0.5 relative z-10 flex justify-end">
          <button class="button-3d bottom-[252px] md:bottom-[300px]" @click="nextSlide">
                <div class="button-top">
                  <span class="material-icons">❯</span>
                </div>
                <div class="button-bottom"></div>
                <div class="button-base"></div>
        </button>
        </div>
    </ClientOnly>
    <div class="flex justify-center relative bottom-24">
  <button class="div">
    <div class="state" id="moon">شروع کنید</div>
    <div class="state" id="sun">شروع کنید</div>
    <span class="lightRotation"></span>
    <span class="lightRotation2"></span>
    <span class="lightRotation3"></span>
    <span class="lightRotation4"></span>
</button>
</div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const containerRef = ref(null)
const swiper = useSwiper(containerRef)
const autoplayInterval = ref<number | null>(null)
const autoplayDelay = 4000 // 5 seconds delay between slides
const currentIndex = ref(0)
const totalSlides = ref(3) // We have 3 slides in the template

// Function to go to the next slide
const nextSlide = () => {
  if (swiper) {
    // Check if we're at the last slide
    if (currentIndex.value >= totalSlides.value - 1) {
      // If at the last slide, go back to the first slide
      swiper.to(0)
      currentIndex.value = 0
    } else {
      // Otherwise, go to the next slide
      swiper.next()
      currentIndex.value++
    }
  }
}

// Function to go to the previous slide
const prevSlide = () => {
  if (swiper) {
    // Check if we're at the first slide
    if (currentIndex.value <= 0) {
      // If at the first slide, go to the last slide
      swiper.to(totalSlides.value - 1)
      currentIndex.value = totalSlides.value - 1
    } else {
      // Otherwise, go to the previous slide
      swiper.prev()
      currentIndex.value--
    }
  }
}

// Start autoplay
const startAutoplay = () => {
  // Clear any existing interval
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
  
  // Set a new interval
  autoplayInterval.value = window.setInterval(() => {
    nextSlide()
  }, autoplayDelay)
}

// Stop autoplay
const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
    autoplayInterval.value = null
  }
}

onMounted(() => {
  console.log(swiper.instance)
  
  // Start autoplay when component is mounted
  startAutoplay()
})

onBeforeUnmount(() => {
  // Clean up interval when component is unmounted
  stopAutoplay()
})
</script>

<style>
swiper-slide{
  direction: rtl;
}
.button-3d {
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  border-width: 0;
  padding: 0 8px;
  min-width: 4em;
  min-height: 4em;
  box-sizing: border-box;
  background: transparent;
  font: inherit;
  cursor: pointer;
  margin: 10px;
  border-radius: 20px;
}

.button-top {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  padding-block: 6px;
  transform: translateY(0);
  color: #fff;
  background-image: linear-gradient(145deg, #6a11cb, #2575fc);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: transform 0.3s, border-radius 0.3s, background 10s;
}

.button-3d:active .button-top {
  border-radius: 10px 10px 8px 8px / 8px;
  transform: translateY(2px);
  background-image: linear-gradient(145deg, #2575fc, #6a11cb);
}

.button-bottom {
  position: absolute;
  z-index: 1;
  bottom: 8px;
  left: 8px;
  border-radius: 20px;
  padding-top: 6px;
  width: calc(90% - 8px);
  height: calc(90% - 10px);
  background-image: linear-gradient(145deg, #2575fc, #6a11cb);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
  transition: border-radius 0.2s, padding-top 0.2s;
}



.button-3d:active .button-bottom {
  border-radius: 10px 10px 8px 8px / 8px;
  padding-top: 0;
}

.button-3d:active .button-base {
  border-radius: 10px 10px 8px 8px / 8px;
}

</style>