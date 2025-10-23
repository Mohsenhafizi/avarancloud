<template>
<header class="rtl fixed top-0 right-0 left-0 z-20 hidden md:flex justify-between items-center px-5 lg:px-10 
               py-5 h-24 w-[98%] lg:w-[90%] 2xl:w-[80%] mx-auto shadow-2xl rounded-b-3xl" :style="desktopContainerStyle" itemscope itemtype="https://schema.org/SiteNavigationElement" role="banner" aria-label="منوی اصلی سایت ابرآوران">
    <!-- Meta information for search engines -->
    <meta itemprop="description" content="منوی اصلی سایت ابرآوران - ارائه دهنده خدمات طراحی سایت و فروشگاه اینترنتی">
    <meta itemprop="mainContentOfPage" content="true">
    <meta itemprop="headline" content="منو و ناوبری ابرآوران">
    
    <div class="flex items-center w-full justify-between">
    <nav class="flex items-center gap-x-3 lg:gap-x-6 h-14" aria-label="منوی اصلی" role="navigation">
        <ul class="flex gap-x-2 items-center lg:gap-x-6 h-full text-lg 2xl:text-xl text-gray-800 tracking-tighest child:leading-[56px] whitespace-nowrap" role="menubar" aria-orientation="horizontal">
            <NuxtLink to="/" prefetch class="hover:bg-emerald-300 rounded-2xl p-3 transition-all flex items-center" active-class="active-link" itemprop="url" role="menuitem" aria-label="صفحه اصلی">
                <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
                <li class="text-white" itemprop="name">
                    صفحه اصلی
                </li>
            </NuxtLink>
            <div class="dropdown-container relative" ref="menuContainer" role="presentation">
                <NuxtLink to="/site-builder" prefetch class="hover:bg-emerald-300 cursor-pointer rounded-2xl p-3 transition-all flex items-center" @mouseenter="menuMouseEnter" active-class="active-link" itemprop="url" role="menuitem" aria-haspopup="true" :aria-expanded="isMenuOpen.toString()" aria-label="سایت ساز">
                    <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
                    <li class="flex items-center" itemprop="name">
                        سایت ساز
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            :class="['h-4 w-4 mr-1 transform transition-transform duration-300', {'rotate-180': isMenuOpen}]" 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </li>
                </NuxtLink>
                <div :class="['dropdown-menu absolute top-full right-0 mt-1 w-44 py-2 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg shadow-xl transition-all duration-300 ease-in-out', {'menu-visible': isMenuOpen, 'menu-hidden': !isMenuOpen}]" 
                    ref="submenuSite" 
                    @mouseenter="submenuMouseEnter"
                    @mouseleave="scheduleClose"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="site-builder-menu">
                    <div class="arrow-up" aria-hidden="true"></div>
                    <div class="safe-area" aria-hidden="true"></div>
                    <ul class="text-right" role="group">
                      <li role="menuitem"><NuxtLink to="/site-builder#tozihat" prefetch class="submenu-item block py-2 px-4 text-gray-800 text-base" itemprop="url" aria-label="توضیحات"><span itemprop="name">توضیحات</span></NuxtLink></li>
                        <li role="menuitem"><NuxtLink to="/site-builder#features" prefetch class="submenu-item block py-2 px-4 text-gray-800 text-base" itemprop="url" aria-label="ویژگی ها"><span itemprop="name">ویژگی ها</span></NuxtLink></li>
                        <li role="menuitem"><NuxtLink to="/site-builder#packages" prefetch class="submenu-item block py-2 px-4 text-gray-800 text-base" itemprop="url" aria-label="بسته ها"><span itemprop="name">بسته ها</span></NuxtLink></li>
                        <li role="menuitem"><NuxtLink to="/site-builder#submenu" prefetch class="submenu-item block py-2 px-4 text-gray-800 text-base" itemprop="url" aria-label="سوالات متداول"><span itemprop="name">سوالات متداول</span></NuxtLink></li>
                    </ul>
                    <div class="safe-area" aria-hidden="true"></div>
                </div>
            </div>
            <div class="dropdown-container relative" ref="menuContainers" role="presentation">
                <NuxtLink to="/cloud-builder" prefetch class="hover:bg-emerald-300 cursor-pointer rounded-2xl p-3 transition-all flex items-center" @mouseenter="menuMouseEnters" active-class="active-link" itemprop="url" role="menuitem" aria-haspopup="true" :aria-expanded="isMenuOpenContainer.toString()" aria-label="ابر ساز">
                    <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
                    <li class="flex items-center" itemprop="name">
                        ابر ساز
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            :class="['h-4 w-4 mr-1 transform transition-transform duration-300', {'rotate-180': isMenuOpenContainer}]" 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </li>
                </NuxtLink>
                <div :class="['dropdown-menu absolute top-full right-0 mt-1 w-44 py-2 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg shadow-xl transition-all duration-300 ease-in-out', {'menu-visible': isMenuOpenContainer, 'menu-hidden': !isMenuOpenContainer}]" 
                    ref="submenuCloud" 
                    @mouseenter="submenuMouseEnters"
                    @mouseleave="scheduleCloses"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="cloud-builder-menu">
                    <div class="arrow-up" aria-hidden="true"></div>
                    <div class="safe-area" aria-hidden="true"></div>
                    <ul class="text-right" role="group">
                      <li role="menuitem"><NuxtLink to="/cloud-builder#tozihat" prefetch class="submenu-item block py-2 px-4 text-gray-800 text-base" itemprop="url" aria-label="توضیحات"><span itemprop="name">توضیحات</span></NuxtLink></li>
                        <li role="menuitem"><NuxtLink to="/cloud-builder#features" prefetch class="submenu-item block py-2 px-4 text-gray-800 text-base" itemprop="url" aria-label="ویژگی ها"><span itemprop="name">ویژگی ها</span></NuxtLink></li>
                        <li role="menuitem"><NuxtLink to="/cloud-builder#aaS" prefetch class="submenu-item block py-2 px-4 text-gray-800 text-base" itemprop="url" aria-label="مدل های ابرساز"><span itemprop="name">مدل های ابرساز</span></NuxtLink></li>
                        <li role="menuitem"><NuxtLink to="/cloud-builder#packages" prefetch class="submenu-item block py-2 px-4 text-gray-800 text-base" itemprop="url" aria-label="بسته ها"><span itemprop="name">بسته ها</span></NuxtLink></li>
                        <li role="menuitem"><NuxtLink to="/cloud-builder#submenu" prefetch class="submenu-item block py-2 px-4 text-gray-800 text-base" itemprop="url" aria-label="سوالات متداول"><span itemprop="name">سوالات متداول</span></NuxtLink></li>
                    </ul>
                    <div class="safe-area" aria-hidden="true"></div>
                </div>
            </div>
            <NuxtLink
            to="/about-us" prefetch
            class="hover:bg-emerald-300 rounded-2xl p-3 transition-all flex items-center"
            active-class="active-link"
            itemprop="url"
            role="menuitem"
            aria-label="درباره ما"
            >
            <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
            <li class="text-white" itemprop="name">درباره ما</li>
            </NuxtLink>

            <NuxtLink
                to="/about-us#contact-us" prefetch
                class="hover:bg-emerald-300 rounded-2xl p-3 transition-all flex items-center"
                :class="{ 'active-link': isContactUsVisible || (isContactUsClicked && isContactUsVisible) }"
                @click="handleContactUsClick"
                itemprop="url"
                role="menuitem"
                aria-label="ارتباط با ما"
                >
            <div class="circle mx-2 w-3 h-3 mb-1 shadow-xl rounded-full transition-all duration-300"></div>
            <li class="text-white" itemprop="name">ارتباط با ما</li>
            </NuxtLink>
        </ul>
    </nav>
        <div class="relative bottom-0.5 right-4">
          <NuxtLink to="/">
            <img class="w-[290px] h-[74px]" src="../../assets/photos/abr-avaran-logo.png" alt="ابرآوران - طراحی سایت و فروشگاه اینترنتی" itemprop="image">
          </NuxtLink>
        </div>
    </div>
