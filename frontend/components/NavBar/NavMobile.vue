<template>
    <div class="bg-white rtl fixed w-full z-20 md:hidden p-2">  
    <!-- Overlay -->
    <div class="overlay fixed inset-0 bg-black/60 bg-opacity-75 z-10 transition-opacity duration-500 ease-in-out" :class="{ 'opacity-0 invisible': !overlayVisible, 'opacity-100 visible': overlayVisible }" @click="closeOverlay"></div>
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
                <NuxtLink to="/about-us" class="flex items-center gap-x-2 pr-2.5" active-class="active-link">
                    <div class="w-3 h-3 rounded-full border-2 border-green-500 bg-transparent" :class="{ 'bg-green-500': isActive('/about-us') }"></div>
                     درباره ما
                </NuxtLink>
            </li>
            <li class="mb-4">
                <NuxtLink to="/about-us#contact-us" class="flex items-center gap-x-2 pr-2.5" active-class="active-link" @click="handleContactUsClick">
                    <div class="w-3 h-3 rounded-full border-2 border-green-500 bg-transparent" :class="{ 'bg-green-500': isContactUsVisible || (isContactUsClicked && isContactUsVisible) }"></div>
                     ارتباط با ما
                </NuxtLink>
            </li>
        </ul>
    </div>
    </div>
    </template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  setup() {
    const navOpen = ref(false);
    const submenuOpen = ref(false);
    const submenuOpens = ref(false);
    const overlayVisible = ref(false);
    const isContactUsClicked = ref(false); // برای ردیابی کلیک روی لینک "ارتباط با ما"
    const isContactUsVisible = ref(false); // برای ردیابی دیده شدن بخش #contact-us
    const observer = ref<IntersectionObserver | null>(null); // ذخیره نمونه Intersection Observer

    const openNav = () => {
      navOpen.value = true;
      overlayVisible.value = true;
    };

    const closeNav = () => {
      navOpen.value = false;
      overlayVisible.value = false;
      document.body.style.overflow = ''; // Restore scroll
    };

    const toggleSubmenu = () => {
      submenuOpen.value = !submenuOpen.value;
    };

    const toggleSub = () => {
      submenuOpens.value = !submenuOpens.value;
    };

    const closeOverlay = () => {
      closeNav();
    };

    const handleContactUsClick = () => {
      isContactUsClicked.value = true; // وقتی کاربر روی لینک "ارتباط با ما" کلیک می‌کند
    };

    const setupIntersectionObserver = () => {
      const contactUsSection = document.querySelector('#contact-us');
      if (contactUsSection) {
        observer.value = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                isContactUsVisible.value = true; // وقتی بخش #contact-us دیده شد
              } else {
                isContactUsVisible.value = false; // وقتی بخش #contact-us دیده نشد
              }
            });
          },
          {
            threshold: 0.5, // حداقل 50% بخش باید دیده شود
          }
        );
        observer.value.observe(contactUsSection);
      }
    };

    const scrollToContactUs = () => {
      const contactUsSection = document.querySelector('#contact-us');
      if (contactUsSection) {
        contactUsSection.scrollIntoView({ behavior: 'smooth' }); // اسکرول به بخش #contact-us
      }
    };

    // تعریف تابع isActive
    const isActive = (route: string) => {
      return route === window.location.pathname || route === window.location.href;
    };

    onMounted(() => {
      // راه‌اندازی Intersection Observer
      setupIntersectionObserver();

      // بررسی اینکه آیا کاربر مستقیماً به بخش #contact-us مراجعه کرده است
      if (window.location.hash === '#contact-us') {
        scrollToContactUs(); // اسکرول به بخش #contact-us
      }

      // رویداد کلی برای کل صفحه برای بستن منو وقتی کاربر جای دیگری کلیک می‌کند
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      // پاکسازی Intersection Observer
      if (observer.value) {
        observer.value.disconnect();
      }

      // پاکسازی event listeners
      document.removeEventListener('click', handleClickOutside);
    });

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const menuContainer = document.querySelector('.nav') as HTMLElement;
      if (menuContainer && !menuContainer.contains(target)) {
        closeNav();
      }
    };

    return {
      navOpen,
      submenuOpen,
      submenuOpens,
      overlayVisible,
      openNav,
      closeNav,
      toggleSubmenu,
      toggleSub,
      closeOverlay,
      isContactUsClicked,
      isContactUsVisible,
      handleContactUsClick,
      isActive, // اضافه کردن تابع isActive
    };
  },
});
</script>

<style>
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
    background-color: #22c55e;
}

/* استایل برای هاور روی لینک‌ها */
.nav a:hover div.rounded-full {
    background-color: rgba(34, 197, 94, 0.3);
}

/* استایل برای منوی سایت ساز */
[href^="/site-builder"] {
    color: #059669;
}

[href^="/site-builder"] div.rounded-full {
    border-color: #059669;
}

[href^="/site-builder"].active-link div.rounded-full {
    background-color: #059669;
    border-color: #059669;
}

/* استایل برای منوی ابر ساز */
[href^="/cloud-builder"] {
    color: #0284c7;
}

[href^="/cloud-builder"] div.rounded-full {
    border-color: #0284c7;
}

[href^="/cloud-builder"].active-link div.rounded-full {
    background-color: #0284c7;
    border-color: #0284c7;
}

[href^="/cloud-builder#"] {
    color: #0c4a6e;
}

[href^="/cloud-builder#"]:hover {
    color: #0284c7;
}
</style>