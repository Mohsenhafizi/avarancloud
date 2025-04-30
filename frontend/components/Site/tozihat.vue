<template>
    <div class="mx-auto relative top-14 md:-top-6 pb-10 px-4">

        <div class="flex justify-end flex-col md:flex-row mb-10 lg:mr-30 lg:ml-70" data-aos="fade-up">
            <div class="flex flex-col md:flex-row lg:py-14 lg:px-12 py-8 px-4 backdrop-blur-sm shadow-2xl rounded-xl">
                <div class="flex justify-center md:order-2 md:ml-4 mb-4 md:mb-0">
                    <img src="../../assets/svg/shop.svg" class="w-40" alt="ساخت سایت فروشگاهی بدون ریسک مالی">
                </div>
                <div class="md:order-1 px-8 pt-7">
                    <h2 class="text-lg lg:text-2xl text-right font-bold mb-6 text-purple-800">ساخت سایت حرفه‌ای، بدون هزینه‌ی اولیه</h2>
                    <p class="text-base text-right md:text-lg text-gray-700">
                        ساخت سایت با ابرآوران بدون هزینه اولیه است تا بتوانید بدون ریسک مالی، سایت خود را بسازید و از امکانات حرفه‌ای آن بهره‌مند شوید.
                    </p>
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row mb-10 lg:ml-30 lg:mr-70 justify-start" data-aos="fade-up">
            <div class="flex flex-col md:flex-row lg:px-12 lg:py-12 px-8 py-8 backdrop-blur-sm shadow-2xl rounded-lg">
                <div class="pr-8 pt-7 pl-4 md:order-1">
                    <h2 class="text-lg lg:text-2xl text-right font-bold mb-6 text-purple-800">صفر تا ۱۰۰ ساخت سایت با ابرآوران</h2>
                    <p class="text-base text-right md:text-lg text-gray-700">
                        با سایت‌ساز ابرآوران، یک سایت کامل با دامنه، هاست نامحدود، طراحی ریسپانسیو، بهینه‌سازی SEO و هر پیش‌نیاز دیگری که نیاز دارید، می‌سازید و از پشتیبانی اختصاصی ابرآوران بهره‌مند می‌شوید.
                    </p>
                </div>
                <div class="flex justify-center mt-2 md:mb-0">
                    <img src="../../assets/svg/zerotoone.svg" class="w-30 md:w-50" alt="صفر تا صد ساخت سایت">
                </div>
            </div>
        </div>

        <div class="flex justify-end flex-col md:flex-row mb-10 lg:mr-30 lg:ml-70" data-aos="fade-up">
            <div class="flex flex-col md:flex-row lg:px-12 lg:py-14 px-8 py-8 backdrop-blur-sm shadow-2xl rounded-lg">
            <div class="relative bottom-4 flex justify-center md:order-2">
                <img src="../../assets/svg/companion.svg" class="w-34 md:w-60 2xl:w-40" alt="ساخت سایت با همراهی آن">
            </div>
                <div class="px-8 pt-7 md:order-1">
                    <h2 class="text-lg lg:text-2xl text-right font-bold mb-6 text-purple-800">پشتیبانی کامل بعد از ساخت سایت</h2>
                    <p class="text-base text-right md:text-lg text-gray-700">
                        بعد از ساخت سایت با ابرآوران، با راهکارهای بهینه‌سازی و نگهداری سایت، هوای کسب‌وکار شما را داریم. با بسته‌های مکمل ابرآوران، موفقیت سایت شما تضمین شده است.
                    </p>
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row mb-10 lg:ml-30 lg:mr-70 justify-start" data-aos="fade-up">
            <div class="flex flex-col md:flex-row lg:px-12 lg:py-16 px-8 py-8 backdrop-blur-sm shadow-2xl rounded-lg">
                <div class="pr-8 md:order-1">
                    <h2 class="text-lg lg:text-2xl text-right font-bold mb-6 text-purple-800">انعطاف‌پذیری در انتخاب خدمات</h2>
                    <p class="text-base text-right md:text-lg text-gray-700">
                        ابرآوران با پکیج‌های مختلف ساخت سایت و انواع بسته‌های تکمیلی برای بهینه‌سازی و نگهداری سایت، هر نیازی که کسب‌وکار شما دارد را پاسخ می‌دهد. شما فقط بگویید چه می‌خواهید، بقیه با ابرآوران!
                    </p>
                </div>
                <div class="flex justify-center mt-4 md:mt-0">
                    <img src="../../assets/svg/services.svg" class="w-40 md:w-80" alt="انواع خدمات ابرآوران">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StoreTovihat'
}
</script>

<style scoped>
/* استایل‌های اضافی برای بهبود نمایش */
@media (min-width: 768px) {
    .justify-end .backdrop-blur-sm {
        margin-left: auto;
        max-width: 90%;
    }
    
    .justify-start .backdrop-blur-sm {
        margin-right: auto;
        max-width: 90%;
    }
}

/* انیمیشن‌های بهینه شده */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}

/* اعمال انیمیشن‌ها به المان‌ها */
.backdrop-blur-sm {
    animation: fadeIn 0.5s ease-out;
}

.backdrop-blur-sm img {
    animation: fadeIn 0.5s ease-out;
}

.backdrop-blur-sm h2 {
    animation: slideUp 0.5s ease-out;
}

.backdrop-blur-sm p {
    animation: slideUp 0.5s ease-out;
}

/* انیمیشن hover برای باکس‌ها */
.backdrop-blur-sm {
    transition: transform 0.3s ease;
}

.backdrop-blur-sm:hover {
    transform: translateY(-3px);
}

/* انیمیشن hover برای تصاویر */
.backdrop-blur-sm img {
    transition: transform 0.3s ease;
}

.backdrop-blur-sm:hover img {
    transform: scale(1.02);
}
</style>


