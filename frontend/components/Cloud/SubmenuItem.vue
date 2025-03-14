<template>
    <div class="submenu-container" ref="submenuContainer" data-aos="fade-up">
        <div class="submenu-title" @click="toggleSubmenu">
            <div class="flex items-center flex-1">
                <slot name="title">عنوان منو</slot>
            </div>
            <span class="submenu-icon" :class="{ 'rotated': isOpen }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </span>
        </div>
        <div class="submenu-content-wrapper rounded-t-lg" :class="{ 'open': isOpen }">
            <div class="submenu-content">
                <slot name="content">محتوای منو</slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubmenuItem',
    props: {
        initialOpen: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isOpen: this.initialOpen
        }
    },
    mounted() {
        document.addEventListener('click', this.handleOutsideClick);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleOutsideClick);
    },
    methods: {
        toggleSubmenu() {
            this.isOpen = !this.isOpen;
            this.$emit('toggle', this.isOpen);
        },
        handleOutsideClick(event) {
            if (this.isOpen && this.$refs.submenuContainer && !this.$refs.submenuContainer.contains(event.target)) {
                this.isOpen = false;
                this.$emit('toggle', false);
            }
        }
    }
}
</script>                               

<style scoped>
.submenu-container {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 8px;
    position: relative;
}

.submenu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 10px;
    background-color: #acd0ea;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.3s ease;
    border-radius: 8px;
}

.submenu-title:hover {
    background-color: #c1ddf2;
}

.submenu-icon {
    transition: transform 0.6s ease;
    margin-right: 4px;
}

.submenu-icon.rotated {
    transform: rotate(180deg);
}

.submenu-content-wrapper {
    max-height: 0;
    transition: max-height 0.6s ease;
}

.submenu-content-wrapper.open {
    max-height: 2000px;

}

.submenu-content {
    padding: 10px;
    background-color: #cde4f7;
    border-top: none;
    border-radius: 0 0 8px 8px;
    margin-top: -1px;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.submenu-content-wrapper.open .submenu-content {
    opacity: 1;
    transform: translateY(0);
}

/* استایل‌های responsive */
@media (min-width: 640px) {
    .submenu-title {
        padding: 16px 12px;
    }
    
    .submenu-content {
        padding: 12px;
    }
    
    .submenu-container {
        margin-bottom: 10px;
    }
}

@media (min-width: 768px) {
    .submenu-title {
        padding: 20px 16px;
    }
    
    .submenu-content {
        padding: 16px;
    }
    
    .submenu-container {
        margin-bottom: 12px;
    }
}

@media (min-width: 1024px) {
    .submenu-title {
        padding: 24px 20px;
    }
    
    .submenu-content {
        padding: 20px;
    }
}
</style> 