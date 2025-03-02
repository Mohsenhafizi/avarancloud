<template>
<div class="bg-white p-4 rtl block md:hidden">    
<!-- Overlay -->
<div class="overlay" :class="{ 'overlay--visible': overlayVisible }" @click="closeOverlay"></div>
<!-- nav Icon -->
<div class="flex justify-between m-2">
<div class="nav-icon inline-block" @click="openNav">
    <svg class="w-6 h-6 text-zinc-700">
        <use href="#bars-3"></use>
    </svg>
</div>
<div class="inline-block pt-1 font-bold">
    avarancloud
</div>
</div>

<!-- nav -->
<div class="nav fixed top-0 bottom-0 -right-64 w-64 pt-3 px-4 bg-white z-20 overflow-y-auto transition-all" :class="{ '-right-64': !navOpen, 'right-0': navOpen }">
    <div class="flex items-center justify-between pb-5 mb-4 border-b border-b-gray-100">
        <div class="flex pt-2 pr-1 font-bold">
            avarancloud
        </div>
        <div class="nav-Close-Btn" @click="closeNav">
            <svg class="w-5 h-5 text-zinc-600">
                <use href="#x-mark-mini"></use>
        </svg>
        </div>
    </div>


    <div class="flex items-center bg-orange-200/20 text-orange-300 mb-5 pr-2.5 h-10 rounded-md">
        <NuxtLink to="/" class="flex items-center gap-x-2">
            <svg class="w-5 h-5">
                <use xlink:href="#home"></use>
            </svg>
            <span class="pt-1">صفحه اصلی</span>
        </NuxtLink>
    </div>


    <ul class="space-y-6 text-zinc-600">

        <li>
            <div class="flex items-center justify-between submenu-open-btn" @click="toggleSubmenu">
                <NuxtLink to="/" class="flex items-center gap-x-2 pr-2.5">
                    <svg class="w-5 h-5">
                        <use xlink:href="#shopping-cart"></use>
                    </svg>
                     فروشگاه      
                </NuxtLink>
                <span class="">
                    <svg class="w-4 h-4">
                        <use xlink:href="#chevron-down-mini"></use>
                    </svg>
                </span>
            </div>
            <div class="submenu" :class="{ 'submenu--open': submenuOpen }">
                <NuxtLink to="/">قهوه ویژه</NuxtLink>
                <br>
                <NuxtLink to="/" class="submenu__item--active">ویژه در سطح جهانی</NuxtLink>
                <br>
                <NuxtLink to="/">قهوه درجه یک</NuxtLink>
                <br>
                <NuxtLink to="/">ترکیبات تجاری</NuxtLink>
                <br>
                <NuxtLink to="/">کپسول قهوه</NuxtLink>
                <br>
                <NuxtLink to="/">قهوه زینو برزیلی</NuxtLink>
            </div>
        </li>


        <li>
            <NuxtLink to="/" class="flex items-center gap-x-2 pr-2.5">
                <svg class="w-5 h-5">
                    <use xlink:href="#chat-bubble"></use>
                </svg>
                 دیکشنری
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/" class="flex items-center gap-x-2 pr-2.5">
                <svg class="w-5 h-5">
                    <use xlink:href="#briefcase"></use>
                </svg>
                 درباره ما
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/" class="flex items-center gap-x-2 pr-2.5">
                <svg class="w-5 h-5">
                    <use xlink:href="#document-text"></use>
                </svg>
                بلاگ 
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/" class="flex items-center gap-x-2 pr-2.5">
                <svg class="w-5 h-5">
                    <use xlink:href="#phone-arrow-up-right"></use>
                </svg>
                 تماس با ما
            </NuxtLink>
        </li>
    </ul>
</div>
<div class="overlay" :class="{ 'overlay--visible': overlayVisible }" @click="closeOverlay"></div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const navOpen = ref(false);
    const submenuOpen = ref(false);
    const overlayVisible = ref(false);
    const nav = ref<HTMLElement | null>(null);
    const submenu = ref<HTMLElement | null>(null);
    const overlay = ref<HTMLElement | null>(null);

    const openNav = (e : Event) => {
      navOpen.value = true;
      overlayVisible.value = true;
    };

    const closeNav = () => {
      navOpen.value = false;
      overlayVisible.value = false;
    };

    const toggleSubmenu = (e: Event) => {
      submenuOpen.value = !submenuOpen.value;
      if (e.currentTarget) {
        (e.currentTarget as HTMLElement).parentElement?.classList.toggle("text-orange-300");
      }
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
      overlayVisible,
      openNav,
      closeNav,
      toggleSubmenu,
      closeOverlay
    };
  }
});
</script>

<style>
.submenu__item--active {
    position: relative;
    color: #FDBA74;
    padding-right: 0.625rem; /* 2.5 */
}

.submenu__item--active::after {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 100px;
    background-color: #FDBA74;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    /* background-color: rgb(234, 255, 192); */
}

.submenu {
    display: none;
    flex-direction: column;
    /* gap: 0.75rem;  */
    padding-right: 0.75rem; /* 3 */
    margin-top: 0.75rem; /* 3 */
    font-size: 0.875rem; /* text-sm */
    color: #3f3f46; /* text-zinc-600 */
}

.submenu--open {
    display: flex;
}

.overlay {
  display: none;
  position: fixed;
  visibility: hidden;
  opacity: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* تاریک کردن پس‌زمینه */
  z-index: 10;
  transition: all 0.3s;
}

.overlay--visible {
  display: block;
  visibility: visible;
  opacity: 1;
}

.rtl{
    direction: rtl;
}
</style>