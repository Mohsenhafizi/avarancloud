<template>
<header class="rtl fixed top-0 right-0 left-0 z-20 hidden md:flex justify-between items-center px-5 lg:px-10 
               py-5 h-24 w-[98%] lg:w-[90%] 2xl:w-[80%] mx-auto bg-white shadow-2xl rounded-b-3xl">
    <div class="flex items-center w-full justify-between">
    <nav class="flex items-center gap-x-6 lg:gap-x-9 h-14">
        <ul class="flex gap-x-3 items-center lg:gap-x-9 h-full text-lg 2xl:text-xl text-gray-800 tracking-tightest child:leading-[56px]">
            <NuxtLink to="/" class="hover:bg-emerald-300 rounded-2xl p-3 transition-all flex items-center" active-class="active-link">
                <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
                <li>
                    صفحه اصلی
                </li>
            </NuxtLink>
            <NuxtLink to="/site-builder" class="hover:bg-emerald-300 cursor-pointer rounded-2xl p-3 transition-all flex items-center" active-class="active-link">
                <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
                <li>
                    سایت ساز
                </li>
            </NuxtLink>
            <NuxtLink to="/blog" class="hover:bg-emerald-300 rounded-2xl p-3 transition-all flex items-center" active-class="active-link">
                <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
                <li>
                    بلاگ
                </li>
            </NuxtLink>
            <NuxtLink to="/about" class="hover:bg-emerald-300 rounded-2xl p-3 transition-all flex items-center" active-class="active-link">
                <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
                <li>
                    درباره ما
                </li>
            </NuxtLink>
            <NuxtLink to="/contact" class="hover:bg-emerald-300 rounded-2xl p-3 transition-all flex items-center" active-class="active-link">
                <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
                <li>
                    تماس با ما
                </li>
            </NuxtLink>
        </ul>
    </nav>
    <div class="flex gap-x-4 lg:gap-x-10 xs:gap-x-10 font-bold">
        <div class="flex text-xl items-center gap-x-2.5 text-sky-600">
            avarancloud
            <img class="w-14 h-16" src="../../assets/svg/cloud2.svg" alt="">

        </div>
    </div>
    </div>
</header>
</template>

<script lang="ts">
export default {
  name: 'NavDesktop'
}
</script>

<style>
/* نمایش دایره برای لینک فعال */
.active-link .circle {
    background-color: #34d399; /* رنگ سبز */
    border-color: #34d399;
}

/* افکت هاور برای نمایش دایره هنگام هاور */
.hover\:bg-emerald-300:hover .circle {
    background-color: rgba(52, 211, 153, 0.3); /* رنگ سبز با شفافیت کم */
    opacity: 1;
}

/* استایل پایه برای دایره‌ها */
.circle {
    background-color: transparent;
    border-width: 1.5px;
}
</style>