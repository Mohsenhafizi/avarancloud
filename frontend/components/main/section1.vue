<template>
  <div
    class="md:mx-20 pb-10 mt-5 md:mt-30 flex items-center justify-center min-h-screen bg-blue-50 rounded-3xl"
  >
    <div class="text-center p-8">
      <h1
        class="text-3xl md:text-5xl text-center font-bold my-10"
        data-aos="fade-up"
      >
        ابرآوران سوپرسرویس آنلاین کسب‌وکارها
      </h1>
      <p class="text-lg md:text-2xl py-10" data-aos="fade-up">
        ساخت سایت فروشگاهی با تمام امکانات لازم برای مدیریت سایت و سفارشات مانند
        خدمات پرداخت و ارسال ابزارهای جذب ترافیک و مشتری و افزایش فروش تضمینی<br />
        ابرآوران
      </p>

      <div class="flex justify-center">
        <div class="card">
          <div class="content">
            <span class="logo-bottom-text">avarancloud</span>
            <div class="border"></div>
          </div>
        </div>
      </div>
      <br />

      <div class="mx-20 sm:mx-30 md:mx-40">
        <div
          class="relative top-13 inline-block group mt-2 right-20 md:right-78 z-10"
        >
          <button
            class="relative bottom-8 px-2 py-1 sm:px-5 sm:py-2 md:px-10 md:py-3 text-xs md:text-sm font-semibol bg-slate-200 rounded-3xl border-2 border-slate-300 hover:border-3 hover:border-blue-200 transition-all duration-300 overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r group-hover:opacity-75 transition-opacity"
            ></div>

            <span
              class="relative text-xs sm:text-md flex items-center gap-1 sm:gap-2"
            >
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>

              https://avarancloud.ir
            </span>
          </button>

          <div
            class="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-45 -translate-x-1/2 mb-3 w-20 md:w-30 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2"
          >
            <div
              class="rounded-br-3xl rounded-t-3xl bg-stone-200 p-1.5 text-sm md:text-md"
            >
              اتصال دامنه
            </div>
          </div>
        </div>
        <div class="float-left">
          <button
            class="faq-button transition-all right-8 top-[70px] sm:top-[90px] border-2 border-slate-300 hover:border-3 hover:border-blue-200 inline-block z-10"
          >
            <div class="p-2 md:p-4">
              <svg
                class=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </div>
            <span class="tooltip xs-text-blue-400 px-2 text-xs md:text-lg md:px-4"
              >خدمات وفادارسازی مشتری و جذب بازدید کننده</span
            >
          </button>
        </div>
        <div class="relative inline-block group z-0">
          <div class="md:w-[400px] lg:w-[700px]">
            <img
              class="hidden md:inline-block hover:border-r-2 hover:border-r-blue-500 hover:border-l-2 hover:border-l-blue-500 hover:border-t-2 hover:border-t-blue-500 rounded-t-3xl rounded-b-4xl"
              src="../../assets/photos/ghahve.png"
              alt="error"
            />
            <img
              class="inline-block md:hidden"
              src="../../assets/photos/mobile-screen.png"
              alt="error"
            />
          </div>
          <div
            class="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-70 md:bottom-86 -right-30 md:right-10 -translate-x-1/2 w-20 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2"
          >
            <div
              class="rounded-br-3xl rounded-t-3xl text-sm md:text-md bg-stone-300 p-1 sm:px-2 sm:py-3"
            >
              نمونه کار
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineComponent({
    name: 'NavDesktop',
    setup() {
        onMounted(() => {
            AOS.init();
        });
    }
});
</script>

<style>
.card {
  width: 220px;
  height: 100px;
  background: #243137;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  place-content: center;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

#logo-main,
#logo-second {
  height: 100%;
}

#logo-main {
  fill: #bd9f67;
}

#logo-second {
  padding-bottom: 10px;
  fill: none;
  stroke: #bd9f67;
  stroke-width: 1px;
}

.border {
  position: absolute;
  inset: 0px;
  border: 2px solid #bd9f67;
  opacity: 0;
  transform: rotate(10deg);
  transition: all 0.5s ease-in-out;
}

