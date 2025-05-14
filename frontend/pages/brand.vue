<template>
  <NavBarNavDesktop />
  <NavBarNavMobile />
  <div class="w-full min-h-screen overflow-hidden brand-page">
    <!-- پس‌زمینه متحرک -->
    <div class="absolute inset-0 bg-animation"></div>
    
    <div class="w-full px-4 py-8 md:py-16 rtl relative z-10">
      <div class="w-full max-w-6xl mx-auto text-center mb-12 p-6 backdrop-blur-sm rounded-xl shadow-lg animate-fade-in mt-10">
        <img src="/assets/photos/logo-avarancloud.png" alt="لوگوی ابرآوران" class="mx-auto h-24 md:h-32 mb-4 animate-float" />
        <h1 class="text-3xl md:text-4xl font-bold mb-2 text-gradient">ابرآوران | Avaran Cloud</h1>
        <h2 class="text-xl text-gray-600 animate-fade-in-delay">طراحی سایت و فروشگاه اینترنتی حرفه‌ای</h2>
      </div>
      
      <div class="w-full max-w-6xl mx-auto backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 mb-8 md:mb-10 animate-slide-up">
        <h2 class="text-2xl font-bold mb-4 text-center text-gray-800 text-gradient">درباره نام برند ما</h2>
        <p class="text-lg mb-6 text-gray-700 text-right">
          <span class="font-bold text-xl inline-block ml-2 highlight">ابرآوران</span> 
          یک برند ایرانی در زمینه طراحی سایت و فروشگاه اینترنتی است. نام صحیح برند ما 
          <span class="font-bold text-xl text-primary-600 inline-block mx-1 highlight">ابرآوران</span> 
          (Abarāvarān) است که از ترکیب کلمات "ابر" (Cloud) و "آوران" (Bringers) تشکیل شده است.
        </p>
        
        <div class="bg-blue-200 p-4 rounded-lg mb-6 text-center shadow-sm hover-card">
          <p class="font-bold text-lg">تلفظ صحیح: اَبر + آوَران</p>
          <p class="mt-2">ابرآوران (Abarāvarān) - آورندگان ابر و خدمات ابری</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-green-200 p-4 rounded-lg text-center shadow-sm hover-card animate-slide-right">
            <div class="text-3xl font-bold mb-2 text-green-600">✓</div>
            <p class="font-bold text-2xl">ابرآوران</p>
            <p class="text-sm text-gray-600">تلفظ صحیح</p>
          </div>
          
          <div class="bg-red-200 p-4 rounded-lg text-center shadow-sm hover-card animate-slide-left">
            <div class="text-3xl font-bold mb-2 text-red-600">✗</div>
            <p class="font-bold text-2xl">ابرآروان</p>
            <p class="text-sm text-gray-600">تلفظ نادرست</p>
          </div>
        </div>
        
        <p class="text-lg text-gray-700 text-right">
          ما به عنوان یک شرکت متخصص در زمینه طراحی سایت و فروشگاه اینترنتی با نام <span class="font-bold highlight">ابرآوران</span> فعالیت می‌کنیم و تمرکز اصلی ما ارائه خدمات حرفه‌ای و باکیفیت به مشتریان عزیز است. نام برند ما دارای معنای خاصی است که مرتبط با آوردن و ارائه خدمات پیشرفته و مدرن در بستر وب و ابر می‌باشد.
        </p>
      </div>
      
      <div class="bg-blue-100 w-full max-w-6xl mx-auto backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 mb-8 md:mb-10 animate-slide-up-delay">
        <h2 class="text-2xl font-bold mb-4 text-center text-gray-800 text-gradient">خدمات ابرآوران</h2>
        <ul class="space-y-3">
          <li class="flex items-center p-3 rounded-lg shadow-sm hover-list-item">
            <span class="text-green-500 ml-2 text-xl animate-pulse-slow">✓</span>
            <span>طراحی سایت شخصی و شرکتی</span>
          </li>
          <li class="flex items-center p-3 rounded-lg shadow-sm hover-list-item">
            <span class="text-green-500 ml-2 text-xl animate-pulse-slow">✓</span>
            <span>طراحی فروشگاه اینترنتی</span>
          </li>
          <li class="flex items-center p-3 rounded-lg shadow-sm hover-list-item">
            <span class="text-green-500 ml-2 text-xl animate-pulse-slow">✓</span>
            <span>بهینه‌سازی سایت برای موتورهای جستجو (سئو)</span>
          </li>
          <li class="flex items-center p-3 rounded-lg shadow-sm hover-list-item">
            <span class="text-green-500 ml-2 text-xl animate-pulse-slow">✓</span>
            <span>پشتیبانی و نگهداری وب‌سایت</span>
          </li>
          <li class="flex items-center p-3 rounded-lg shadow-sm hover-list-item">
            <span class="text-green-500 ml-2 text-xl animate-pulse-slow">✓</span>
            <span>طراحی رابط کاربری و تجربه کاربری</span>
          </li>
        </ul>
      </div>
      
      <div class="w-full max-w-6xl mx-auto text-center mb-12 animate-bounce-slow">
        <NuxtLink to="/about-us" class="inline-block glow-button bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-all transform hover:-translate-y-1">
          بیشتر درباره ابرآوران
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'ابرآوران | Avaran Cloud - معرفی برند',
  meta: [
    { name: 'description', content: 'ابرآوران (Abarāvarān) ارائه دهنده خدمات طراحی سایت و فروشگاه اینترنتی حرفه‌ای - معرفی نام و برند ابرآوران' },
    { name: 'keywords', content: 'ابرآوران, ابر آوران, آبارآوران, Avaran Cloud, AvaranCloud, ابرآوران نه ابرآروان, طراحی سایت, فروشگاه اینترنتی' },
    { property: 'og:title', content: 'ابرآوران | معرفی برند' },
    { property: 'og:description', content: 'ابرآوران، ارائه دهنده خدمات طراحی سایت و فروشگاه اینترنتی، نام صحیح: ابرآوران' },
    { property: 'og:url', content: 'https://avarancloud.ir/brand' }
  ]
})
</script>