</header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// حالت های کامپوننت
const isMenuOpen = ref(false);
const isMenuOpenContainer = ref(false);
const closeTimeout = ref<number | null>(null);
const mouseInSubmenu = ref(false);
const mouseInMainLink = ref(false);
const mouseInSubmenuContainer = ref(false);
const mouseInMainLinkContainer = ref(false);
const isContactUsClicked = ref(false); // برای ردیابی کلیک روی لینک "ارتباط با ما"
const isContactUsVisible = ref(false); // برای ردیابی دیده شدن بخش #contact-us
const observer = ref<IntersectionObserver | null>(null); // ذخیره نمونه Intersection Observer

// رفرنس ها
const menuContainer = ref<HTMLElement | null>(null);
const submenuSite = ref<HTMLElement | null>(null);
const menuContainers = ref<HTMLElement | null>(null);
const submenuCloud = ref<HTMLElement | null>(null);
// شیشه‌ای کردن پس‌زمینه هدر دسکتاپ مشابه NavMobile
const desktopContainerStyle = {
  background: 'rgba(15, 23, 42, 0.50)',
  backdropFilter: 'blur(16px) saturate(150%)',
  WebkitBackdropFilter: 'blur(16px) saturate(150%)',
  border: '1px solid rgba(255, 255, 255, 0.12)'
};

