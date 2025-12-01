<template>
    <div class="overflow-x-hidden border-gray-500 border-b mx-4 lg:mx-40 mb-8">
      <div class="get-to-know-me container-inner mx-auto text-xl relative">
        <transition name="title-appear">
          <h2 class="font-bold mb-6 main-title" id="about">درباره ابرآوران</h2>
        </transition>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px" class="floating-element"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <transition name="image-appear">
            <div class="image-wrapper mr-2 mb-4">
              <img src="../../assets/photos/avarancloud-abr.png" alt="avatar" class="profile-image" />
              <div class="image-overlay"></div>
            </div>
          </transition>
          <div class="flex-1 text-lg sm:text-xl md:mr-6 content-section">
            <p class="content-text">ابرآوران بیش از یک شرکت طراحی وب است؛ ما شریک دیجیتال شما هستیم. از روز اول با تمرکز بر کیفیت، امنیت و عملکرد، پروژه‌ها را پیاده‌سازی می‌کنیم تا سایت شما نه تنها زیبا، بلکه ابزاری واقعی برای رشد کسب‌وکار باشد. هر وب‌سایت از ابتدا با معماری حرفه‌ای، طراحی اختصاصی و استانداردهای جهانی ساخته می‌شود تا تجربه‌ای بی‌نقص و قابل اعتماد ارائه دهد.</p>
          </div>
        </div>

        <div class="mt-12 section-block">
          <h3 class="font-bold text-xl mb-1 section-title">کار ما</h3>
          <div class="text-lg sm:text-xl">
            <p class="content-text">ما معتقدیم وب‌سایت فقط یک صفحه آنلاین نیست؛ یک برند واقعی را نمایندگی می‌کند. ارزش‌های اصلی ما شامل دقت در طراحی، حرفه‌ای بودن در اجرا، احترام به زمان مشتری و ارائه راهکارهای مقیاس‌پذیر است. هدف ما خلق تجربه‌ای متمایز و لوکس است که مخاطب را جذب و برند شما را در ذهن‌ها ماندگار کند.</p>
          </div>
        </div>

        <div class="mt-12 section-block">
          <h3 class="font-bold text-xl mb-1 section-title">تیم ما</h3>
          <div class="text-lg sm:text-xl">
            <p class="content-text">تیم ابرآوران از متخصصان طراحی، توسعه، تجربه کاربری و امنیت تشکیل شده است. هر عضو تیم با استانداردهای جهانی و آخرین فناوری‌ها کار می‌کند تا سایت شما هم از نظر ظاهری و هم فنی در سطح بالا باشد. ما ترکیبی از خلاقیت و تخصص را به پروژه‌ها می‌آوریم تا هر سایتی یک اثر حرفه‌ای و قابل اعتماد باشد.
            </p>
          </div>
        </div>
      </div> 
    </div>
</template>

<script>
export default {
  name: 'Avatari',
  mounted() {
    // Add animation classes after component is mounted
    setTimeout(() => {
      document.querySelectorAll('.content-text').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 200);
      });
    }, 500);
  }
}
</script>

<style scoped>
/* Base styles */
.get-to-know-me {
  position: relative;
  z-index: 1;
}

/* Title animations */
.main-title {
  position: relative;
  color: #2c3e50;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
}

.title-appear-enter-active {
  animation: titleAppear 1s ease-out;
}

@keyframes titleAppear {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Floating element animation */
.floating-element {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
  }
}

/* Image styles and animations */
.image-wrapper {
  position: relative;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 90%;
  height: 90%;
  object-fit: contain;
  transition: all 0.5s ease;
  padding: 10px;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

.image-wrapper:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
  transform: translateY(-5px);
}

.image-appear-enter-active {
  animation: imageAppear 1.2s ease-out;
}

@keyframes imageAppear {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Content section styles */
.content-section {
  position: relative;
  padding: 20px;
  border-radius: 8px;
  background: linear-gradient(to right, rgba(255,255,255,0.1) 0%, transparent 100%);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
}

.content-section:hover {
  background: linear-gradient(to right, rgba(255,255,255,0.2) 0%, transparent 100%);
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transform: translateY(-5px);
}

/* Text animations */
.content-text {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 8px;
  border-radius: 4px;
}

.content-text.visible {
  opacity: 1;
  transform: translateY(0);
}

.content-text:hover {
  background: linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 100%);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transform: translateY(-2px);
}

/* Section block styles */
.section-block {
  position: relative;
  padding: 20px;
  border-radius: 8px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(to right, rgba(255,255,255,0.05) 0%, transparent 100%);
  transform: translateY(0);
}

.section-block:hover {
  background: linear-gradient(to right, rgba(255,255,255,0.1) 0%, transparent 100%);
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transform: translateY(-5px);
}

.section-title {
  position: relative;
  color: #2c3e50;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
}

.section-title:hover {
  color: #1a202c;
  text-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .content-section {
    padding: 10px;
  }
  
  .section-block {
    padding: 15px;
  }
}
</style>