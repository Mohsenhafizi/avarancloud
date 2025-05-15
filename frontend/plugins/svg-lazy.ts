// پلاگین برای lazy loading کردن SVG‌ها و بهبود TBT

import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      // یافتن تمام SVG‌های موجود در صفحه
      const svgElements = document.querySelectorAll('svg:not([data-loaded])');
      
      // تنظیم Intersection Observer برای lazy loading SVG‌ها
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const svg = entry.target as SVGElement;
            
            // نشانه‌گذاری SVG به عنوان بارگذاری شده
            svg.setAttribute('data-loaded', 'true');
            
            // بارگذاری تأخیری محتویات SVG در صورت وجود data-src
            if (svg.hasAttribute('data-src')) {
              const svgSrc = svg.getAttribute('data-src') || '';
              
              fetch(svgSrc)
                .then(response => response.text())
                .then(svgContent => {
                  const parser = new DOMParser();
                  const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
                  const newSvg = svgDoc.documentElement;
                  
                  // کپی ویژگی‌ها به SVG جدید
                  Array.from(svg.attributes).forEach(attr => {
                    if (attr.name !== 'data-src') {
                      newSvg.setAttribute(attr.name, attr.value);
                    }
                  });
                  
                  // جایگزینی SVG قدیمی با جدید
                  svg.parentNode?.replaceChild(newSvg, svg);
                })
                .catch(error => {
                  console.error('خطا در بارگذاری SVG:', error);
                });
            }
            
            // توقف نظارت بر این SVG
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '100px 0px', // بارگذاری 100 پیکسل قبل از ورود به viewport
        threshold: 0.1 // بارگذاری با 10% نمایش
      });
      
      // شروع نظارت بر SVG‌ها
      svgElements.forEach(svg => {
        observer.observe(svg);
      });
    });
  }
}); 