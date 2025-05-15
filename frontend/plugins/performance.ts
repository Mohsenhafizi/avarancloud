// پلاگین بهینه‌سازی عملکرد برای کاهش TBT

import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      // پیاده‌سازی تأخیر در اجرای اسکریپت‌های غیر ضروری
      const nonCriticalTasks = () => {
        // 1. تأخیر در اجرای انیمیشن‌ها
        setTimeout(() => {
          const animatedElements = document.querySelectorAll('[data-aos]');
          animatedElements.forEach(el => {
            el.classList.add('aos-animate');
          });
        }, 100);

        // 2. تأخیر در اجرای ایونت‌های کاربری پیچیده
        setTimeout(() => {
          const buttons = document.querySelectorAll('button, a');
          buttons.forEach(button => {
            button.addEventListener('mouseover', () => {
              // اجرای کد hover effect
            });
          });
        }, 200);

        // 3. تأخیر در اجرای کوئری‌های پیچیده DOM
        setTimeout(() => {
          // اجرای کوئری‌های پیچیده DOM که در TBT تأثیر دارند
        }, 300);

        // 4. تأخیر در اجرای کدهای تحلیلی و ردیابی
        setTimeout(() => {
          // کدهای تحلیلی و ردیابی
        }, 1000);
      };

      // استفاده از requestIdleCallback برای اجرای تسک‌های غیر ضروری در زمان بیکاری مرورگر
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(nonCriticalTasks);
      } else {
        setTimeout(nonCriticalTasks, 200);
      }

      // بهینه‌سازی عملکرد برای اسکرول
      let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
      window.addEventListener('scroll', () => {
        if (scrollTimeout === null) {
          scrollTimeout = setTimeout(() => {
            scrollTimeout = null;
            // اجرای کدهای وابسته به اسکرول
          }, 100);
        }
      }, { passive: true });

      // بهینه‌سازی عملکرد برای تغییر سایز
      let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
      window.addEventListener('resize', () => {
        if (resizeTimeout === null) {
          resizeTimeout = setTimeout(() => {
            resizeTimeout = null;
            // اجرای کدهای وابسته به تغییر سایز
          }, 100);
        }
      }, { passive: true });

      // غیرفعال‌سازی انیمیشن‌ها در صورت ترجیح کاربر
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('no-animation');
      }

      // بهینه‌سازی نمایش تصاویر با IntersectionObserver
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            
            // اگر data-src وجود داشته باشد، آن را به src تبدیل کنید
            if (img.dataset.src) {
              img.src = img.dataset.src;
              delete img.dataset.src;
            }
            
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    });
  }
}); 