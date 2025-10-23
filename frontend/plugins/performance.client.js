// Performance optimization plugin
export default defineNuxtPlugin({
  name: 'performance-plugin',
  enforce: 'pre', // Run before other plugins
  async setup() {
    // Only run in browser
    if (process.server) return;

    // Measure and report LCP
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        console.log('LCP:', lastEntry.startTime / 1000, 'seconds');
        
        // Report to analytics if needed
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'web-vitals',
            metric: 'LCP',
            value: Math.round(lastEntry.startTime),
          });
        }
      });
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      
      // Measure TBT using PerformanceObserver for long tasks
      const tbtObserver = new PerformanceObserver((entryList) => {
        let totalBlockingTime = 0;
        const FID_THRESHOLD = 50; // Threshold in ms beyond which a task is considered blocking
        
        entryList.getEntries().forEach(entry => {
          // Calculate blocking time (anything over 50ms is considered blocking)
          const blockingTime = entry.duration - FID_THRESHOLD;
          if (blockingTime > 0) {
            totalBlockingTime += blockingTime;
          }
        });
        
        console.log('Estimated TBT:', totalBlockingTime, 'ms');
        
        // Report to analytics if needed
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'web-vitals',
            metric: 'TBT',
            value: Math.round(totalBlockingTime),
          });
        }
      });
      
      // Start observing long tasks
      tbtObserver.observe({ type: 'longtask', buffered: true });
    }

    // Prioritize LCP image loading
    const prioritizeLCP = () => {
      // Find potential LCP elements
      const heroImages = document.querySelectorAll('img[src*="mobile-screen"], img[src*="sample-screen"], img[src*="abravaran-logo"]');
      
      heroImages.forEach(img => {
        if (img.loading !== 'eager') {
          img.loading = 'eager'; // Force eager loading
        }
        
        if (!img.fetchPriority) {
          img.fetchPriority = 'high'; // Set high fetch priority
        }
        
        // Add decoding async
        img.decoding = 'async';
      });
    };

    // Execute on page load
    if (document.readyState === 'complete') {
      prioritizeLCP();
    } else {
      window.addEventListener('load', prioritizeLCP);
    }

    // Prefetch critical resources
    const prefetchCriticalResources = () => {
      const resourceUrls = [
        '/assets/photos/mobile-screen.png',
        '/assets/photos/sample-screen.png',
        '/assets/photos/sample-screen2.png',
        '/svg/vector-7.svg'
      ];

      resourceUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        link.as = url.endsWith('.svg') ? 'image' : 'image';
        link.type = url.endsWith('.svg') ? 'image/svg+xml' : 'image/png';
        document.head.appendChild(link);
      });
    };

    // Execute when browser is idle
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(prefetchCriticalResources);
    } else {
      setTimeout(prefetchCriticalResources, 1000);
    }
    
    // Break up long tasks to improve TBT
    const breakUpLongTasks = () => {
      // Find and optimize heavy event listeners
      const optimizeEventListeners = () => {
        // Use passive event listeners for scroll, touch events
        const passiveEvents = ['scroll', 'touchstart', 'touchmove', 'wheel'];
        
        passiveEvents.forEach(eventType => {
          // Monkey patch addEventListener to make events passive by default for these types
          const originalAddEventListener = EventTarget.prototype.addEventListener;
          EventTarget.prototype.addEventListener = function(type, listener, options) {
            if (passiveEvents.includes(type)) {
              options = options || {};
              options = typeof options === 'object' 
                ? Object.assign({}, options, { passive: true }) 
                : { passive: true };
            }
            return originalAddEventListener.call(this, type, listener, options);
          };
        });
      };
      
      // Debounce frequent event callbacks
      window.debounce = (fn, delay) => {
        let timer;
        return function(...args) {
          clearTimeout(timer);
          timer = setTimeout(() => fn.apply(this, args), delay);
        };
      };
      
      // Throttle scroll/resize handlers
      window.throttle = (fn, delay) => {
        let lastCall = 0;
        return function(...args) {
          const now = new Date().getTime();
          if (now - lastCall < delay) return;
          lastCall = now;
          return fn.apply(this, args);
        };
      };
      
      optimizeEventListeners();
    };
    
    // Wait until after critical rendering before running
    if (document.readyState === 'complete') {
      setTimeout(breakUpLongTasks, 1000);
    } else {
      window.addEventListener('load', () => setTimeout(breakUpLongTasks, 1000));
    }
  }
}); 