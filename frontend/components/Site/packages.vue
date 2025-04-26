<template>
    <div class="hidden md:flex justify-center mr-20 lg:mr-50">
        <img class="relative bottom-42 w-100 h-100 -rotate-4" src="../../assets/photos/arrrow7.png" data-aos="fade-up" alt="بسته های سایت">
    </div>
<div class="z-10 flex justify-center items-center mb-56 lg:mb-22 relative -bottom-10 md:bottom-60">
<div class="flex lg:inline-block items-center flex-col lg:flex-row text-center" data-aos="fade-up">
  <div class="text-3xl mb-10 text-purple-950">بسته ها</div>

    <div class="bronze">
    <div class="card__border"></div>
    <div class="card_title__container">
        <span class="card_title">پکیج برنزی </span>
        <p class="card_paragraph">
            3 تا 12 تومان و پشتیبانی اختصاصی ماهانه 400 تا 2 تومان:
            مخصوص سایت های کوچک با صفحات استاتیک
        </p>
    </div>
    <hr class="line" />
    <ul class="card__list text-start">
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">دامنه و هاست رایگان </span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">پشتیبانی فنی</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">مقیاس پذیری سریع سایت در صورت حجم بالای کاربران</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">ویژه سایت های رزومه ای، شخصی، خبری، و دارای محتوای از قبل مشخص شده</span>
        </li>
    </ul>
    <NuxtLink to="/about-us#contact-us" @click="setSource('bronz')" class="click-to-call"> تماس بگیرید </NuxtLink>
    <div class="hidden lg:flex justify-center items-center relative top-36">
    <div class="costom">
    <div class="card__border"></div>
    <div class="card_title__container">
        <span class="card_title">پکیج سفارشی</span>
        <p class="card_paragraph">
            مخصوص سایت هایی با ویژگی خاص
        </p>
    </div>
    <hr class="line" />
    <ul class="card__list text-start">
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">دارای تمامی موارد پکیج برنزی به علاوه موارد سفارشی</span>
        </li>
    </ul>
    <NuxtLink to="/about-us#contact-us" @click="setSource('sefareshi')" class="click-to-call"> تماس بگیرید </NuxtLink>
    </div>
    </div>
    </div>
    <div class="silver my-8 lg:my-0 lg:mx-12">
    <div class="card__border"></div>
    <div class="card_title__container">
        <span class="card_title">پکیج نقره ای</span>
        <p class="card_paragraph">
            12 تا 60 تومان و پشتیبانی اختصاصی ماهانه 2 تا 4 تومن:
            مخصوص سایت های خدماتی متوسط
        </p>
    </div>
    <hr class="line" />
    <ul class="card__list text-start">
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">دارای تمامی موارد پکیج برنزی به علاوه موارد زیر</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">حذف و افزودن و تغییر گروهی قیمت محصولات</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">افزودن درگاه پیامکی و بانکی شما یا درگاه های اختصاصی ابرآوران</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">کیف پول داخلی سایت</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">باشگاه مشتریان</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">امکان چت و پیام به مشتریان</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">گزارش‌گیری از اطلاعات</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">قابلیت تبلیغات هوشمند و اتوماسیون بازاریابی</span>
        </li>
    </ul>
    <NuxtLink to="/about-us#contact-us" @click="setSource('nogrei')" class="click-to-call"> تماس بگیرید </NuxtLink>
    </div>
    <div class="golden mb-8 lg:mb-0">
    <div class="card__border"></div>
    <div class="card_title__container">
        <span class="card_title">پکیج طلایی</span>
        <p class="card_paragraph">
            بالای 60 تومان و پشتیبانی اختصاصی ماهانه 4 تا 7 تومان:
            مخصوص کسب و کار های فروشگاهی متوسط به بالا 
        </p>
    </div>
    <hr class="line" />
    <ul class="card__list text-start">
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">دارای تمامی موارد پکیج نقره ای به علاوه موارد زیر</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">دارای دستیار هوش مصنوعی در سایت</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">مجهز به سیستم های توصیه گر</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">وبلاگ اختصاصی سایت</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">دارای صفحات بهینه از نظر سئو و تجربه کاربر</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">پنل ادمین اختصاصی و پرقدرت جهت مدیریت محتوا و فروشگاه شما</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">درج اولیه محصولات شما به سایت</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">درج گروهی محصولات از سایت یا پلتفرم قبلی کسب و کار شما</span>
        </li>
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">حذف برندینگ ابرآوران</span>
        </li>
    </ul>
    <NuxtLink to="/about-us#contact-us" @click="setSource('talai')" class="click-to-call"> تماس بگیرید </NuxtLink>
    </div>
    <div class="lg:hidden flex justify-center">
    <div class="costom">
    <div class="card__border"></div>
    <div class="card_title__container">
        <span class="card_title">پکیج سفارشی</span>
        <p class="card_paragraph">
            مخصوص سایت هایی با ویژگی خاص
        </p>
    </div>
    <hr class="line" />
    <ul class="card__list text-start">
        <li class="card__list_item">
        <span class="check">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="check_svg"
            >
            <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
            ></path>
            </svg>
        </span>
        <span class="list_text">دارای تمامی موارد پکیج برنزی به علاوه موارد سفارشی</span>
        </li>
    </ul>
    <NuxtLink to="/about-us#contact-us" @click="setSource('sefareshi')" class="click-to-call"> تماس بگیرید </NuxtLink>
    </div>
    </div>
