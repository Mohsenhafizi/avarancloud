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
            <div class="dropdown-container relative" ref="menuContainer">
                <NuxtLink to="/site-builder" class="hover:bg-emerald-300 cursor-pointer rounded-2xl p-3 transition-all flex items-center" @mouseenter="menuMouseEnter" active-class="active-link">
                    <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
                    <li class="flex items-center">
                        سایت ساز
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            :class="['h-4 w-4 mr-1 transform transition-transform duration-300', {'rotate-180': isMenuOpen}]" 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </li>
                </NuxtLink>
                <div :class="['dropdown-menu absolute top-full right-0 mt-1 w-44 py-2 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg shadow-xl transition-all duration-300 ease-in-out', {'menu-visible': isMenuOpen, 'menu-hidden': !isMenuOpen}]" 
                    ref="submenuSite" 
                    @mouseenter="submenuMouseEnter"
                    @mouseleave="scheduleClose">
                    <div class="arrow-up"></div>
                    <div class="safe-area"></div>
                    <ul class="text-right">
                        <li><NuxtLink to="/site-builder#features" class="submenu-item block py-2 px-4 text-gray-800 text-base">ویژگی ها</NuxtLink></li>
                        <li><NuxtLink to="/site-builder#tozihat" class="submenu-item block py-2 px-4 text-gray-800 text-base">توضیحات</NuxtLink></li>
                        <li><NuxtLink to="/site-builder#packages" class="submenu-item block py-2 px-4 text-gray-800 text-base">بسته ها</NuxtLink></li>
                        <li><NuxtLink to="/site-builder#submenu" class="submenu-item block py-2 px-4 text-gray-800 text-base">سوالات متداول</NuxtLink></li>
                    </ul>
                    <div class="safe-area"></div>
                </div>
            </div>
            <div class="dropdown-container relative" ref="menuContainers">
                <NuxtLink to="/cloud-builder" class="hover:bg-emerald-300 cursor-pointer rounded-2xl p-3 transition-all flex items-center" @mouseenter="menuMouseEnters" active-class="active-link">
                    <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
                    <li class="flex items-center">
                        ابر ساز
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            :class="['h-4 w-4 mr-1 transform transition-transform duration-300', {'rotate-180': isMenuOpenContainer}]" 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </li>
                </NuxtLink>
                <div :class="['dropdown-menu absolute top-full right-0 mt-1 w-44 py-2 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg shadow-xl transition-all duration-300 ease-in-out', {'menu-visible': isMenuOpenContainer, 'menu-hidden': !isMenuOpenContainer}]" 
                    ref="submenuCloud" 
                    @mouseenter="submenuMouseEnters"
                    @mouseleave="scheduleCloses">
                    <div class="arrow-up"></div>
                    <div class="safe-area"></div>
                    <ul class="text-right">
                        <li><NuxtLink to="/cloud-builder#features" class="submenu-item block py-2 px-4 text-gray-800 text-base">ویژگی ها</NuxtLink></li>
                        <li><NuxtLink to="/cloud-builder#tozihat" class="submenu-item block py-2 px-4 text-gray-800 text-base">توضیحات</NuxtLink></li>
                        <li><NuxtLink to="/cloud-builder#packages" class="submenu-item block py-2 px-4 text-gray-800 text-base">بسته ها</NuxtLink></li>
                        <li><NuxtLink to="/cloud-builder#submenu" class="submenu-item block py-2 px-4 text-gray-800 text-base">سوالات متداول</NuxtLink></li>
                    </ul>
                    <div class="safe-area"></div>
                </div>
            </div>
            <NuxtLink
            to="/about-us"
            class="hover:bg-emerald-300 rounded-2xl p-3 transition-all flex items-center"
            active-class="active-link"
            >
            <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
            <li>درباره ما</li>
            </NuxtLink>

            <NuxtLink
                to="/about-us#contact-us"
                class="hover:bg-emerald-300 rounded-2xl p-3 transition-all flex items-center"
                :class="{ 'active-link': isContactUsVisible || (isContactUsClicked && isContactUsVisible) }"
                @click="handleContactUsClick"
                >
            <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
            <li>ارتباط با ما</li>
            </NuxtLink>
        </ul>
    </nav>
    <div class="flex gap-x-4 lg:gap-x-10 xs:gap-x-10 font-bold">
        <div class="flex text-xl items-center gap-x-2.5 text-sky-600">
            avarancloud
            <img class="w-14 h-16" src="../../assets/svg/cloud2.svg" alt="avarancloud">
        </div>
    </div>
    </div>
