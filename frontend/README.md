# ابرآوران - پروژه طراحی سایت و طراحی سایت

این پروژه شامل کد وب‌سایت اصلی ابرآوران است که با استفاده از Nuxt.js توسعه داده شده است.

## راه‌اندازی پروژه

1. نصب وابستگی‌ها:
```bash
cd frontend
npm install
```

2. اجرای محیط توسعه:
```bash
npm run dev
```

3. ساخت نسخه تولید:
```bash
npm run build
```

## بهینه‌سازی TBT (Total Blocking Time)

TBT (زمان انسداد کامل) مقدار زمانی را که توسط اسکریپت‌ها در طول فرآیند بارگذاری صفحه مسدود می‌شود، نشان می‌دهد. برای تجربه کاربری خوب، باید TBT را به ۱۵۰ میلی‌ثانیه یا کمتر برسانید.

### تغییرات انجام شده برای بهبود TBT:

1. **تنظیمات Nuxt.js در فایل nuxt.config.ts**:
   - استفاده از lazy loading برای تصاویر
   - بهینه‌سازی ماژول‌های CSS
   - تکه‌سازی کد (Code Splitting)
   - فشرده‌سازی دارایی‌ها (gzip/brotli)
   - تأخیر در هیدراسیون (Hydration)

2. **بهینه‌سازی کامپوننت‌ها**:
   - استفاده از `<ClientOnly>` برای اجرای کد فقط در سمت کلاینت
   - استفاده از Intersection Observer برای lazy loading کامپوننت‌ها
   - Dynamic Import برای کتابخانه‌های سنگین

3. **پلاگین‌های اضافه شده**:
   - `svg-lazy.ts`: برای بارگذاری SVG‌ها به صورت lazy
   - `performance.ts`: بهینه‌سازی‌های کلی عملکرد و کاهش TBT

### ماژول‌های اضافه شده:

برای بهبود TBT، ماژول‌های زیر اضافه شده‌اند:
- `nuxt-delay-hydration`: برای به تعویق انداختن هیدراسیون
- `nuxt-lazy-load`: برای بارگذاری تنبل تصاویر و دیگر دارایی‌ها
- `@nuxt/image`: برای بهینه‌سازی تصاویر

### نصب ماژول‌های جدید:

```bash
npm install nuxt-delay-hydration nuxt-lazy-load @nuxt/image
```

## راهنمای بهینه‌سازی بیشتر TBT:

1. **اجتناب از JavaScript سنگین**:
   - تقسیم کدهای طولانی به قطعات کوچکتر
   - استفاده از Web Workers برای عملیات پردازش داده‌های سنگین
   - اجرای غیر همزمان (async) کدهای غیر ضروری

2. **بهینه‌سازی DOM**:
   - کاهش عملیات‌های دستکاری DOM
   - استفاده از Intersection Observer به جای scroll event
   - ایجاد تغییرات DOM در دسته‌های یکجا

3. **بهینه‌سازی بارگذاری منابع**:
   - استفاده از preload/prefetch برای منابع مهم
   - استفاده از lazy loading برای تصاویر و اسکریپت‌های غیر ضروری
   - به تعویق انداختن بارگذاری فونت‌ها با استفاده از font-display: swap

## اندازه‌گیری و نظارت بر TBT

برای اندازه‌گیری TBT می‌توانید از ابزارهای زیر استفاده کنید:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- Chrome DevTools در بخش Performance

## منابع مفید

- [Web Vitals](https://web.dev/vitals/)
- [Total Blocking Time](https://web.dev/tbt/)
- [Optimize JavaScript Execution](https://web.dev/optimize-javascript-execution/)
- [Nuxt Performance](https://nuxt.com/docs/getting-started/performance)
