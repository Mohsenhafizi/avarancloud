<template>
<div class="bg-white rtl fixed w-full z-20 md:hidden p-2">  
<!-- Overlay -->
<div class="overlay fixed inset-0 bg-black/60 bg-opacity-75 z-10 transition-opacity duration-500 ease-in-out"
     :class="overlayVisible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'"
     @click="closeOverlay">
</div>
<!-- nav Icon -->
<div class="flex justify-between m-2">
<div class="nav-icon inline-block p-2" @click="openNav">
    <svg class="w-6 h-6 text-zinc-700">
        <use href="#bars-3"></use>
    </svg>
</div>
<div class="font-bold">
    avarancloud
    <img class="inline-block w-12 h-12" src="../../assets/svg/cloud2.svg" alt="">
</div>
</div>

<!-- nav -->
<div class="nav fixed top-0 bottom-0 right-0 w-64 pt-3 px-4 bg-white z-20 overflow-y-auto transform transition-transform duration-500 ease-in-out" :class="{ 'translate-x-full': !navOpen, 'translate-x-0': navOpen }">
    <div class="flex items-center justify-between pb-5 mb-4 border-b border-b-gray-100">
        <div class="flex pt-1 font-bold">
            <img class="inline-block w-12 h-12" src="../../assets/svg/cloud2.svg" alt="">
            <span class="pt-3 pr-1">
            avarancloud
            </span>
        </div>
        <div class="nav-Close-Btn" @click="closeNav">
            <svg class="w-5 h-5 text-zinc-600">
                <use href="#x-mark-mini"></use>
        </svg>
        </div>
    </div>


    <div class="flex items-center mb-3 pr-2.5 h-10 rounded-md">
        <NuxtLink to="/" class="flex items-center gap-x-2" active-class="active-link">
            <div class="w-3 h-3 rounded-full border-2 border-green-500 bg-white"></div>
            <span class="pt-1">صفحه اصلی</span>
        </NuxtLink>
    </div>


    <ul class="text-zinc-600">

        <li class="mb-1">
            <div class="flex items-center justify-between submenu-open-btn" @click="toggleSubmenu">
                <NuxtLink to="/site-builder" class="flex items-center gap-x-2 pr-2.5" active-class="active-link">
                    <div class="w-3 h-3 rounded-full border-2 border-green-500 bg-white"></div>
                      سایت ساز  
                </NuxtLink>
                <span class="">
                    <svg class="w-4 h-4">
                        <use xlink:href="#chevron-down-mini"></use>
                    </svg>
                </span>
            </div>
            <div class="submenu" :class="{ 'submenu--open': submenuOpen }">
                <NuxtLink to="/site-builder#features" class="submenu__item--active my-1" @click="closeNav">ویژگی ها</NuxtLink>
                <NuxtLink to="/site-builder#tozihat" class="submenu__item--active my-1" @click="closeNav">توضیحات</NuxtLink>
                <NuxtLink to="/site-builder#packages" class="submenu__item--active" @click="closeNav">بسته ها</NuxtLink>
                <NuxtLink to="/site-builder#submenu" class="submenu__item--active my-2" @click="closeNav">سوالات متداول</NuxtLink>
            </div>
        </li>


        <li class="mb-1">
            <div class="flex items-center justify-between submenu-open-btn" @click="toggleSub">
                <NuxtLink to="/cloud-builder" class="flex items-center gap-x-2 pr-2.5" active-class="active-link">
                    <div class="w-3 h-3 rounded-full border-2 border-green-500 bg-white"></div>
                      ابر ساز  
                </NuxtLink>
                <span class="">
                    <svg class="w-4 h-4">
                        <use xlink:href="#chevron-down-mini"></use>
                    </svg>
                </span>
            </div>
            <div class="submenu" :class="{ 'submenu--open': submenuOpens }">
                <NuxtLink to="/cloud-builder#features" class="submenu__item--active my-1" @click="closeNav">ویژگی ها</NuxtLink>
                <NuxtLink to="/cloud-builder#tozihat" class="submenu__item--active my-1" @click="closeNav">توضیحات</NuxtLink>
                <NuxtLink to="/cloud-builder#packages" class="submenu__item--active" @click="closeNav">بسته ها</NuxtLink>
                <NuxtLink to="/cloud-builder#submenu" class="submenu__item--active my-2" @click="closeNav">سوالات متداول</NuxtLink>
            </div>
        </li>
        <li class="mb-4">
            <NuxtLink to="/about" class="flex items-center gap-x-2 pr-2.5" active-class="active-link">
                <div class="w-3 h-3 rounded-full border-2 border-green-500 bg-white"></div>
                 درباره ما
            </NuxtLink>
        </li>
        <li class="mb-4">
            <NuxtLink to="/blog" class="flex items-center gap-x-2 pr-2.5" active-class="active-link">
                <div class="w-3 h-3 rounded-full border-2 border-green-500 bg-white"></div>
                بلاگ 
            </NuxtLink>
        </li>
        <li class="mb-4">
            <NuxtLink to="/contact" class="flex items-center gap-x-2 pr-2.5" active-class="active-link">
                <div class="w-3 h-3 rounded-full border-2 border-green-500 bg-white"></div>
                 تماس با ما
            </NuxtLink>
        </li>
    </ul>
