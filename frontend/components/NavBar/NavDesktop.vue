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
                    ref="submenu" 
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
            <NuxtLink to="/cloud-builder" class="hover:bg-emerald-300 rounded-2xl p-3 transition-all flex items-center" active-class="active-link">
                <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
                <li>
                    ابر ساز
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
  name: 'NavDesktop',
  data() {
    return {
      isMenuOpen: false,
      closeTimeout: null as number | null,
      mouseInSubmenu: false,
      mouseInMainLink: false
    }
  },
  
  methods: {
    menuMouseEnter() {
      // پاک کردن هر تایمر بستن قبلی
      this.clearCloseTimeout();
      this.mouseInMainLink = true;
      this.isMenuOpen = true;
    },
    
    submenuMouseEnter() {
      // پاک کردن هر تایمر بستن قبلی
      this.clearCloseTimeout();
      this.mouseInSubmenu = true;
    },
    
    scheduleClose() {
      // ابتدا پاکسازی هر گونه تایمر قبلی
      this.clearCloseTimeout();
      this.mouseInMainLink = false;
      this.mouseInSubmenu = false;
      
      // اگر موس هم از لینک اصلی و هم از منو خارج شد، منو را ببند
      this.closeTimeout = window.setTimeout(() => {
        if (!this.mouseInMainLink && !this.mouseInSubmenu) {
          this.isMenuOpen = false;
        }
      }, 100);
    },
    
    clearCloseTimeout() {
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = null;
      }
    }
  },
  
  mounted() {
    // رویداد کلی برای کل صفحه برای بستن منو وقتی کاربر جای دیگری کلیک می‌کند
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const menuContainer = this.$refs.menuContainer as HTMLElement;
      
      if (menuContainer && !menuContainer.contains(target)) {
        this.isMenuOpen = false;
      }
    });
    
    // رویداد mouseleave برای کانتینر منو
    const container = this.$refs.menuContainer as HTMLElement;
    if (container) {
      container.addEventListener('mouseleave', this.scheduleClose);
    }
  },
  
  beforeDestroy() {
    // پاکسازی هر گونه تایمر باقی‌مانده
    this.clearCloseTimeout();
    
    // پاکسازی event listeners (اختیاری، برای جلوگیری از memory leak)
    document.removeEventListener('click', () => {});
  }
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