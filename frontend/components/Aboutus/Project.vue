<template>
      <div class="">
        <div class="projects container-inner mx-3 md:mx-10 lg:mx-40 text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
          <h2 class="font-bold mb-6 mx-4" id="projects">ویژگی‌های ابرآوران</h2>
  
          <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          </div>
  
          <ul class="text-lg sm:text-xl space-y-4">
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
    description: 'بهینه‌سازی خودکار منابع ابری، کاهش هزینه‌های عملیاتی و افزایش بهره‌وری.'
  },
  {
    title: 'امنیت پیشرفته',
    description: 'لایه‌های امنیتی چندگانه، رمزنگاری پیشرفته و احراز هویت چندعاملی برای حفاظت از داده‌ها.'
  },
  {
    title: 'مقیاس‌پذیری خودکار',
    description: 'تنظیم خودکار منابع بر اساس نیاز و بار کاری برای رشد بدون نگرانی.'
  },
  {
    title: 'پشتیبانی ۲۴/۷',
    description: 'پشتیبانی تخصصی تمام‌وقت با پاسخگویی سریع و همراهی در رفع مشکلات.'
  },
  {
    title: 'گزارش‌گیری پیشرفته',
    description: 'گزارش‌های دقیق از عملکرد و مصرف منابع برای تحلیل و تصمیم‌گیری بهتر.'
  },
  {
    title: 'یکپارچه‌سازی با سرویس‌های دیگر',
    description: 'سازگاری و اتصال آسان با سرویس‌ها و ابزارهای رایج برای توسعه و استقرار یکپارچه.'
  },
  {
    title: 'پشتیبان‌گیری و بازیابی اطلاعات',
    description: 'پشتیبان‌گیری خودکار و بازیابی سریع داده‌ها برای دسترس‌پذیری دائمی.'
  },
  {
    title: 'مانیتورینگ پیشرفته',
    description: 'پایش مداوم سیستم و اطلاع‌رسانی فوری برای پیشگیری و واکنش سریع.'
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