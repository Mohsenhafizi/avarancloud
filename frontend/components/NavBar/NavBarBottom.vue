<!--
  Bottom Navbar Component for Nuxt.js 3
  بدون نیاز به Tailwind CSS - با Inline Styles
  
  نصب فقط:
  npm install lucide-vue-next
  
  نحوه استفاده:
  <BottomNavbar @item-click="handleNavigation" />
-->

<template>
  <div :style="containerStyle" class="mobile-only">
    <div :style="wrapperStyle">
      <div :style="navbarStyle">
        <!-- Glowing effect -->
        <div :style="glowStyle"></div>
        
        <div :style="contentStyle">
          <div :style="flexContainerStyle">
            <button
              v-for="(item, index) in navItems"
              :key="item.id"
              @click="handleClick(index)"
              :style="buttonStyle"
              @mouseenter="hoveredIndex = index"
              @mouseleave="hoveredIndex = null"
            >
              <!-- Active indicator circle - دایره سبز -->
              <Transition name="circle">
                <div
                  v-if="activeIndex === index"
                  :style="activeCircleStyle"
                  :key="'circle-' + index"
                >
                  <div :style="innerCircleStyle">
                    <component :is="item.icon" :size="24" :stroke-width="2.5" color="#0f172a" />
                  </div>
                  <!-- Pulse effect -->
                  <div :style="pulseStyle" :class="'pulse-animation'"></div>
                </div>
              </Transition>
              
              <!-- Icon for inactive state -->
              <div
                :style="getIconStyle(index)"
              >
                <component :is="item.icon" :size="24" :color="getIconColor(index)" />
              </div>
              
              <!-- Label -->
              <span :style="getLabelStyle(index)">
                {{ item.label }}
              </span>
              
              <!-- Bottom indicator line -->
              <Transition name="line">
                <div
                  v-if="activeIndex === index"
                  :style="bottomLineStyle"
                  :key="'line-' + index"
                ></div>
              </Transition>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 <script setup lang="ts">
 import { ref, watch } from 'vue';
 import { useRoute } from 'vue-router';
import { 
  Home, 
  Wand2, 
  Cloud, 
  Info, 
  MessageCircle 
} from 'lucide-vue-next';

interface NavItem {
  id: string;
  label: string;
  icon: any;
  path?: string;
}

// Props
interface Props {
  defaultActive?: number;
  items?: NavItem[];
}

const props = withDefaults(defineProps<Props>(), {
  defaultActive: 0
});

// Emits
const emit = defineEmits<{
  'item-click': [index: number, item: NavItem];
}>();

// State
const activeIndex = ref(props.defaultActive);
const hoveredIndex = ref<number | null>(null);

// Nav items
const navItems = props.items || [
  { id: 'home', label: 'صفحه اصلی', icon: Home, path: '/' },
  { id: 'site-builder', label: 'سایت ساز', icon: Wand2, path: '/site-builder' },
  { id: 'cloud-builder', label: 'ابرساز', icon: Cloud, path: '/cloud-builder' },
  { id: 'about', label: 'درباره ما', icon: Info, path: '/about-us' },
  { id: 'contact', label: 'ارتباط با ما', icon: MessageCircle, path: '/about-us#contact-us' },
];

// Methods
const handleClick = async (index: number) => {
  activeIndex.value = index;
  emit('item-click', index, navItems[index]);
  
  // مسیریابی خودکار
  if (navItems[index].path) {
    const target = navItems[index].path;
    if (target.includes('#')) {
      const [path, hash] = target.split('#');
      await navigateTo({ path, hash: `#${hash}` });
    } else {
      await navigateTo(target);
    }
  }
};

// Sync active item with current route
const route = useRoute();
const updateActiveFromRoute = () => {
  const currentPath = route.path;
  const currentHash = route.hash;

  // Prefer exact path + hash matches when a hash exists
  if (currentHash) {
    const exactIdx = navItems.findIndex(item => {
      if (!item.path) return false;
      const [itemPath, itemHash] = item.path.split('#');
      return itemPath === currentPath && itemHash && `#${itemHash}` === currentHash;
    });
    if (exactIdx !== -1) {
      activeIndex.value = exactIdx;
      return;
    }
  }

  // Fallback to path-only match (items without a hash)
  const pathIdx = navItems.findIndex(item => {
    if (!item.path) return false;
    const [itemPath, itemHash] = item.path.split('#');
    return itemPath === currentPath && !itemHash;
  });
  if (pathIdx !== -1) {
    activeIndex.value = pathIdx;
  }
};