</header>
</template>

<script lang="ts">
export default {
  name: 'NavDesktop',
  data() {
    return {
      isMenuOpen: false,
      isMenuOpenContainer: false,
      closeTimeout: null as number | null,
      mouseInSubmenu: false,
      mouseInMainLink: false,
      mouseInSubmenuContainer: false,
      mouseInMainLinkContainer: false,
      isContactUsClicked: false, // برای ردیابی کلیک روی لینک "ارتباط با ما"
      isContactUsVisible: false, // برای ردیابی دیده شدن بخش #contact-us
      observer: null as IntersectionObserver | null,  // ذخیره نمونه Intersection Observer
    }
  },
  
  methods: {
    menuMouseEnter() {
      this.clearCloseTimeout();
      this.mouseInMainLink = true;
      this.mouseInMainLinkContainer = false;
      this.isMenuOpen = true;
      this.isMenuOpenContainer = false;
    },
    
    menuMouseEnters() {
      this.clearCloseTimeout();
      this.mouseInMainLinkContainer = true;
      this.mouseInMainLink = false;
      this.isMenuOpenContainer = true;
      this.isMenuOpen = false;
    },
    
    submenuMouseEnter() {
      this.clearCloseTimeout();
      this.mouseInSubmenu = true;
      this.mouseInSubmenuContainer = false;
    },
    
    submenuMouseEnters() {
      this.clearCloseTimeout();
      this.mouseInSubmenuContainer = true;
      this.mouseInSubmenu = false;
    },
    
    scheduleClose() {
      this.clearCloseTimeout();
      this.mouseInMainLink = false;
      this.mouseInSubmenu = false;
      
      this.closeTimeout = window.setTimeout(() => {
        if (!this.mouseInMainLink && !this.mouseInSubmenu) {
          this.isMenuOpen = false;
        }
      }, 50);
    },
    
    scheduleCloses() {
      this.clearCloseTimeout();
      this.mouseInMainLinkContainer = false;
      this.mouseInSubmenuContainer = false;
      
      this.closeTimeout = window.setTimeout(() => {
        if (!this.mouseInMainLinkContainer && !this.mouseInSubmenuContainer) {
          this.isMenuOpenContainer = false;
        }
      }, 50);
    },
    
    clearCloseTimeout() {
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = null;
      }
    },
    handleContactUsClick() {
      this.isContactUsClicked = true; // وقتی کاربر روی لینک "ارتباط با ما" کلیک می‌کند
    },
    setupIntersectionObserver() {
    const contactUsSection = document.querySelector('#contact-us');
    if (contactUsSection) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isContactUsVisible = true; // وقتی بخش #contact-us دیده شد
            } else {
              this.isContactUsVisible = false; // وقتی بخش #contact-us دیده نشد
            }
          });
        },
        {
          threshold: 0.5, // حداقل 50% بخش باید دیده شود
        }
      );
      this.observer.observe(contactUsSection);
    }
  },
  },
  
  mounted() {
  // رویداد کلی برای کل صفحه برای بستن منو وقتی کاربر جای دیگری کلیک می‌کند
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    const menuContainer = this.$refs.menuContainer as HTMLElement | null;
    if (menuContainer && target && !menuContainer.contains(target)) {
      this.isMenuOpen = false;
    }

    const menuContainers = this.$refs.menuContainers as HTMLElement | null;
    if (menuContainers && target && !menuContainers.contains(target)) {
      this.isMenuOpenContainer = false;
    }
  });

  // رویداد mouseleave برای کانتینر منو
  const container = this.$refs.menuContainer as HTMLElement | null;
  if (container) {
    container.addEventListener('mouseleave', this.scheduleClose);
  }

  const containers = this.$refs.menuContainers as HTMLElement | null;
  if (containers) {
    containers.addEventListener('mouseleave', this.scheduleCloses);
  }
  this.setupIntersectionObserver(); // راه‌اندازی Intersection Observer
},
  