.bottom-text {
  position: absolute;
  left: 50%;
  bottom: 13px;
  transform: translateX(-50%);
  font-size: 6px;
  text-transform: uppercase;
  padding: 0px 5px 0px 8px;
  color: #bd9f67;
  background: #243137;
  opacity: 0;
  letter-spacing: 7px;
  transition: all 0.5s ease-in-out;
}

.content {
  transition: all 0.5s ease-in-out;
}

.content .logo {
  height: 35px;
  position: relative;
  width: 33px;
  overflow: hidden;
  transition: all 1s ease-in-out;
}

.content .logo .logo1 {
  height: 33px;
  position: absolute;
  left: 0;
}

.content .logo .logo2 {
  height: 33px;
  position: absolute;
  left: 33px;
}

.content .logo .trail {
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}

.content .logo-bottom-text {
  position: absolute;
  bottom: 32%;
  transform: translate(-50%, -50%);
  margin-top: 30px;
  color: #bd9f67;
  padding-left: 8px;
  font-size: 11px;
  opacity: 0;
  letter-spacing: none;
  transition: all 0.5s ease-in-out 0.5s;
}

.card:hover {
  border-radius: 0;
  transform: scale(1.1);
}

.card:hover .logo {
  width: 100px;
  animation: opacity 1s ease-in-out;
}

.card:hover .border {
  inset: 15px;
  opacity: 1;
  transform: rotate(0);
}

.card:hover .bottom-text {
  letter-spacing: 3px;
  opacity: 1;
  transform: translateX(-50%);
}

.card:hover .content .logo-bottom-text {
  opacity: 1;
  letter-spacing: 9.5px;
}

.card:hover .trail {
  animation: trail 1s ease-in-out;
}

@keyframes opacity {
  0% {
    border-right: 1px solid transparent;
  }

  10% {
    border-right: 1px solid #bd9f67;
  }

  80% {
    border-right: 1px solid #bd9f67;
  }

  100% {
    border-right: 1px solid transparent;
  }
}

@keyframes trail {
  0% {
    background: linear-gradient(
      90deg,
      rgba(189, 159, 103, 0) 90%,
      rgb(189, 159, 103) 100%
    );
    opacity: 0;
  }

  30% {
    background: linear-gradient(
      90deg,
      rgba(189, 159, 103, 0) 70%,
      rgb(189, 159, 103) 100%
    );
    opacity: 1;
  }

  70% {
    background: linear-gradient(
      90deg,
      rgba(189, 159, 103, 0) 70%,
      rgb(189, 159, 103) 100%
    );
    opacity: 1;
  }

  95% {
    background: linear-gradient(
      90deg,
      rgba(189, 159, 103, 0) 90%,
      rgb(189, 159, 103) 100%
    );
    opacity: 0;
  }
}
.faq-button {
  border-radius: 50%;
  border: none;
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.151);
  position: relative;
}
.faq-button svg {
  height: 2em;
  fill: white;
}
@media (min-width: 480px) and (max-width: 640px) {
  .faq-button {
    left: -25px;
  }
}
.faq-button:hover svg {
  animation: jello-vertical 0.7s both;
}
@keyframes jello-vertical {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(0.75, 1.25, 1);
  }
  40% {
    transform: scale3d(1.25, 0.75, 1);
  }
  50% {
    transform: scale3d(0.85, 1.15, 1);
  }
  65% {
    transform: scale3d(1.05, 0.95, 1);
  }
  75% {
    transform: scale3d(0.95, 1.05, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

.tooltip {
  position: absolute;
  top: 20px;
  opacity: 0;
  background-color: #a2a2a2;
  /* background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%); */
 color: white; 
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.2s;
  pointer-events: none;
  letter-spacing: 0.5px;
}

.faq-button:hover .tooltip {
  top: 65px;
  right: 57px;
  opacity: 1;
  transition-duration: 0.3s;
}
@media (max-width: 768px) {
  .faq-button:hover .tooltip {
    top: 40px;
    right: 30px;
  }
}


</style>