</div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const navOpen = ref(false);
    const submenuOpen = ref(false);
    const submenuOpens = ref(false);
    const overlayVisible = ref(false);
    const nav = ref<HTMLElement | null>(null);
    const submenu = ref<HTMLElement | null>(null);
    const overlay = ref<HTMLElement | null>(null);

    const openNav = (e : Event) => {
      navOpen.value = true;
      overlayVisible.value = true;
      document.body.style.overflow = 'hidden'; // Prevenir scroll cuando el menú está abierto
    };

    const closeNav = () => {
      navOpen.value = false;
      overlayVisible.value = false;
      document.body.style.overflow = ''; // Restaurar scroll
    };

    const toggleSubmenu = (e: Event) => {
      e.preventDefault();
      submenuOpen.value = !submenuOpen.value;
    };

    const toggleSub = (e: Event) => {
      e.preventDefault();
      submenuOpens.value = !submenuOpens.value;
    };

    const closeOverlay = () => {
      closeNav();
    };

    onMounted(() => {
      nav.value = document.querySelector('.nav');
      submenu.value = document.querySelector('.submenu');
      overlay.value = document.querySelector('.overlay');
    });

    return {
      navOpen,
      submenuOpen,
      submenuOpens,
      overlayVisible,
      openNav,
      closeNav,
      toggleSubmenu,
      toggleSub,
      closeOverlay
    };
  }
});
</script>

<style>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* رنگ پس‌زمینه */
    z-index: 10; /* لایه بالایی */
    transition: opacity 0.5s ease-in-out; /* انتقال روان */
}

/* حالت مخفی */
.overlay.opacity-0 {
    opacity: 0;
    visibility: hidden;
    pointer-events: none; /* جلوگیری از تداخل با اسکرول */
}

.submenu__item--active {
    position: relative;
    color: #22c55e;
    padding-right: 0.625rem; /* 2.5 */
}

.submenu__item--active::after {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 100px;
    background-color: #22c55e;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    /* background-color: rgb(234, 255, 192); */
}

.submenu {
    /* display: none; */
    display: flex;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
    flex-direction: column;
    /* gap: 0.75rem;  */
    padding-right: 0.75rem; /* 3 */
    margin-top: 0.5rem; /* 3 */
    font-size: 0.875rem; /* text-sm */
    color: #3f3f46; /* text-zinc-600 */
    transition: max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
}

.submenu--open {
    /* display: flex; */
    max-height:200px; /* Valor suficiente para mostrar todos los elementos */
    opacity: 1;
    transform: translateY(0);
}

.rtl{
    direction: rtl;
}

/* استایل برای لینک فعال */
.active-link div.rounded-full {
    background-color: #22c55e !important;
}

/* استایل برای هاور روی لینک‌ها */
.nav a:hover div.rounded-full {
    background-color: rgba(34, 197, 94, 0.3) !important;
}

/* استایل برای منوی سایت ساز */
[href^="/site-builder"] {
    color: #059669 !important;
}

[href^="/site-builder"] div.rounded-full {
    border-color: #059669 !important;
}

[href^="/site-builder"].active-link div.rounded-full {
    background-color: #059669 !important;
    border-color: #059669 !important;
}

[href^="/site-builder#"] {
    color: #064e3b !important;
}

[href^="/site-builder#"]:hover {
    color: #059669 !important;
}

/* استایل برای منوی ابر ساز */
[href^="/cloud-builder"] {
    color: #0284c7 !important;
}

[href^="/cloud-builder"] div.rounded-full {
    border-color: #0284c7 !important;
}

[href^="/cloud-builder"].active-link div.rounded-full {
    background-color: #0284c7 !important;
    border-color: #0284c7 !important;
}

[href^="/cloud-builder#"] {
    color: #0c4a6e !important;
}

[href^="/cloud-builder#"]:hover {
    color: #0284c7 !important;
}
</style>