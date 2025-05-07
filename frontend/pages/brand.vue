<template>
  <div class="brand-page">
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <img src="/assets/photos/logo-avarancloud.png" alt="لوگوی ابرآوران" class="mx-auto h-32 mb-4" />
        <h1 class="text-4xl font-bold mb-2">ابرآوران | Avaran Cloud</h1>
        <h2 class="text-xl text-gray-600">طراحی سایت و فروشگاه اینترنتی حرفه‌ای</h2>
      </div>
      
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-10">
        <h2 class="text-2xl font-bold mb-4 text-center">درباره نام برند ما</h2>
        <p class="text-lg mb-6">
          <span class="font-bold text-xl inline-block ml-2">ابرآوران</span> 
          یک برند ایرانی در زمینه طراحی سایت و فروشگاه اینترنتی است. نام صحیح برند ما 
          <span class="font-bold text-xl text-primary-600 inline-block mx-1">ابرآوران</span> 
          (Abarāvarān) است که از ترکیب کلمات "ابر" (Cloud) و "آوران" (Bringers) تشکیل شده است.
        </p>
        
        <div class="bg-blue-50 p-4 rounded-lg mb-6 text-center">
          <p class="font-bold text-lg">تلفظ صحیح: اَبر + آوَران</p>
          <p class="mt-2">ابرآوران (Abarāvarān) - آورندگان ابر و خدمات ابری</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold mb-2 text-green-600">✓</div>
            <p class="font-bold text-2xl">ابرآوران</p>
            <p class="text-sm text-gray-600">تلفظ صحیح</p>
          </div>
          
          <div class="bg-red-50 p-4 rounded-lg text-center">
            <div class="text-3xl font-bold mb-2 text-red-600">✗</div>
            <p class="font-bold text-2xl">ابرآروان</p>
            <p class="text-sm text-gray-600">تلفظ نادرست</p>
          </div>
        </div>
        
        <p class="text-lg">
          ما به عنوان یک شرکت متخصص در زمینه طراحی سایت و فروشگاه اینترنتی با نام <span class="font-bold">ابرآوران</span> فعالیت می‌کنیم و تمرکز اصلی ما ارائه خدمات حرفه‌ای و باکیفیت به مشتریان عزیز است. نام برند ما دارای معنای خاصی است که مرتبط با آوردن و ارائه خدمات پیشرفته و مدرن در بستر وب و ابر می‌باشد.
        </p>
      </div>
      
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-10">
        <h2 class="text-2xl font-bold mb-4 text-center">خدمات ابرآوران</h2>
        <ul class="space-y-3">
          <li class="flex items-center">
            <span class="text-green-500 ml-2">✓</span>
            <span>طراحی سایت شخصی و شرکتی</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500 ml-2">✓</span>
            <span>طراحی فروشگاه اینترنتی</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500 ml-2">✓</span>
            <span>بهینه‌سازی سایت برای موتورهای جستجو (سئو)</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500 ml-2">✓</span>
            <span>پشتیبانی و نگهداری وب‌سایت</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500 ml-2">✓</span>
            <span>طراحی رابط کاربری و تجربه کاربری</span>
          </li>
        </ul>
      </div>
      
      <div class="text-center">
        <NuxtLink to="/about-us" class="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-primary-700 transition">
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
  background-color: #f5f7fa;
  min-height: 100vh;
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
</style> 