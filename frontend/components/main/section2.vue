<template>
<div class="z-10 relative top-10 mb-20 hidden lg:block">
<div class="text-center font-bold text-2xl sm:text-3xl my-6">
   ابرآوران بهترین انتخاب برای کسب‌وکار شماست، چون:
</div>

<div class="flex flex-col lg:flex-row items-center justify-center mb-10 mt-10 gap-18">
  <div class="cart">
          <div class="flex justify-center my-5">
            <img class="w-60 h-36 px-8 border-2 border-slate-200 rounded-3xl" src="../../assets/svg/icon2.svg" alt="پشتبانی سایت">
          </div>
          <div class="px-4.5">
            <p class="font-bold pb-5 text-lg">
                پشتیبانی اول تا آخر راه
            </p>
            <p class="pb-3">
              از اولین گفت و گوی ما با شما تا راه اندازی کامل سایت و فروش محصولاتتان,پشتیبانی فنی و غیرفنی در دسترس شماست
            </p>
          </div>
  </div>

  <div class="cart">
          <div class="flex justify-center my-6">
            <img class="w-60 h-36 px-8 border-2 border-slate-200 rounded-3xl" src="../../assets/svg/icon.svg" alt="دسترسی سایت">
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

  <div class="cart">
          <div class="w-60 h-30 my-12">
            <img class="mx-4.5 px-8 border-2 border-slate-200 rounded-3xl" src="../../assets/photos/card.png" alt="قابل توسعه سایت">
          </div>
          <div class="px-4.5">
            <p class="font-bold pb-3 text-lg">
              قابل توسعه‌ست
            </p>
            <p class="pb-5">
              با بسته‌های سایت ساز و ابر ساز ابرآوران می‌تونید کسب‌وکار آنلاین خودتون رو مرحله به مرحله، رشد و توسعه بدید
            </p>
          </div>
  </div>

</div>

<div class="flex justify-center">
  <NuxtLink to="/site-builder" class="div">
    <div class="state" id="moon">شروع کنید</div>
    <div class="state" id="sun">شروع کنید</div>
    <span class="lightRotation"></span>
    <span class="lightRotation2"></span>
    <span class="lightRotation3"></span>
    <span class="lightRotation4"></span>
</NuxtLink>
</div>
</div>


</template>

<script lang="ts">

</script>


<style>
.cart {
  position: relative;
  background-color: white;
  width: 290px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 6px;
  border-radius: 20px;
  cursor: pointer;
}

.cart::before {
  content: '';
  position: absolute;
  inset: 0;
  left: -3px;
  margin: auto;
  width: 260px;
  height: 250px;
  border-radius: 10px;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.cart::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}

.cart:hover::after {
  filter: blur(30px);
}

.cart:hover::before {
  transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
}

@media (max-width: 800px) {
  .cart{
    width: 230px;
    height: 300px;
  }
  .cart::before {
    width: 210px;
    height: 270px;
  }
}

.swiper-wrapper {
width: 100%;
height: max-content !important;
padding-bottom: 64px !important;
-webkit-transition-timing-function: linear !important;
transition-timing-function: linear !important;
position: relative;
}
.swiper-pagination-bullet {
background: #4f46e5;
}
.div {
  --sunGradient: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);
  --moonGradient: linear-gradient(to top, #cc208e 0%, #6713d2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 140px;
  height: 60px;
  color: white;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 15px;
  background-color: transparent;
  transition: 0.5s;
  overflow: hidden;
  border: 4px solid black;
}

.div:hover {
  box-shadow: -15px -15px 500px white;
  transition: 0.2s;
}

.div:hover span {
  background: var(--sunGradient);
}

.state {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
  transition: 0.4s;
  width: 85%;
  height: 82%;
  border: 4px solid black;
}

#sun {
  display: none;
  background-color: #212121;
  opacity: 0.85;
}

#moon {
  background-color: #212121;
  opacity: 0.85;
}

.div:hover #sun {
  display: flex;
}

.div:hover #moon {
  display: none;
}

.div:hover .lightRotation {
  animation: 1s linear reverse infinite rotation413;
}

.div:hover .lightRotation2 {
  animation: 2s linear infinite rotation_413;
}

.div:hover .lightRotation3 {
  animation: 10s linear reverse infinite rotation_413;
}

.div:hover .lightRotation4 {
  animation: 3s linear infinite rotation_413;
}

.lightRotation {
  position: absolute;
  transition: 0.4s;
  z-index: -1;
  width: 60px;
  height: 500px;
  transform: rotate(50deg);
  border-radius: inherit;
  background: var(--moonGradient);
}

.lightRotation2 {
  position: absolute;
  transition: 0.4s;
  z-index: -1;
  width: 75px;
  height: 500px;
  transform: rotate(110deg);
  border-radius: inherit;
  background: var(--moonGradient);
}

.lightRotation3 {
  position: absolute;
  transition: 0.4s;
  z-index: -1;
  width: 40px;
  height: 260px;
  border-radius: inherit;
  background: var(--moonGradient);
}

.lightRotation4 {
  position: absolute;
  transition: 0.4s;
  z-index: -1;
  width: 24px;
  height: 220px;
  transform: rotate(100deg);
  border-radius: inherit;
  background: var(--moonGradient);
}

@keyframes rotation_413 {
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
}


.mb-20{
   direction: rtl;
}

</style>