</div>
</div>

</template>

<script lang="ts" setup>
import { useState } from "#app";
import { computed } from "vue"; // وارد کردن computed از vue

// تعریف وضعیت
const source = useState("source", () => "");

// تابع تنظیم وضعیت
function setSource(value: string) {
  source.value = value;
}
</script>

<style scoped>
.costom {
    direction: rtl;
  --white: hsl(0, 5%, 8%);
  --black: hsl(240, 15%, 9%);
  --paragraph: hsl(0, 5%, 27%);
  --line: hsl(240, 9%, 17%);
  --primary: hsl(266, 92%, 58%);

  position: absolute;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  width: 19rem;
  background-color: rgb(138, 138, 159);
  background-image: radial-gradient(
      at 88% 40%,
      rgba(148, 201, 233, 1) 40%,
      transparent 85%
    ),
    radial-gradient(at 49% 30%, rgb(103, 98, 231) 65%, transparent 85%),
    radial-gradient(at 14% 26%, rgb(157, 173, 183) 100%, transparent 85%),
    radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
    radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
    radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);

  border-radius: 1rem;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
}
.costom .card__border {
  overflow: hidden;
  pointer-events: none;

  position: absolute;
  z-index: -10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-image: linear-gradient(
    0deg,
    hsl(0, 0%, 100%) -50%,
    hsl(0, 0%, 40%) 100%
  );

  border-radius: 1rem;
}

.costom .card__border::before {
  content: "";
  pointer-events: none;

  position: fixed;
  z-index: 200;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%), rotate(0deg);
  transform-origin: left;

  width: 200%;
  height: 10rem;
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0) 0%,
    hsl(277, 95%, 60%) 40%,
    hsl(277, 95%, 60%) 60%,
    hsla(0, 0%, 40%, 0) 100%
  );

  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.costom .card_title__container .card_title {
  font-size: 1rem;
  color: var(--white);
}

.costom .card_title__container .card_paragraph {
  margin-top: 0.5rem;
  width: 100%;

  font-size: 0.7rem;
  color: var(--paragraph);
}

.costom .line {
  width: 100%;
  height: 0.1rem;
  background-color: var(--line);

  border: none;
}

.costom .card__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.costom .card__list .card__list_item {
  display: flex;
  align-items: start;
  gap: 0.5rem;
}

.costom .card__list .card__list_item .check {
  display: flex;
  justify-content: center;
  align-items: center;

  width: full;
  height: full;
  background-color: var(--primary);

  border-radius: 50%;
}

.costom .card__list .card__list_item .check .check_svg {
  width: 0.8rem;
  height: 0.8rem;

  fill: var(--black);
}

.costom .card__list .card__list_item .list_text {
  font-size: 0.75rem;
  color: var(--white);
}

