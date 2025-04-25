<template>
  <div class="flex justify-center border-gray-500 border-b py-10">
    <div class="container">
      <!-- تغییر متن heading بر اساس query parameter -->
      <div class="heading">{{ headingText }}</div>
      <form action="" class="form">
        <input required class="input" name="fullname" id="fullname" placeholder="نام و نام خانوادگی خود را وارد کنید" />
        <input required class="input" name="phone" id="phone" placeholder="شماره خود را وارد کنید" />
        <div class="form-group pt-4">
          <textarea class="textarea" required id="textarea" name="textarea" placeholder="متن و توضیحات خود را بنویسید"></textarea>
        </div>
        <input class="login-button" type="submit" value="ثبت" />
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useState } from "#app";
import { computed } from "vue"; // وارد کردن computed از vue

// تعریف وضعیت
const source = useState("source", () => "");

// نگاشت منابع به عناوین
const headingMap: Record<string, string> = {
  bronz: "بسته برنزی",
  sefareshi: "بسته سفارشی",
  nogrei: "بسته نقره ای",
  talai: "بسته طلایی",
  abrkochaak: "بسته ابر کوچک",
  abrafzar: "بسته نرم افزار ابری",
  hoshabr: "بسته ابر هوش",
  revan: "بسته ابر روان",
  barvar: "بسته ابر بارور",
  tekeabr: "بسته تکه ابر",
  abrsefareshi: "بسته ابر سفارشی",
};

// متن پیش‌فرض
const defaultHeading = "ارتباط ما";

// محاسبه متن heading بر اساس وضعیت
const headingText = computed(() => {
  return headingMap[source.value] || defaultHeading;
});
</script>

<style>
.form-container {
  width: 400px;
  background: linear-gradient(#bdd9ea, #bdd9ea) padding-box,
              linear-gradient(145deg, transparent 35%,#1cff4d, #40c9ff) border-box;
  border: 2px solid transparent;
  padding: 10px;
  font-size: 14px;
  font-family: inherit;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 16px;
  background-size: 200% 100%;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.form-container button:active {
  scale: 0.95;
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-container .form-group {
  display: flex;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 20px;
  color: #717171;
  font-weight: 600;
  font-size: 20px;
}

.form-container .form-group input {
  width: 100%;
  border-radius: 8px;
  color: #100f0f;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #414141;
}

textarea {
  padding: 4px;
  margin-top: 10px;
  width: 100%;
  border-radius: 8px;
  resize: none;
  color: #0a0909;
  height: 96px;
  border: 1px solid #353333;
  background-color: transparent;
  font-family: inherit;
}

.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group input:focus {
  outline: none;
  border-color: #e81cff;
}

.form-container .form-group textarea:focus {
  outline: none;
  border-color: #e81cff;
}

.form-container .form-submit-btn {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: #717171;
  font-weight: 600;
  width: 40%;
  background: #313131;
  border: 1px solid #414141;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 6px;
}

.form-container .form-submit-btn:hover {
  background-color: #fff;
  border-color: #fff;
}




.container {
  max-width: 350px;
  background: #F8F9FD;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
  border-radius: 40px;
  padding: 25px 35px;
  border: 5px solid rgb(255, 255, 255);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
  margin: 20px;
}

.matn{
  color: rgb(16, 137, 211);
}

.heading {
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  color: rgb(16, 137, 211);
}

.form {
  margin-top: 20px;
}
.form .textarea {
  width: 100%;
  height: 170px;
  background: white;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  margin-top: 15px;
  box-shadow: #cff0ff 0px 10px 10px -5px;
  border-inline: 2px solid transparent;
}

.form .textarea::-moz-placeholder {
  color: rgb(170, 170, 170);
}

.form .textarea::placeholder {
  color: rgb(170, 170, 170);
}
.form .textarea:focus {
  outline: none;
  border-inline: 2px solid #12B1D1;
}

.form .input {
  width: 100%;
  background: white;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  margin-top: 15px;
  box-shadow: #cff0ff 0px 10px 10px -5px;
  border-inline: 2px solid transparent;
}

.form .input::-moz-placeholder {
  color: rgb(170, 170, 170);
}

.form .input::placeholder {
  color: rgb(170, 170, 170);
}

.form .input:focus {
  outline: none;
  border-inline: 2px solid #12B1D1;
}

.form .forgot-password {
  display: block;
  margin-top: 10px;
  margin-left: 10px;
}

.form .forgot-password a {
  font-size: 11px;
  color: #0099ff;
  text-decoration: none;
}

.form .login-button {
  display: block;
  width: 100%;
  font-weight: bold;
  background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
  color: white;
  padding-block: 15px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
  border: none;
  transition: all 0.2s ease-in-out;
}

.form .login-button:hover {
  transform: scale(1.03);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
}

.form .login-button:active {
  transform: scale(0.95);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
}

.social-account-container {
  margin-top: 25px;
}

.social-account-container .title {
  display: block;
  text-align: center;
  font-size: 10px;
  color: rgb(170, 170, 170);
}

.social-account-container .social-accounts {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 5px;
}

.social-account-container .social-accounts .social-button {
  background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
  border: 5px solid white;
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
  transition: all 0.2s ease-in-out;
}

.social-account-container .social-accounts .social-button .svg {
  fill: white;
  margin: auto;
}

.social-account-container .social-accounts .social-button:hover {
  transform: scale(1.2);
}

.social-account-container .social-accounts .social-button:active {
  transform: scale(0.9);
}

.agreement {
  display: block;
  text-align: center;
  margin-top: 15px;
}

.agreement a {
  text-decoration: none;
  color: #0099ff;
  font-size: 9px;
}
</style>