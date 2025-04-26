<template>
    <!-- Cloud Service Models Section -->
<div class="cloud-services-section mt-10 mb-22 px-4 md:px-8 lg:px-16" data-aos="fade-up">
    <h2 class="text-3xl text-center text-purple-950 mb-12">مدل‌های سرویس ابری</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div class="service-card">
            <h3 class="service-title">SaaS</h3>
            <p class="service-description">نرم‌افزار به عنوان سرویس - ارائه نرم‌افزارهای کاربردی از طریق اینترنت</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">FaaS</h3>
            <p class="service-description">فرانت‌اند به عنوان سرویس - ارائه خدمات توسعه و میزبانی فرانت‌اند</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">BaaS</h3>
            <p class="service-description">بک‌اند به عنوان سرویس - ارائه خدمات توسعه و میزبانی بک‌اند</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">PaaS</h3>
            <p class="service-description">پلتفرم به عنوان سرویس - ارائه محیط توسعه و اجرای برنامه‌ها</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">AaaS</h3>
            <p class="service-description">هوش مصنوعی به عنوان سرویس - ارائه خدمات هوش مصنوعی و یادگیری ماشین</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">WaaS</h3>
            <p class="service-description">وب به عنوان سرویس - ارائه خدمات میزبانی و مدیریت وب</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">CaaS</h3>
            <p class="service-description">ابر به عنوان سرویس - ارائه خدمات زیرساخت ابری</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">ITaaS</h3>
            <p class="service-description">فناوری اطلاعات به عنوان سرویس - ارائه خدمات مدیریت IT</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">KaaS</h3>
            <p class="service-description">کوبرنتیز به عنوان سرویس - ارائه خدمات مدیریت کانتینر</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">CIaaS</h3>
            <p class="service-description">CI/CD به عنوان سرویس - ارائه خدمات یکپارچه‌سازی و تحویل مداوم</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">EaaS</h3>
            <p class="service-description">اج به عنوان سرویس - ارائه خدمات محاسبات لبه</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">LaaS</h3>
            <p class="service-description">ثبت رویداد به عنوان سرویس - ارائه خدمات مدیریت لاگ</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">MaaS</h3>
            <p class="service-description">مانیتورینگ به عنوان سرویس - ارائه خدمات نظارت و پایش</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">NaaS</h3>
            <p class="service-description">شبکه به عنوان سرویس - ارائه خدمات زیرساخت شبکه</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">RaaS</h3>
            <p class="service-description">ربات به عنوان سرویس - ارائه خدمات اتوماسیون و رباتیک</p>
        </div>
        <div class="service-card">
            <h3 class="service-title">XaaS</h3>
            <p class="service-description">هر چیزی به عنوان سرویس - ارائه هر نوع سرویس قابل تصور</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'AS'
}
</script>

<style scoped>
.cloud-services-section {
    direction: rtl;
}

.service-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 1.5rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
}

.service-card:nth-child(1) { animation-delay: 0.1s; }
.service-card:nth-child(2) { animation-delay: 0.2s; }
.service-card:nth-child(3) { animation-delay: 0.3s; }
.service-card:nth-child(4) { animation-delay: 0.4s; }
.service-card:nth-child(5) { animation-delay: 0.5s; }
.service-card:nth-child(6) { animation-delay: 0.6s; }
.service-card:nth-child(7) { animation-delay: 0.7s; }
.service-card:nth-child(8) { animation-delay: 0.8s; }
.service-card:nth-child(9) { animation-delay: 0.9s; }
.service-card:nth-child(10) { animation-delay: 1s; }
.service-card:nth-child(11) { animation-delay: 1.1s; }
.service-card:nth-child(12) { animation-delay: 1.2s; }
.service-card:nth-child(13) { animation-delay: 1.3s; }
.service-card:nth-child(14) { animation-delay: 1.4s; }
.service-card:nth-child(15) { animation-delay: 1.5s; }
.service-card:nth-child(16) { animation-delay: 1.6s; }

.service-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
}

.service-title {
    color: #4B0082;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
    position: relative;
    display: inline-block;
}

.service-title::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #4B0082, #8A2BE2);
    transition: width 0.3s ease;
}

.service-card:hover .service-title::after {
    width: 100%;
}

.service-description {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
    transition: color 0.3s ease;
}

.service-card:hover .service-description {
    color: #4B0082;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .service-card {
        padding: 1rem;
    }
    
    .service-title {
        font-size: 1.25rem;
    }
    
    .service-description {
        font-size: 0.85rem;
    }
}
</style>
