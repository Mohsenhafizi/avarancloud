<template>
    <div class="bg-white rtl fixed w-full z-40 md:hidden p-2" role="region" aria-label="ناوبری موبایل">  
    <!-- Overlay -->
    <div class="overlay fixed inset-0 bg-black/60 bg-opacity-75 z-10 transition-opacity duration-500 ease-in-out" :class="{ 'opacity-0 invisible': !overlayVisible, 'opacity-100 visible': overlayVisible }" @click="closeOverlay" aria-hidden="true"></div>
    <!-- nav Icon -->
    <div class="flex justify-between m-2">
    <div class="nav-icon inline-block p-2" @click="openNav" aria-label="باز کردن منو">
        <svg class="w-6 h-6 text-zinc-700" aria-hidden="true">
            <use href="#bars-3"></use>
        </svg>
    </div>
    <div class="font-bold absolute top-0 left-0">
      <NuxtLink to="/" aria-label="صفحه اصلی">
        <img class="relative right-2 w-[240px] h-[91px]" src="../../assets/photos/avaran-removebg-preview.png" alt="ابرآوران - طراحی سایت و فروشگاه اینترنتی">
      </NuxtLink>
    </div>
    </div>
    
    <!-- nav -->
    <div class="nav fixed top-0 bottom-0 right-0 w-64 pt-3 px-4 bg-white z-20 overflow-y-auto transform transition-transform duration-500 ease-in-out" 
         :class="{ 'translate-x-full': !navOpen, 'translate-x-0': navOpen }"
         itemscope itemtype="https://schema.org/SiteNavigationElement"
         role="navigation"
         aria-label="منوی موبایل">
        <div class="flex items-center justify-between pb-5 mb-4 border-b border-b-gray-100">
            <div class="mb-2">
              <div class="absolute top-0 left-6">
                <img class="relative left-3 w-[222px] h-[84px]" src="../../assets/photos/avaran-removebg-preview.png" alt="ابرآوران - طراحی سایت و فروشگاه اینترنتی" itemprop="image">
              </div>
            </div>
            <div class="relative top-3 nav-Close-Btn" @click="closeNav" aria-label="بستن منو">
                <svg class="w-6 h-6 text-zinc-600" aria-hidden="true">
                    <use href="#x-mark-mini"></use>
                </svg>
            </div>
        </div>
    
        <div class="flex items-center mb-3 pr-2.5 h-10 rounded-md">
            <NuxtLink to="/" class="flex items-center gap-x-2" active-class="active-link" itemprop="url" @click="setActiveMenuItem('/')" role="menuitem" aria-label="صفحه اصلی">
                <div class="w-3 h-3 rounded-full border-2 border-green-500" :class="{'bg-green-500': activeMenuItem === '/'}"></div>
                <span class="pt-1 text-black" itemprop="name">صفحه اصلی</span>
            </NuxtLink>
        </div>
    
        <ul class="text-zinc-600" role="menu" aria-label="منوی اصلی موبایل">
    
            <li class="mb-1" role="presentation">
                <div class="flex items-center justify-between submenu-open-btn" @click="toggleSubmenu" :aria-expanded="submenuOpen" aria-controls="site-submenu" aria-label="سایت ساز">
                    <NuxtLink to="/site-builder" class="flex items-center gap-x-2 pr-2.5" active-class="active-link" itemprop="url" @click="setActiveMenuItem('/site-builder')" role="menuitem">
                        <div class="w-3 h-3 rounded-full border-2 border-green-500" :class="{'bg-green-500': activeMenuItem === '/site-builder'}"></div>
                        <span itemprop="name">سایت ساز</span>
                    </NuxtLink>
                    <span class="">
                        <svg class="w-4 h-4" aria-hidden="true">
                            <use href="#chevron-down-mini"></use>
                        </svg>
                    </span>
                </div>
                <div id="site-submenu" class="submenu" :class="{ 'submenu--open': submenuOpen }" role="menu" aria-labelledby="site-menu">
                  <NuxtLink to="/site-builder#tozihat" class="submenu__item--active my-1" @click="navigateToSection('/site-builder#tozihat')" itemprop="url" role="menuitem" aria-label="توضیحات"><span itemprop="name">توضیحات</span></NuxtLink>
                    <NuxtLink to="/site-builder#features" class="submenu__item--active my-1" @click="navigateToSection('/site-builder#features')" itemprop="url" role="menuitem" aria-label="ویژگی ها"><span itemprop="name">ویژگی ها</span></NuxtLink>
                    <NuxtLink to="/site-builder#packages" class="submenu__item--active" @click="navigateToSection('/site-builder#packages')" itemprop="url" role="menuitem" aria-label="بسته ها"><span itemprop="name">بسته ها</span></NuxtLink>
                    <NuxtLink to="/site-builder#submenu" class="submenu__item--active my-2" @click="navigateToSection('/site-builder#submenu')" itemprop="url" role="menuitem" aria-label="سوالات متداول"><span itemprop="name">سوالات متداول</span></NuxtLink>
                </div>
            </li>
    
            <li class="mb-1" role="presentation">
                <div class="flex items-center justify-between submenu-open-btn" @click="toggleSub" :aria-expanded="submenuOpens" aria-controls="cloud-submenu" aria-label="ابر ساز">
                    <NuxtLink to="/cloud-builder" class="flex items-center gap-x-2 pr-2.5" active-class="active-link" itemprop="url" @click="setActiveMenuItem('/cloud-builder')" role="menuitem">
                        <div class="w-3 h-3 rounded-full border-2 border-blue-500" :class="{'bg-blue-500': activeMenuItem === '/cloud-builder'}"></div>
                        <span itemprop="name">ابر ساز</span>
                    </NuxtLink>
                    <span class="">
                        <svg class="w-4 h-4" aria-hidden="true">
                            <use href="#chevron-down-mini"></use>
                        </svg>
                    </span>
                </div>
                <div id="cloud-submenu" class="submenu" :class="{ 'submenu--open': submenuOpens }" role="menu" aria-labelledby="cloud-menu">
                  <NuxtLink to="/cloud-builder#tozihat" class="submenu__item--active my-1" @click="navigateToSection('/cloud-builder#tozihat')" itemprop="url" role="menuitem" aria-label="توضیحات"><span itemprop="name">توضیحات</span></NuxtLink>
                    <NuxtLink to="/cloud-builder#features" class="submenu__item--active my-1" @click="navigateToSection('/cloud-builder#features')" itemprop="url" role="menuitem" aria-label="ویژگی ها"><span itemprop="name">ویژگی ها</span></NuxtLink>
                    <NuxtLink to="/cloud-builder#aaS" class="submenu__item--active my-1" @click="navigateToSection('/cloud-builder#aaS')" itemprop="url" role="menuitem" aria-label="مدل های ابرساز"><span itemprop="name">مدل های ابرساز</span></NuxtLink>
                    <NuxtLink to="/cloud-builder#packages" class="submenu__item--active" @click="navigateToSection('/cloud-builder#packages')" itemprop="url" role="menuitem" aria-label="بسته ها"><span itemprop="name">بسته ها</span></NuxtLink>
                    <NuxtLink to="/cloud-builder#submenu" class="submenu__item--active my-2" @click="navigateToSection('/cloud-builder#submenu')" itemprop="url" role="menuitem" aria-label="سوالات متداول"><span itemprop="name">سوالات متداول</span></NuxtLink>
                </div>
            </li>
            <li class="mb-4" role="presentation">
                <NuxtLink to="/about-us" class="flex items-center gap-x-2 pr-2.5" active-class="active-link" itemprop="url" @click="setActiveMenuItem('/about-us')" role="menuitem" aria-label="درباره ما">
                  <div class="w-3 h-3 rounded-full border-2 border-green-500" :class="{'bg-green-500': activeMenuItem === '/about-us'}"></div>
                  <span itemprop="name">درباره ما</span>
                </NuxtLink>
            </li>
            <li class="mb-4" role="presentation">
              <NuxtLink
              to="/about-us#contact-us"
              class="flex items-center gap-x-2 pr-2.5"
              :class="{ 'active-link': isContactUsVisible }"
              @click="navigateToSection('/about-us#contact-us')"
              :key="'contact-us-link'"
              itemprop="url"
              role="menuitem"
              aria-label="ارتباط با ما"
            >
              <div
                class="w-3 h-3 rounded-full border-2 border-green-500"
                :class="{ 'bg-green-500': isContactUsVisible || activeMenuItem === '/about-us#contact-us', 'bg-transparent': !isContactUsVisible && activeMenuItem !== '/about-us#contact-us' }"
              ></div>
              <span itemprop="name">ارتباط با ما</span>
            </NuxtLink>
            </li>
        </ul>
    </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const navOpen = ref(false);
    const submenuOpen = ref(false);
    const submenuOpens = ref(false);
    const overlayVisible = ref(false);
    const isContactUsClicked = ref(false);
    const isContactUsVisible = ref(false);
    const observer = ref<IntersectionObserver | null>(null);
    
    // Track active menu items
    const activeMenuItem = ref('');

    const openNav = () => {
      navOpen.value = true; // نوار کناری را باز می‌کند
      overlayVisible.value = true; // Overlay را فعال می‌کند
      
      // Update ARIA attributes for accessibility
      const siteMenu = document.querySelector('.submenu-open-btn[aria-controls="site-submenu"]');
      const cloudMenu = document.querySelector('.submenu-open-btn[aria-controls="cloud-submenu"]');
      
      if (siteMenu) siteMenu.setAttribute('aria-expanded', submenuOpen.value.toString());
      if (cloudMenu) cloudMenu.setAttribute('aria-expanded', submenuOpens.value.toString());
    };

    const closeNav = () => {
      setTimeout(() => {
        navOpen.value = false; // نوار کناری را می‌بندد
        overlayVisible.value = false; // Overlay را غیرفعال می‌کند
      }, 100); // Small delay to allow navigation to complete
    };

    const toggleSubmenu = () => {
      submenuOpen.value = !submenuOpen.value;
      
      // Update ARIA expanded attribute
      const siteMenu = document.querySelector('.submenu-open-btn[aria-controls="site-submenu"]');
      if (siteMenu) siteMenu.setAttribute('aria-expanded', submenuOpen.value.toString());
    };

    const toggleSub = () => {
      submenuOpens.value = !submenuOpens.value;
      
      // Update ARIA expanded attribute
      const cloudMenu = document.querySelector('.submenu-open-btn[aria-controls="cloud-submenu"]');
      if (cloudMenu) cloudMenu.setAttribute('aria-expanded', submenuOpens.value.toString());
    };
    
    const setActiveMenuItem = (path: string) => {
      activeMenuItem.value = path;
    };

    const closeOverlay = () => {
      closeNav();
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // بررسی اینکه آیا کلیک روی منو یا آیکون منو انجام شده است
      const menuContainer = document.querySelector('.nav') as HTMLElement;
      const navIcon = document.querySelector('.nav-icon') as HTMLElement;

      if (
        menuContainer &&
        !menuContainer.contains(target) && // کلیک خارج از منو
        !(navIcon && navIcon.contains(target)) // کلیک روی آیکون منو
      ) {
        closeNav(); // منو را می‌بندد
      }
    };

    const setupIntersectionObserver = () => {
      const contactUsSection = document.querySelector('#contact-us');
      if (contactUsSection) {
        observer.value = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              isContactUsVisible.value = entry.isIntersecting;
            });
          },
          {
            threshold: 0.5,
          }
        );
        observer.value.observe(contactUsSection);
      } else {
        console.warn('بخش #contact-us در صفحه موجود نیست.');
      }
    };
    
    const navigateToSection = (path: string) => {
      // Extract the route path and hash
      const [routePath, hash] = path.split('#');
      
      // Set active menu item
      setActiveMenuItem(path);
      
      // First close the mobile navigation
      closeNav();
      
      // If navigating to an anchor link, ensure proper scrolling
      if (hash) {
        // Use a longer delay to ensure menu has closed before scrolling
        setTimeout(() => {
          const targetElement = document.getElementById(hash);
          if (targetElement) {
            // Get the position of the element relative to the viewport
            const elementPosition = targetElement.getBoundingClientRect().top;
            // Add current scroll position to get absolute position
            const offsetPosition = elementPosition + window.pageYOffset;
            // Subtract 100px offset to show section higher (adjust as needed)
            const scrollPosition = offsetPosition - 100;
            
            // First scroll quickly to the position
            window.scrollTo({
              top: scrollPosition,
              behavior: 'auto'
            });
            
            // Then after a small delay, do a smooth fine adjustment
            setTimeout(() => {
              const newElementPosition = targetElement.getBoundingClientRect().top;
              if (Math.abs(newElementPosition) > 20) {
                window.scrollBy({
                  top: newElementPosition - 100,
                  behavior: 'smooth'
                });
              }
            }, 150);
          }
        }, 400); // Increase delay to ensure menu has closed
      }
    };
    
    // Set initial active menu based on route
    onMounted(() => {
      setupIntersectionObserver();
      document.addEventListener('click', handleClickOutside);
      
      // Set initial active menu item based on current route
      activeMenuItem.value = route.path;
    });

    onUnmounted(() => {
      if (observer.value) {
        observer.value.disconnect();
      }
      document.removeEventListener('click', handleClickOutside);
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
      closeOverlay,
      isContactUsClicked,
      isContactUsVisible,
      activeMenuItem,
      setActiveMenuItem,
      navigateToSection
    };
  },
});
</script>

