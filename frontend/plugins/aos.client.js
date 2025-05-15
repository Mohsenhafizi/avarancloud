// AOS (Animate On Scroll) plugin with optimizations for TBT
export default defineNuxtPlugin((nuxtApp) => {
  // Only load AOS after the initial page render to improve TBT
  let aosInitialized = false;
  
  // Function to dynamically import and initialize AOS
  const initAOS = async () => {
    if (aosInitialized) return;
    
    try {
      // Dynamic import for AOS to reduce TBT
      const AOS = await import('aos');
      const aosCSS = await import('aos/dist/aos.css');
      
      // Initialize with optimized settings for performance
      AOS.default.init({
        // Optimize animations
        duration: 800,
        easing: 'ease-in-out',
        once: true, // Only animate elements once
        mirror: false, // Whether elements should animate out while scrolling down
        disable: false, // Never disable (disable function will run when needed)
        startEvent: 'DOMContentLoaded', // Name of the event dispatched on the document that AOS should initialize on
        offset: 120, // Offset (in px) from the original trigger point
        delay: 0, // Only start animations after page is fully loaded
        useClassNames: false, // If true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // Disables automatic mutations' detections
        throttleDelay: 99, // The delay on throttle for detecting scroll events
        debounceDelay: 50, // The delay on debounce for detecting scroll events
        
        // Custom disable function to prevent animations on low-end devices
        disable: function() {
          // Check if we're on a slow device
          const isLowEndDevice = 
            // Check for slow connection
            (navigator.connection && 
             (navigator.connection.saveData === true || 
              (navigator.connection.effectiveType && navigator.connection.effectiveType.includes('2g')))) ||
            // Check for reduced motion preference
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
          return isLowEndDevice;
        }
      });
      
      aosInitialized = true;
    } catch (error) {
      console.error('Error initializing AOS:', error);
    }
  };
  
  // Wait until after page has loaded critical content
  if (process.client) {
    // Only run after page load to reduce TBT
    if (document.readyState === 'complete') {
      // Request idle callback to minimize TBT impact
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => initAOS(), { timeout: 2000 });
      } else {
        setTimeout(initAOS, 1000);
      }
    } else {
      window.addEventListener('load', () => {
        // Request idle callback to minimize TBT impact
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => initAOS(), { timeout: 2000 });
        } else {
          setTimeout(initAOS, 1000);
        }
      });
    }
    
    // Add refresh method to the instance
    nuxtApp.provide('refreshAOS', () => {
      if (!aosInitialized) {
        initAOS();
      } else {
        import('aos').then(module => {
          module.default.refresh();
        });
      }
    });
  }
}); 