<style scoped>
.brand-page {
  width: 100%;
  position: relative;
  background: radial-gradient(
    125% 125% at -2% 101%,
    rgba(245, 87, 2, 1) 10.5%,
    rgba(245, 120, 2, 1) 16%,
    rgba(245, 140, 2, 1) 17.5%,
    rgba(245, 170, 100, 1) 25%,
    rgba(238, 174, 202, 1) 40%,
    rgba(202, 179, 214, 1) 65%,
    rgba(148, 201, 233, 1) 100%
  );
}

.rtl {
  direction: rtl;
  text-align: right;
}

.text-primary-600 {
  color: #3b82f6;
}

.bg-primary-600 {
  background-color: #3b82f6;
}

.hover\:bg-primary-700:hover {
  background-color: #2563eb;
}

/* انیمیشن‌های ورود */
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1.5s ease-in-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-slide-up-delay {
  animation: slideUp 0.8s ease-out 0.3s backwards;
}

.animate-slide-right {
  animation: slideRight 0.8s ease-out;
}

.animate-slide-left {
  animation: slideLeft 0.8s ease-out;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 2s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce 3s ease-in-out infinite;
}

/* کارت‌های متحرک */
.hover-card {
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: rgba(59, 130, 246, 0.5);
}

/* آیتم‌های لیست متحرک */
.hover-list-item {
  transition: all 0.3s ease;
}

.hover-list-item:hover {
  transform: translateX(-5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* دکمه درخشان */
.glow-button {
  position: relative;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  overflow: hidden;
}

.glow-button:hover {
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.8);
}

.glow-button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(30deg);
  transition: all 0.5s;
  opacity: 0;
}

.glow-button:hover::after {
  animation: shineEffect 1.5s ease-in-out;
}

/* پس‌زمینه متحرک */
.bg-animation {
  background: linear-gradient(-45deg, rgba(245, 87, 2, 0.3), rgba(238, 174, 202, 0.3), rgba(148, 201, 233, 0.3));
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

/* هایلایت متن */
.highlight {
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #3b82f6, #93c5fd);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.highlight:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* گرادیان متن */
.text-gradient {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* تعریف فریم‌های کلیدی */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slideRight {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideLeft {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes shineEffect {
  0% { opacity: 0; transform: translateX(-100%) rotate(30deg); }
  20% { opacity: 1; }
  100% { opacity: 0; transform: translateX(100%) rotate(30deg); }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style> 