watch(() => [route.path, route.hash], updateActiveFromRoute, { immediate: true });

// Styles
const containerStyle = {
  position: 'fixed',
  bottom: '0',
  left: '0',
  right: '0',
  zIndex: '50',
  paddingBottom: '0',
  paddingLeft: '0',
  paddingRight: '0',
  direction: 'rtl'
};

const wrapperStyle = {
  width: '100%',
  maxWidth: '100%',
  marginLeft: '0',
  marginRight: '0'
};

const navbarStyle = {
  position: 'relative',
  width: '100%',
  background: 'rgba(15, 23, 42, 0.35)',
  borderRadius: '1.5rem',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  backdropFilter: 'blur(16px) saturate(150%)',
  WebkitBackdropFilter: 'blur(16px) saturate(150%)'
};

const glowStyle = {
  position: 'absolute',
  inset: '-2px',
  background: 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.2))',
  borderRadius: '1.5rem',
  filter: 'blur(16px)',
  opacity: '0.75',
  zIndex: '-1'
};

const contentStyle = {
  position: 'relative',
  padding: '0.75rem 1rem'
};

const flexContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.5rem'
};

const buttonStyle = {
  position: 'relative',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.375rem',
  padding: '0.75rem 0.5rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

const activeCircleStyle = {
  position: 'absolute',
  top: '-2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '4rem',
  height: '4rem',
  background: 'linear-gradient(to bottom right, #60a5fa, #3b82f6)',
  borderRadius: '50%',
  boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
  transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

const innerCircleStyle = {
  position: 'absolute',
  inset: '0.5rem',
  background: 'linear-gradient(to bottom right, #93c5fd, #60a5fa)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const pulseStyle = {
  position: 'absolute',
  inset: '0',
  background: '#60a5fa',
  borderRadius: '50%',
  opacity: '0.5'
};

const bottomLineStyle = {
  position: 'absolute',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '3rem',
  height: '0.25rem',
  background: 'linear-gradient(to right, #60a5fa, #3b82f6)',
  borderRadius: '9999px'
};

const getIconStyle = (index: number) => {
  const isActive = activeIndex.value === index;
  const isHovered = hoveredIndex.value === index;
  
  return {
    transition: 'all 0.3s ease',
    opacity: isActive ? '0' : isHovered ? '1' : '0.7',
    transform: isActive ? 'scale(0.75)' : isHovered ? 'scale(1.1)' : 'scale(1)'
  };
};

const getIconColor = (index: number) => {
  return '#ffffff';
};

const getLabelStyle = (index: number) => {
  const isActive = activeIndex.value === index;
  const isHovered = hoveredIndex.value === index;
  
  return {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    color: isActive ? '#60a5fa' : '#ffffff',
    transform: isActive ? 'scale(1.05)' : 'scale(1)',
    fontWeight: isActive ? '500' : '400'
  };
};

// Expose
defineExpose({
  setActive: (index: number) => {
    activeIndex.value = index;
  },
  getActiveIndex: () => activeIndex.value
});
</script>

<style scoped>
/* Animations */
@keyframes pulse-animation {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

.pulse-animation {
  animation: pulse-animation 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Transitions */
.circle-enter-active,
.circle-leave-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.circle-enter-from {
  transform: translateX(-50%) scale(0);
  opacity: 0;
}

.circle-leave-to {
  transform: translateX(-50%) scale(0);
  opacity: 0;
}

.line-enter-active,
.line-leave-active {
  transition: all 0.3s ease;
}

.line-enter-from {
  transform: translateX(-50%) scaleX(0);
  opacity: 0;
}

.line-leave-to {
  transform: translateX(-50%) scaleX(0);
  opacity: 0;
}

/* Only show on mobile */
@media (min-width: 768px) {
  .mobile-only {
    display: none !important;
  }
}
</style>
