<template>



<header class="rtl fixed top-0 right-0 left-0 z-20 hidden md:flex justify-between items-center px-5 lg:px-10 
               py-5 h-24 w-[98%] lg:w-[90%] mx-auto bg-white shadow-2xl rounded-b-3xl">
    <div class="flex items-center w-full justify-between">
    <nav class="flex items-center gap-x-6 lg:gap-x-9 h-14">
        <ul class="flex gap-x-3 items-center lg:gap-x-9 h-full text-lg text-gray-800 tracking-tightest child:leading-[56px]">
            <li class="hover:bg-emerald-300 rounded-2xl p-3">
                <NuxtLink to="/">صفحه اصلی</NuxtLink>
            </li>
            <li class="hover:bg-emerald-300 rounded-2xl p-3">
                <Nuxtlink to="/">دیکشنری</Nuxtlink>
            </li>
            <li class="hover:bg-emerald-300 rounded-2xl p-3">
                <Nuxtlink to="/">بلاگ</Nuxtlink>
            </li>
            <li class="hover:bg-emerald-300 rounded-2xl p-3">
                <Nuxtlink to="/">درباره ما</Nuxtlink>
            </li>
            <li class="hover:bg-emerald-300 rounded-2xl p-3">
                <Nuxtlink to="/">تماس با ما</Nuxtlink>
            </li>
        </ul>
    </nav>
    <div class="flex gap-x-4 lg:gap-x-10 xs:gap-x-10 text-xl font-bold">
        <div class="flex items-center gap-x-2.5">
            avarancloud
        </div>
    </div>
    </div>
</header>
</template>

<script lang="ts">

</script>

<style>
.rtl{
    direction: rtl;
}

.fade-in{
    opacity: 0;
    translate: 0 70px;
    transition: 0 0;
}
.visible {
    opacity: 1;
    translate: 0 0;
}
</style>