beforeDestroy() {
    // پاکسازی Intersection Observer
    if (this.observer) {
      this.observer.disconnect();
    }
  },
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

/* استایل برای منوی سایت ساز */
[href^="/site-builder"] {
    color: #059669; /* رنگ سبز emerald-600 */
}

[href^="/site-builder"] .circle {
    border-color: #059669;
}

[href^="/site-builder"]:hover {
    background-color: rgba(5, 150, 105, 0.1);
}

[href^="/site-builder"]:hover .circle {
    background-color: rgba(5, 150, 105, 0.3);
}

[href^="/site-builder"].active-link .circle {
    background-color: #059669;
    border-color: #059669;
}

/* استایل برای زیرمنوی سایت ساز */
[href^="/site-builder#"] {
    color: #064e3b; /* رنگ سبز emerald-900 */
}

[href^="/site-builder#"]:hover {
    color: #059669;
}

[href^="/site-builder#"]:hover::before {
    background-color: #059669;
    box-shadow: 0 0 3px rgba(5, 150, 105, 0.5);
}

/* استایل برای منوی ابر ساز */
[href^="/cloud-builder"] {
    color: #0284c7; /* رنگ آبی اسکای 600 */
}

[href^="/cloud-builder"] .circle {
    border-color: #0284c7;
}

[href^="/cloud-builder"]:hover {
    background-color: rgba(2, 132, 199, 0.1);
}

[href^="/cloud-builder"]:hover .circle {
    background-color: rgba(2, 132, 199, 0.3);
}

[href^="/cloud-builder"].active-link .circle {
    background-color: #0284c7;
    border-color: #0284c7;
}

/* استایل برای زیرمنوی ابر ساز */
[href^="/cloud-builder#"] {
    color: #0c4a6e; /* رنگ آبی اسکای 900 */
}

[href^="/cloud-builder#"]:hover {
    color: #0284c7;
}

[href^="/cloud-builder#"]:hover::before {
    background-color: #0284c7 !important;
    box-shadow: 0 0 3px rgba(2, 132, 199, 0.5) !important;
}

/* استایل پایه برای دایره‌ها */
.circle {
    background-color: transparent;
    border-width: 1.5px;
}

/* فلش بالای منو */
.arrow-up {
    position: absolute;
    width: 0;
    height: 0;
    right: 20px;
    top: -6px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #ecfdf5; /* رنگ emerald-50 */
}

/* کلاس‌های نمایش و مخفی منو */
.menu-visible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    pointer-events: auto;
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s linear 0s;
}

.menu-hidden {
    opacity: 0;
    transform: translateY(-10px);
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.2s;
}

/* ایجاد یک ناحیه امن اطراف منو */
.safe-area {
    position: absolute;
    width: 100%;
    height: 20px;
    left: 0;
}

.safe-area:first-of-type {
    top: -20px;
}

.safe-area:last-of-type {
    bottom: -20px;
}

/* استایل زیبا برای آیتم‌های منو */
.submenu-item {
    position: relative;
    transition: all 0.3s ease;
    margin: 0 2px;
    border-radius: 6px;
}

.submenu-item:hover {
    background-color: rgba(255, 255, 255, 0.7);
    padding-right: 22px;
    color: #047857;
}

.submenu-item:hover::before {
    content: '';
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 5px;
    background-color: #047857;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(4, 120, 87, 0.5);
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% {
        transform: translateY(-50%) scale(1);
        opacity: 1;
    }
    50% {
        transform: translateY(-50%) scale(1.3);
        opacity: 0.8;
    }
    100% {
        transform: translateY(-50%) scale(1);
        opacity: 1;
    }
}

/* پشتیبانی از دستگاه‌های لمسی */
@media (hover: none) {
    .dropdown-menu {
        transition: none;
    }
}
</style>
