<template>
<div class="mt-20 z-10 relative bottom-10 hidden lg:block">
<div class="text-purple-950 text-center font-bold text-4xl sm:text-5xl mb-6">
  چرا ابرآوران؟
</div>

<div class="flex flex-col lg:flex-row items-center justify-center mb-10 mt-10 gap-18">
  <div class="cart">
          <div class="flex justify-center my-4 mx-6">
            <img class="" src="../../assets/photos/mirdata-laptop2.png" alt="پشتیبانی سایت">
          </div>
          <div class="px-4.5">
            <p class="font-bold pb-4 text-lg">
              طراحی واقعی، نه قالب تکراری
            </p>
            <p class="pb-3">
              هر صفحه با توجه به نیاز و نوع فعالیتت ساخته می‌شود. هدف ما ساخت یک تجربه کاربری روان و قابل‌اعتماد است.
            </p>
          </div>
  </div>

  <div class="cart">
          <div class="flex justify-center my-4 mx-5">
            <img class="" src="../../assets/photos/mirdata-invitation.jpg" alt="دسترسی سایت">
          </div>
          <div class="px-4.5">
            <p class="font-bold pb-5 text-lg">
              امنیت و نگهداری مداوم
            </p>
            <p class="pb-7">
              از به‌روزرسانی سیستم تا جلوگیری از حملات _ ما مراقب هستیم تا تو فقط روی کار خودت تمرکز کنی.
            </p>
          </div>
  </div>

  <div class="cart">
          <div class="flex justify-center my-4 mx-5">
            <img class="" src="../../assets/photos/mirdata-standup.jpg" alt="قابل توسعه سایت">
          </div>
          <div class="px-4.5">
            <p class="font-bold pb-4.5 text-lg">
              پشتیبانی واقعی
            </p>
            <p class="pb-7">
              نه تیکت ساختگی، نه ربات. هر زمان مشکل یا نیاز جدیدی داشته باشی، پاسخ واقعی می‌گیری.
            </p>
          </div>
  </div>

</div>

<div class="flex justify-center">
  <NuxtLink to="/site-builder" class="create-site-button">
    <div class="state" id="moon">ساخت سایت جدید</div>
    <div class="state" id="sun">ساخت سایت جدید</div>
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
.create-site-button {
  --sunGradient: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);
  --moonGradient: linear-gradient(to top, #cc208e 0%, #6713d2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 170px;
  height: 70px;
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

.create-site-button:hover {
  box-shadow: -15px -15px 500px white;
  transition: 0.2s;
}

.create-site-button:hover span {
  background: var(--sunGradient);
}

.state {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
  transition: 0.4s;
  width: 95%;
  height: 92%;
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

.create-site-button:hover #sun {
  display: flex;
}

.create-site-button:hover #moon {
  display: none;
}

.create-site-button:hover .lightRotation {
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