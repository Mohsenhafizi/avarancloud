<template>
  <div class="bg-white shadow-lg rounded-lg p-6 md:p-8 mb-8" itemscope itemtype="https://schema.org/Organization">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
      <svg class="w-6 h-6 text-emerald-600 mr-2" viewBox="0 0 24 24" fill="none">
        <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      اطلاعات تماس
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- تلفن تماس -->
      <div class="flex items-start">
        <div class="bg-emerald-100 rounded-full p-3 mr-4">
          <svg class="w-6 h-6 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-1">تلفن تماس</h3>
          <p class="text-gray-600" itemprop="telephone">
            <a href="tel:+982166479540" class="hover:text-emerald-600 transition-colors">021-66479540</a>
          </p>
          <p class="text-gray-600" itemprop="telephone">
            <a href="tel:+989121234567" class="hover:text-emerald-600 transition-colors">0912-123-4567</a>
          </p>
        </div>
      </div>
      
      <!-- ایمیل -->
      <div class="flex items-start">
        <div class="bg-emerald-100 rounded-full p-3 mr-4">
          <svg class="w-6 h-6 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-1">ایمیل</h3>
          <p class="text-gray-600" itemprop="email">
            <a href="mailto:info@avarancloud.ir" class="hover:text-emerald-600 transition-colors">info@avarancloud.ir</a>
          </p>
          <p class="text-gray-600" itemprop="email">
            <a href="mailto:support@avarancloud.ir" class="hover:text-emerald-600 transition-colors">support@avarancloud.ir</a>
          </p>
        </div>
      </div>
    </div>
    
    <!-- آدرس -->
    <div class="flex items-start mb-8">
      <div class="bg-emerald-100 rounded-full p-3 mr-4">
        <svg class="w-6 h-6 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </div>
      <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
        <h3 class="text-lg font-semibold text-gray-800 mb-1">آدرس</h3>
        <p class="text-gray-600">
          <span itemprop="addressRegion">تهران</span>، 
          <span itemprop="addressLocality">میدان ونک</span>، 
          <span itemprop="streetAddress">خیابان ملاصدرا، برج آسمان، طبقه ۵، واحد ۵۰۲</span>
        </p>
        <p class="text-gray-600 mt-1">
          <span itemprop="postalCode">کد پستی: ۱۹۹۱۶۵۴۳۲۱</span>
        </p>
      </div>
    </div>
    
    <!-- ساعات کاری -->
    <div class="flex items-start mb-8">
      <div class="bg-emerald-100 rounded-full p-3 mr-4">
        <svg class="w-6 h-6 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-1">ساعات کاری</h3>
        <div class="text-gray-600">
          <div itemprop="openingHoursSpecification" itemscope itemtype="https://schema.org/OpeningHoursSpecification">
            <meta itemprop="dayOfWeek" content="Saturday Sunday Monday Tuesday Wednesday Thursday" />
            <meta itemprop="opens" content="09:00" />
            <meta itemprop="closes" content="17:00" />
            <p>شنبه تا پنج‌شنبه: ۹:۰۰ صبح تا ۵:۰۰ عصر</p>
          </div>
          <div itemprop="openingHoursSpecification" itemscope itemtype="https://schema.org/OpeningHoursSpecification">
            <meta itemprop="dayOfWeek" content="Friday" />
            <meta itemprop="opens" content="00:00" />
            <meta itemprop="closes" content="00:00" />
            <p>جمعه: تعطیل</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- شبکه‌های اجتماعی -->
    <div class="flex items-start">
      <div class="bg-emerald-100 rounded-full p-3 mr-4">
        <svg class="w-6 h-6 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">ما را در شبکه‌های اجتماعی دنبال کنید</h3>
        <div class="flex gap-4">
          <a href="https://www.instagram.com/avarancloud" target="_blank" rel="noopener" class="bg-gray-100 hover:bg-emerald-100 p-2 rounded-full transition-colors" itemprop="sameAs">
            <svg class="w-6 h-6 text-emerald-600" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7405 5.9375C9.52393 5.9375 6.05884 9.39795 6.05884 13.6191V24.3809C6.05884 28.5974 9.51929 32.0625 13.7405 32.0625H24.5022C28.7188 32.0625 32.1838 28.6021 32.1838 24.3809V13.6191C32.1838 9.40259 28.7234 5.9375 24.5022 5.9375H13.7405ZM13.7405 8.3125H24.5022C27.4385 8.3125 29.8088 10.6829 29.8088 13.6191V24.3809C29.8088 27.3171 27.4385 29.6875 24.5022 29.6875H13.7405C10.8042 29.6875 8.43384 27.3171 8.43384 24.3809V13.6191C8.43384 10.6829 10.8042 8.3125 13.7405 8.3125ZM26.135 10.9102C25.5366 10.9102 25.0588 11.3879 25.0588 11.9863C25.0588 12.5847 25.5366 13.0625 26.135 13.0625C26.7334 13.0625 27.2112 12.5847 27.2112 11.9863C27.2112 11.3879 26.7334 10.9102 26.135 10.9102ZM19.1213 11.875C15.2017 11.875 11.9963 15.0803 11.9963 19C11.9963 22.9197 15.2017 26.125 19.1213 26.125C23.041 26.125 26.2463 22.9197 26.2463 19C26.2463 15.0803 23.041 11.875 19.1213 11.875ZM19.1213 14.25C21.7607 14.25 23.8713 16.3606 23.8713 19C23.8713 21.6394 21.7607 23.75 19.1213 23.75C16.4819 23.75 14.3713 21.6394 14.3713 19C14.3713 16.3606 16.4819 14.25 19.1213 14.25Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://t.me/avarancloud" target="_blank" rel="noopener" class="bg-gray-100 hover:bg-emerald-100 p-2 rounded-full transition-colors" itemprop="sameAs">
            <svg class="w-6 h-6 text-emerald-600" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.0136 7.9292C32.3492 7.9292 32.7007 8.93937 32.3056 11.3112C31.8536 14.0234 30.5513 23.0033 29.5126 28.5933C29.1152 30.7324 28.3988 31.6547 27.3561 31.6547C26.783 31.6547 26.1116 31.376 25.3405 30.867C24.2955 30.1766 19.0199 26.6877 17.8743 25.8684C16.8293 25.1218 15.3877 24.2233 17.1959 22.4547C17.8395 21.8245 22.0567 17.7973 25.3421 14.6631C25.6928 14.3282 25.3991 13.8176 25.0096 13.8176C24.921 13.8176 24.8268 13.8445 24.7349 13.9055C20.3063 16.8426 14.1654 20.9189 13.384 21.4501C12.6026 21.9805 11.841 22.3209 10.8261 22.3209C10.3076 22.3209 9.72255 22.2322 9.03459 22.0343C7.49638 21.5926 5.99459 21.0661 5.40955 20.865C3.15726 20.0924 3.69163 19.0909 5.87901 18.1282C14.6491 14.2704 25.9976 9.56637 27.5643 8.91562C29.0907 8.28149 30.2243 7.9292 31.0136 7.9292ZM31.0136 5.5542C29.9306 5.5542 28.6268 5.90332 26.6547 6.72112L26.418 6.81928C17.9986 10.3153 10.3646 13.5595 4.92267 15.9535C4.07242 16.328 1.48605 17.4656 1.58659 19.8454C1.62934 20.8722 2.19459 22.2718 4.63926 23.1102L4.81976 23.172C5.50217 23.4071 6.92322 23.8971 8.37988 24.3159C9.26655 24.5708 10.0677 24.6943 10.8269 24.6943C12.1443 24.6943 13.1647 24.3183 13.9627 23.8805C13.9588 24.0135 13.9619 24.1473 13.9722 24.2819C14.1163 26.1122 15.5318 27.116 16.3773 27.7161L16.4953 27.8C17.7437 28.693 23.3938 32.4257 24.0335 32.8477C25.2376 33.6425 26.3246 34.0281 27.3577 34.0281C28.9822 34.0281 31.0809 33.1604 31.8488 29.0263C32.578 25.1052 33.4203 19.6277 34.0354 15.6282C34.2975 13.9213 34.5128 12.5217 34.6498 11.7007C34.9261 10.0429 35.0527 8.16512 33.8993 6.80424C33.4148 6.23424 32.5218 5.5542 31.0136 5.5542Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/avarancloud" target="_blank" rel="noopener" class="bg-gray-100 hover:bg-emerald-100 p-2 rounded-full transition-colors" itemprop="sameAs">
            <svg class="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo'
}
</script> 