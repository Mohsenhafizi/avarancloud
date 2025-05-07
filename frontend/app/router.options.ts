import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // If the user is navigating back in history, restore their previous scroll position
    if (savedPosition) {
      return savedPosition
    }
    
    // If the navigation includes a hash, scroll to that element with an offset for the fixed header
    if (to.hash) {
      // Add a delay to ensure the page is fully rendered
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash)
          if (el) {
            // Get header height dynamically
            const header = document.querySelector('header')
            // Use a larger default offset if header can't be found
            const headerOffset = header ? header.clientHeight + 20 : 120
            
            resolve({
              el: to.hash,
              top: headerOffset,
              behavior: 'smooth'
            })
          } else {
            // If element not found, scroll to the top of the page
            resolve({ top: 0, behavior: 'smooth' })
          }
        }, 300)
      })
    }
    
    // Otherwise, scroll to the top of the page
    return { top: 0, behavior: 'smooth' }
  }
} 