<template>
      <div class="">
        <div class="projects container-inner mx-3 md:mx-10 lg:mx-40 text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
          <h2 class="font-bold mb-6 mx-4" id="projects">ویژگی‌های کلیدی ابرآوران:</h2>
  
          <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          </div>
  
          <ul class="text-lg sm:text-xl space-y-6">
            <li v-for="(item, index) in features" :key="index" 
                class="checkmark animate-item" 
                :class="{ 'animate-in': isVisible }"
                :style="{ '--delay': `${index * 0.15}s` }"
                ref="items">
              <div class="item-content">
                <div class="inline-block">
                  <img class="inline-block w-14 h-14 mb-2" src="../../assets/photos/tick.png" alt="">
                  {{ item.title }}
                </div>
                <div class="text-lg text-gray-600 mx-16">
                  {{ item.description }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const features = [
  {
    title: 'مدیریت هوشمند منابع',
    description: 'بهینه‌سازی خودکار منابع ابری و کاهش هزینه‌های عملیاتی با استفاده از الگوریتم‌های پیشرفته هوش مصنوعی. سیستم ما به صورت هوشمند منابع را بر اساس نیازهای واقعی تنظیم می‌کند و به صورت مداوم عملکرد سیستم را بهینه‌سازی می‌کند. این ویژگی به شما کمک می‌کند تا هزینه‌های خود را به حداقل برسانید و در عین حال عملکرد سیستم را در بالاترین سطح نگه دارید.'
  },
  {
    title: 'امنیت پیشرفته',
    description: 'ارائه لایه‌های امنیتی چندگانه و محافظت از داده‌ها با استفاده از تکنولوژی‌های رمزنگاری پیشرفته. سیستم ما از آخرین استانداردهای امنیتی پیروی می‌کند و به صورت مداوم به‌روزرسانی می‌شود. ما از تکنولوژی‌های پیشرفته مانند رمزنگاری end-to-end، احراز هویت چندعاملی و سیستم‌های تشخیص نفوذ استفاده می‌کنیم تا امنیت داده‌های شما را تضمین کنیم.'
  },
  {
    title: 'مقیاس‌پذیری خودکار',
    description: 'افزایش یا کاهش خودکار منابع بر اساس نیازهای واقعی سیستم و بار کاری. این ویژگی به شما امکان می‌دهد تا بدون نگرانی از محدودیت‌های منابع، کسب و کار خود را توسعه دهید. سیستم ما به صورت هوشمند منابع را بر اساس نیازهای واقعی تنظیم می‌کند و به صورت مداوم عملکرد سیستم را بهینه‌سازی می‌کند.'
  },
  {
    title: 'پشتیبانی ۲۴/۷',
    description: 'ارائه پشتیبانی فنی تمام وقت با تیم متخصص و پاسخگویی سریع به مشکلات احتمالی. تیم پشتیبانی ما همواره آماده پاسخگویی به سوالات و رفع مشکلات شما هستند. ما با استفاده از سیستم‌های پیشرفته مانیتورینگ، مشکلات را قبل از وقوع شناسایی می‌کنیم و به سرعت آنها را برطرف می‌کنیم.'
  },
  {
    title: 'گزارش‌گیری پیشرفته',
    description: 'ارائه گزارش‌های دقیق و تحلیلی از عملکرد سیستم و مصرف منابع. این گزارش‌ها به شما کمک می‌کنند تا تصمیمات بهتری در زمینه مدیریت منابع بگیرید. سیستم ما به صورت مداوم عملکرد سیستم را مانیتور می‌کند و گزارش‌های دقیقی از وضعیت سیستم ارائه می‌دهد.'
  },
  {
    title: 'یکپارچه‌سازی با سرویس‌های دیگر',
    description: 'امکان یکپارچه‌سازی با سرویس‌های مختلف و ابزارهای توسعه. این ویژگی به شما امکان می‌دهد تا از تمام قابلیت‌های مورد نیاز خود بهره‌مند شوید. سیستم ما با اکثر سرویس‌های رایج سازگار است و به راحتی می‌توانید آن را با سیستم‌های موجود خود یکپارچه کنید.'
  },
  {
    title: 'پشتیبان‌گیری و بازیابی اطلاعات',
    description: 'ارائه خدمات پشتیبان‌گیری و بازیابی اطلاعات برای اطمینان از دسترسی دائمی به داده‌ها. سیستم ما به صورت خودکار از داده‌های شما پشتیبان‌گیری می‌کند و در صورت بروز مشکل، به سرعت آنها را بازیابی می‌کند. این ویژگی به شما کمک می‌کند تا از امنیت داده‌های خود اطمینان حاصل کنید.'
  },
  {
    title: 'مانیتورینگ پیشرفته',
    description: 'ارائه سیستم‌های مانیتورینگ پیشرفته برای نظارت بر عملکرد سیستم. سیستم ما به صورت مداوم عملکرد سیستم را مانیتور می‌کند و در صورت بروز مشکل، به سرعت آن را به شما اطلاع می‌دهد. این ویژگی به شما کمک می‌کند تا مشکلات را قبل از وقوع شناسایی کنید و آنها را برطرف کنید.'
  }
]

const items = ref([])
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  })

  items.value.forEach(item => {
    observer.observe(item)
  })
})
</script>

<style scoped>
.animate-item {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  transition-delay: var(--delay);
}

.animate-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.item-content {
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1rem;
  border-radius: 0.5rem;
}

.animate-item:hover .item-content {
  transform: translateY(-12px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.animate-item img {
  transition: transform 0.5s ease;
}

.animate-item:hover img {
  transform: rotate(360deg);
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  60% {
    transform: translateY(-10px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>