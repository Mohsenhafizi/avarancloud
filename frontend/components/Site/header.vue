<template>
    <div class="z-0 shop color relative top-20 mb-36 md:mb-40 md:top-30 lg:mx-38 flex items-center justify-center bg-blue-50 md:rounded-3xl md:py-10">
      <div class="mx-auto pt-18 pb-10 md:pb-0 md:pt-0 md:py-20">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 px-4">
          <div class="md:w-1/2 mx-20 relative">
            <div class="md:mt-10">
              <span class="text-center text-purple-950 md:text-right text-3xl md:text-5xl 2xl:text-6xl font-bold block" data-aos="fade-up">
                  فروشگاه‌ساز ابرآوران,
                  سایت‌ساز کسب‌وکار شما 
              </span>    
              <span class="absolute top-18 sm:top-18 mx-10 flex -z-10" data-aos="fade-up">
                <img class="w-80" src="../../assets/svg/vector-7.svg" alt="">
              </span>
              <p class="text-center md:text-right text-lg md:text-xl 2xl:text-2xl py-10" data-aos="fade-up">
                ساخت سایت فروشگاهی با تمام امکانات لازم برای مدیریت سایت و سفارشات مانند
                خدمات پرداخت و ارسال ابزارهای جذب ترافیک و مشتری و افزایش فروش تضمینی
              </p>
              <div class="flex justify-center md:justify-start"> 
              <div class="shadow__btn flex justify-center w-40">
                    ثبت نام
              </div>
              </div>
            </div>
          </div>
          
          
          <div class="md:w-1/2 flex md:justify-end justify-center mx-5">
            <img class="w-full max-w-lg" src="../../assets/svg/shopping.svg" alt="تصویر فروشگاه‌ساز">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'StoreHeader'
}
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
</style>