<template>
    <div class="lg:hidden">   
      <div class="text-center font-bold text-2xl sm:text-3xl mx-2 mt-6">
        :ابرآوران بهترین انتخاب برای کسب‌وکار شماست، چون
      </div> 
        <ClientOnly>
          <div class="button-container absolute z-10">
              <button class="button-3d top-40" @click="swiper.prev()">
                <div class="button-top">
                  <span class="material-icons pt-1">❮</span>
                </div> 
                <div class="button-bottom"></div>
                <div class="button-base"></div>
              </button>
        </div>
      <swiper-container class="z-0" ref="containerRef">
        <swiper-slide class="flex justify-center mb-14 mt-10">
          <div class="cart">
            <div class="flex justify-center my-2">
              <img class="w-50 h-40 border-2 border-slate-200 rounded-3xl" src="../../assets/svg/card1.svg" alt="">
            </div>
            <div class="px-4.5">
              <p class="font-bold pb-5 text-md">قابل توسعه‌ست</p>
              <p class="pb-8 text-sm">
                با بسته‌های مکمل ابرآوران می‌تونید کسب‌وکار آنلاین خودتون رو مرحله به مرحله، رشد و توسعه بدید
              </p>
            </div>
        </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center mb-14 mt-10">
          <div class="cart">
          <div class="w-60 h-30 my-12">
            <img class="mx-4.5 px-8 border-2 border-slate-200 rounded-3xl" src="../../assets/photos/card.png" alt="">
          </div>
          <div class="px-4.5">
            <p class="font-bold pb-5 text-lg">
                در دسترسه
            </p>
            <p class="pb-8">
                از هر جایی و در هر زمانی از شبانه‌روز به سایتتون دسترسی دارید و می‌تونید مدیریتش کنید
            </p>
          </div>
          </div>
        </swiper-slide>
        <swiper-slide class="flex justify-center mb-14 mt-10">
          <div class="cart">
          <div class="flex justify-center my-2">
            <img class="w-60 h-45 px-8 border-2 border-slate-200 rounded-3xl" src="../../assets/svg/card3.svg" alt="">
          </div>
          <div class="px-4.5">
            <p class="font-bold pb-5 text-lg">
                در دسترسه
            </p>
            <p class="pb-8">
                از هر جایی و در هر زمانی از شبانه‌روز به سایتتون دسترسی دارید و می‌تونید مدیریتش کنید
            </p>
          </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="button-container relative z-10 flex justify-end">
          <button class="button-3d bottom-[286px]" @click="swiper.next()">
                <div class="button-top">
                  <span class="material-icons pt-1">❯</span>
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
const containerRef = ref(null)

const swiper = useSwiper(containerRef)

onMounted(() => {
  console.log(swiper.instance)
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