<template>
    <div class="mx-auto relative top-14 md:-top-6 pb-10 px-4">
        <div class="text-center text-purple-950 py-10 lg:pt-20 text-3xl md:text-5xl font-bold mx-4" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
            خدمات طراحی سایت:
        </div>
        <div class="flex justify-end flex-col md:flex-row mb-10 lg:mr-30 lg:ml-70" data-aos="fade-up">
            <div class="flex flex-col md:flex-row lg:py-14 lg:px-12 py-8 px-4 backdrop-blur-sm shadow-2xl rounded-xl">
                <div class="flex justify-center md:order-2 md:ml-4 mb-4 md:mb-0">
                    <img src="../../assets/svg/shop.svg" class="w-30 lg:w-60" alt="طراحی سایت با طراحی سایت ابرآوران">
                </div>
                <div class="md:order-1 px-8 pt-7">
                    <h3 class="text-lg lg:text-2xl text-right font-bold mb-6 text-purple-800">وب‌سایت اختصاصی و برندمحور</h3>
                    <p class="text-base text-right md:text-lg text-gray-700">
                        اگر کسب‌وکارت نیاز به ویژگی‌های خاص دارد یا قالب‌های آماده جوابگو نیستند، ما یک سایت کاملاً سفارشی از صفر طراحی می‌کنیم، با ظاهر لوکس و قابلیت توسعه در آینده.
                    </p>
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row mb-10 lg:ml-30 lg:mr-70 justify-start" data-aos="fade-up">
            <div class="flex flex-col md:flex-row lg:px-12 lg:py-12 px-8 py-8 backdrop-blur-sm shadow-2xl rounded-lg">
                <div class="pr-8 pt-7 pl-4 md:order-1">
                    <h3 class="text-lg lg:text-2xl text-right font-bold mb-6 text-purple-800">فروشگاه آنلاین پیشرفته</h3>
                    <p class="text-base text-right md:text-lg text-gray-700">
                        نه فقط فروشگاه، بلکه یک پلتفرم فروش کامل. سیستم مدیریت کالا، درگاه پرداخت امن، ابزار گزارش‌گیری، فیلتر پیشرفته و سبد خرید حرفه‌ای، همه به‌صورت سفارشی و کاملاً پایدار طراحی می‌شوند.
                    </p>
                </div>
                <div class="flex justify-center mt-2 md:mb-0">
                    <img src="../../assets/svg/zerotoone.svg" class="w-28 lg:w-50" alt="طراحی وب سایت حرفه‌ای با طراحی سایت">
                </div>
            </div>
        </div>

        <div class="flex justify-end flex-col md:flex-row mb-10 lg:mr-30 lg:ml-70" data-aos="fade-up">
            <div class="flex flex-col md:flex-row lg:px-12 lg:py-14 px-8 py-8 backdrop-blur-sm shadow-2xl rounded-lg">
            <div class="relative bottom-4 flex justify-center md:order-2">
                <img src="../../assets/svg/companion.svg" class="w-32 lg:w-70 2xl:w-70" alt="پشتیبانی طراحی سایت ابرآوران">
            </div>
                <div class="px-8 pt-7 md:order-1">
                    <h3 class="text-lg lg:text-2xl text-right font-bold mb-6 text-purple-800">طراحی سایت شرکتی</h3>
                    <p class="text-base text-right md:text-lg text-gray-700">
                        اینجا فقط معرفی شرکت نیست؛ سایت شما یک ابزار واقعی کسب‌وکار است. صفحات با طراحی اختصاصی، تجربه کاربری حرفه‌ای و معماری دقیق ساخته می‌شوند تا اعتماد مخاطب فوراً جلب شود و برندتان در ذهن ماندگار شود.
                    </p>
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row mb-10 lg:ml-30 lg:mr-70 justify-start" data-aos="fade-up">
            <div class="flex flex-col md:flex-row lg:px-12 lg:py-16 px-8 py-8 backdrop-blur-sm shadow-2xl rounded-lg">
                <div class="pr-8 md:order-1">
                    <h3 class="text-lg lg:text-2xl text-right font-bold mb-6 text-purple-800">سیستم‌های پیشرفته و امکانات سفارشی</h3>
                    <p class="text-base text-right md:text-lg text-gray-700">
                        هر قابلیت خاصی که نیاز دارید: رزرو آنلاین، فرم‌های حرفه‌ای، داشبورد مدیریتی، اتصال API یا سیستم‌های داخلی _ همه با استاندارد بالا و طراحی اختصاصی توسعه داده می‌شوند.
                    </p>
                </div>
                <div class="flex justify-center mt-4 md:mt-0">
                    <img src="../../assets/svg/services.svg" class="w-40 lg:w-70" alt="خدمات طراحی سایت ابرآوران">
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