// متدها
const clearCloseTimeout = () => {
  if (closeTimeout.value) {
    clearTimeout(closeTimeout.value);
    closeTimeout.value = null;
  }
};

const menuMouseEnter = () => {
  clearCloseTimeout();
  mouseInMainLink.value = true;
  mouseInMainLinkContainer.value = false;
  isMenuOpen.value = true;
  isMenuOpenContainer.value = false;
};

const menuMouseEnters = () => {
  clearCloseTimeout();
  mouseInMainLinkContainer.value = true;
  mouseInMainLink.value = false;
  isMenuOpenContainer.value = true;
  isMenuOpen.value = false;
};

const submenuMouseEnter = () => {
  clearCloseTimeout();
  mouseInSubmenu.value = true;
  mouseInSubmenuContainer.value = false;
};

const submenuMouseEnters = () => {
  clearCloseTimeout();
  mouseInSubmenuContainer.value = true;
  mouseInSubmenu.value = false;
};

const scheduleClose = () => {
  clearCloseTimeout();
  mouseInMainLink.value = false;
  mouseInSubmenu.value = false;
  
  closeTimeout.value = window.setTimeout(() => {
    if (!mouseInMainLink.value && !mouseInSubmenu.value) {
      isMenuOpen.value = false;
    }
  }, 50);
};

const scheduleCloses = () => {
  clearCloseTimeout();
  mouseInMainLinkContainer.value = false;
  mouseInSubmenuContainer.value = false;
  
  closeTimeout.value = window.setTimeout(() => {
    if (!mouseInMainLinkContainer.value && !mouseInSubmenuContainer.value) {
      isMenuOpenContainer.value = false;
    }
  }, 50);
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

const setupHashNavigationEvents = () => {
  // یافتن تمام لینک‌هایی که دارای هش هستند
  const hashLinks = document.querySelectorAll('a[href*="#"]');
  
  hashLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      if (href.includes('#')) {
        const [path, hash] = href.split('#');
        const currentPath = window.location.pathname;
        
        // اگر در همان صفحه هستیم، اسکرول را به صورت دستی انجام دهیم
        if ((path === currentPath || (path === '/' && currentPath === '/') || path === '') && hash) {
          e.preventDefault();
          
          // کمی تاخیر برای اطمینان از بسته شدن منوها
          setTimeout(() => {
            const targetElement = document.getElementById(hash);
            if (targetElement) {
              // اندازه هدر برای محاسبه آفست
              const headerOffset = 100;
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              
              // اول سریع به موقعیت اسکرول کنیم
              window.scrollTo({
                top: offsetPosition,
                behavior: 'auto'
              });
              
              // سپس با تاخیر کم، تنظیم دقیق را انجام دهیم
              setTimeout(() => {
                const newElementPosition = targetElement.getBoundingClientRect().top;
                if (Math.abs(newElementPosition) > 20) {
                  window.scrollBy({
                    top: newElementPosition - headerOffset,
                    behavior: 'smooth'
                  });
                }
              }, 150);
            }
            
            // آدرس را بدون بارگذاری مجدد صفحه به‌روز کنیم
            history.pushState(null, '', href);
          }, 100);
        }
      }
    });
  });
};

// چرخه حیات کامپوننت
onMounted(() => {
  // رویداد کلی برای کل صفحه برای بستن منو وقتی کاربر جای دیگری کلیک می‌کند
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    if (menuContainer.value && target && !menuContainer.value.contains(target)) {
      isMenuOpen.value = false;
    }

    if (menuContainers.value && target && !menuContainers.value.contains(target)) {
      isMenuOpenContainer.value = false;
    }
  });

  // رویداد mouseleave برای کانتینر منو
  if (menuContainer.value) {
    menuContainer.value.addEventListener('mouseleave', scheduleClose);
  }

  if (menuContainers.value) {
    menuContainers.value.addEventListener('mouseleave', scheduleCloses);
  }
  
  setupIntersectionObserver(); // راه‌اندازی Intersection Observer
  
  // اضافه کردن مدیریت کلیک روی لینک‌های دارای هش
  setupHashNavigationEvents();
});

onBeforeUnmount(() => {
  // پاکسازی Intersection Observer
  if (observer.value) {
    observer.value.disconnect();
  }
});
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

/* Force white text for specific links */
[href="/"] li,
[href="/about-us"] li,
[href="/about-us#contact-us"] li {
    color: white !important;
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
    visibility: visible;
    opacity: 1;
    z-index: 10;
}

.menu-hidden {
    visibility: hidden;
    opacity: 0;
    z-index: -1;
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