.costom .click-to-call {
  cursor: pointer;

  padding: 0.5rem;
  width: 100%;
  background-image: linear-gradient(
    0deg,
    rgba(94, 58, 238, 1) 0%,
    rgba(197, 107, 240, 1) 100%
  );

  font-size: 0.75rem;
  color: var(--white);

  border: 0;
  border-radius: 9999px;
  box-shadow: inset 0 -2px 25px -4px var(--white);
}
.silver {
    direction: rtl;
  --white: hsl(0, 5%, 8%);
  --black: hsl(240, 15%, 9%);
  --paragraph: hsl(0, 5%, 27%);
  --line: hsl(240, 9%, 17%);
  --primary: hsl(266, 92%, 58%);

  position: relative;

  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  width: 19rem;
  background-color: rgb(138, 138, 159);
  background-image: radial-gradient(
      at 88% 40%,
      rgba(202, 179, 214, 1) 65%,
      transparent 85%
    ),
    radial-gradient(at 49% 30%, rgb(170, 153, 181) 65%, transparent 85%),
    radial-gradient(at 14% 26%, rgb(157, 173, 183) 100%, transparent 85%),
    radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
    radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
    radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);

  border-radius: 1rem;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
}
.silver .card__border {
  overflow: hidden;
  pointer-events: none;

  position: absolute;
  z-index: -10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-image: linear-gradient(
    0deg,
    hsl(0, 0%, 100%) -50%,
    hsl(0, 0%, 40%) 100%
  );

  border-radius: 1rem;
}

.silver .card__border::before {
  content: "";
  pointer-events: none;

  position: fixed;
  z-index: 200;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%), rotate(0deg);
  transform-origin: left;

  width: 200%;
  height: 10rem;
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0) 0%,
    hsl(277, 95%, 60%) 40%,
    hsl(277, 95%, 60%) 60%,
    hsla(0, 0%, 40%, 0) 100%
  );

  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.silver .card_title__container .card_title {
  font-size: 1rem;
  color: var(--white);
}

.silver .card_title__container .card_paragraph {
  margin-top: 0.5rem;
  width: 100%;

  font-size: 0.7rem;
  color: var(--paragraph);
}

.silver .line {
  width: 100%;
  height: 0.1rem;
  background-color: var(--line);

  border: none;
}

.silver .card__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.silver .card__list .card__list_item {
  display: flex;
  align-items: start;
  gap: 0.5rem;
}

.silver .card__list .card__list_item .check {
  display: flex;
  justify-content: center;
  align-items: center;

  width: full;
  height: full;
  padding: 2px;
  background-color: var(--primary);

  border-radius: 50%;
}

.silver .card__list .card__list_item .check .check_svg {
  width: 0.8rem;
  height: 0.8rem;

  fill: var(--black);
}

.silver .card__list .card__list_item .list_text {
  font-size: 0.75rem;
  color: var(--white);
}

.silver .click-to-call {
  cursor: pointer;

  padding: 0.5rem;
  width: 100%;
  background-image: linear-gradient(
    0deg,
    rgba(94, 58, 238, 1) 0%,
    rgba(197, 107, 240, 1) 100%
  );

  font-size: 0.75rem;
  color: var(--white);

  border: 0;
  border-radius: 9999px;
  box-shadow: inset 0 -2px 25px -4px var(--white);
}
.bronze {
    direction: rtl;
  --white: hsl(0, 5%, 8%);
  --black: hsl(240, 15%, 9%);
  --paragraph: hsl(0, 5%, 27%);
  --line: hsl(240, 9%, 17%);
  --primary: hsl(266, 92%, 58%);

  position: relative;

  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  width: 19rem;
  background-color: rgb(138, 138, 159);
  background-image: radial-gradient(
      at 88% 40%,
      rgb(209, 154, 99) 65%,
      transparent 85%
    ),
    radial-gradient(at 49% 30%, rgb(213, 123, 34) 100%, transparent 85%),
    radial-gradient(at 14% 26%, rgba(148, 201, 233, 1) 100%, transparent 85%),
    radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
    radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
    radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);

  border-radius: 1rem;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
}
.bronze .card__border {
  overflow: hidden;
  pointer-events: none;

  position: absolute;
  z-index: -10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-image: linear-gradient(
    0deg,
    hsl(0, 0%, 100%) -50%,
    hsl(0, 0%, 40%) 100%
  );

  border-radius: 1rem;
}

.bronze .card__border::before {
  content: "";
  pointer-events: none;

  position: fixed;
  z-index: 200;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%), rotate(0deg);
  transform-origin: left;

  width: 200%;
  height: 10rem;
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0) 0%,
    hsl(277, 95%, 60%) 40%,
    hsl(277, 95%, 60%) 60%,
    hsla(0, 0%, 40%, 0) 100%
  );

  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.bronze .card_title__container .card_title {
  font-size: 1rem;
  color: var(--white);
}