<style>
.submenu__item--active {
    position: relative;
    color: #3b82f6;
    padding-right: 0.625rem; /* 2.5 */
}

/* Site Builder submenu items should be green */
#site-submenu .submenu__item--active {
    color: #22c55e;
}

/* Cloud Builder submenu items should be blue */
#cloud-submenu .submenu__item--active {
    color: #3b82f6;
}

.submenu__item--active::after {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 100px;
    background-color: #3b82f6;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

/* Site Builder submenu dots should be green */
#site-submenu .submenu__item--active::after {
    background-color: #22c55e;
}

/* Cloud Builder submenu dots should be blue */
#cloud-submenu .submenu__item--active::after {
    background-color: #3b82f6;
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

/* Accessibility styles for mobile navigation */
.nav[role="navigation"] a:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

.nav[role="navigation"] a[href^="/site-builder"]:focus,
.nav[role="navigation"] a[href^="/about-us"]:focus {
    outline: 2px solid #22c55e;
    outline-offset: 2px;
}

.nav[role="navigation"] a[href^="/cloud-builder"]:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

.active-link {
    font-weight: bold;
    color: #3b82f6;
}

/* Site Builder and Contact Us links should use green color when active */
a[href^="/site-builder"].active-link, 
a[href^="/about-us"].active-link {
    color: #22c55e;
}

/* Cloud Builder links should use blue color when active */
a[href^="/cloud-builder"].active-link {
    color: #3b82f6;
}

/* Keep home page text black even when active */
a[href="/"].active-link span {
    color: black !important;
}

/* Keep text color black for specific links */
a[href="/"] span,
a[href="/about-us"] span,
a[href="/about-us#contact-us"] span {
    color: black !important;
}

/* Override active link color for specific links */
a[href="/"].active-link span,
a[href="/about-us"].active-link span,
a[href="/about-us#contact-us"].active-link span {
    color: black !important;
}
</style>