.bronze .card_title__container .card_paragraph {
  margin-top: 0.5rem;
  width: 100%;

  font-size: 0.7rem;
  color: var(--paragraph);
}

.bronze .line {
  width: 100%;
  height: 0.1rem;
  background-color: var(--line);

  border: none;
}

.bronze .card__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bronze .card__list .card__list_item {
  display: flex;
  align-items: start;
  gap: 0.5rem;
}

.bronze .card__list .card__list_item .check {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.1rem;
  height: 1.1rem;
  background-color: var(--primary);

  border-radius: 50%;
}

.bronze .card__list .card__list_item .check .check_svg {
  width: 1rem;
  height: 0.8rem;

  fill: var(--black);
}

.bronze .card__list .card__list_item .list_text {
  font-size: 0.8rem;
  color: var(--white);
}

.bronze .click-to-call {
  cursor: pointer;

  padding: 0.5rem;
  width: 100%;
  background-image: linear-gradient(
    0deg,
    rgba(94, 58, 238, 1) 0%,
    rgba(197, 107, 240, 1) 100%
  );

  font-size: 0.75rem;
  color: var(--white);

  border: 0;
  border-radius: 9999px;
  box-shadow: inset 0 -2px 25px -4px var(--white);
}
.golden {
    direction: rtl;
  --white: hsl(0, 5%, 8%);
  --black: hsl(240, 15%, 9%);
  --paragraph: hsl(0, 5%, 27%);
  --line: hsl(240, 9%, 17%);
  --primary: hsl(266, 92%, 58%);

  position: relative;

  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  width: 19rem;
  background-color: rgb(138, 138, 159);
  background-image: radial-gradient(
      at 88% 40%,
      rgb(233, 198, 81) 65%,
      transparent 85%
    ),
    radial-gradient(at 49% 30%, rgb(192, 178, 59) 65%, transparent 85%),
    radial-gradient(at 14% 26%, rgb(190, 175, 18) 65%, transparent 85%),
    radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
    radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
    radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);

  border-radius: 1rem;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
}

.golden .card__border {
  overflow: hidden;
  pointer-events: none;

  position: absolute;
  z-index: -10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-image: linear-gradient(
    0deg,
    hsl(0, 0%, 100%) -50%,
    hsl(0, 0%, 40%) 100%
  );

  border-radius: 1rem;
}

.golden .card__border::before {
  content: "";
  pointer-events: none;

  position: fixed;
  z-index: 200;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%), rotate(0deg);
  transform-origin: left;

  width: 200%;
  height: 10rem;
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0) 0%,
    hsl(277, 95%, 60%) 40%,
    hsl(277, 95%, 60%) 60%,
    hsla(0, 0%, 40%, 0) 100%
  );

  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.golden .card_title__container .card_title {
  font-size: 1rem;
  color: var(--white);
}

.golden .card_title__container .card_paragraph {
    margin-top: 0.5rem;
    width: 100%;

  font-size: 0.7rem;
  color: var(--paragraph);
}

.golden .line {
  width: 100%;
  height: 0.1rem;
  background-color: var(--line);

  border: none;
}

.golden .card__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.golden .card__list .card__list_item {
  display: flex;
  align-items: start;
  gap: 0.5rem;
}

.golden .card__list .card__list_item .check {
  display: flex;
  justify-content: center;
  align-items: center;

  width: full;
  height: full;
  padding: 2px;
  background-color: var(--primary);

  border-radius: 50%;
}

.golden .card__list .card__list_item .check .check_svg {
  width: 0.8rem;
  height: 0.8rem;

  fill: var(--black);
}

.golden .card__list .card__list_item .list_text {
  font-size: 0.75rem;
  color: var(--white);
}

.golden .click-to-call {
  cursor: pointer;

  padding: 0.5rem;
  width: 100%;
  background-image: linear-gradient(
    0deg,
    rgba(94, 58, 238, 1) 0%,
    rgba(197, 107, 240, 1) 100%
  );

  font-size: 0.75rem;
  color: var(--white);

  border: 0;
  border-radius: 9999px;
  box-shadow: inset 0 -2px 25px -4px var(--white);
}

</style>
