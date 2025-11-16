// Suppress Vue Router warnings for static assets
// These warnings are harmless but can clutter the console
// MUST run with 'pre' enforce to catch warnings before they're logged
export default defineNuxtPlugin({
  name: 'suppress-router-warnings',
  enforce: 'pre', // Run BEFORE router initialization
  setup() {
    if (process.server) return

    // Store original console.warn IMMEDIATELY
    const originalWarn = console.warn

    // Override console.warn to filter out Vue Router warnings for static assets
    // This must happen before Vue Router starts logging
    console.warn = function(...args: any[]) {
      const message = args[0]?.toString() || ''
      
      // Filter out ALL Vue Router warnings for static assets
      if (
        message.includes('[Vue Router warn]') &&
        (
          message.includes('No match found for location') ||
          message.includes('/_nuxt/') ||
          message.includes('/assets/') ||
          message.includes('/icons/') ||
          message.includes('/svg/') ||
          message.includes('font.woff2') ||
          message.includes('mobile-screen.png') ||
          message.includes('icon-144x144.png') ||
          message.includes('.png') ||
          message.includes('.jpg') ||
          message.includes('.jpeg') ||
          message.includes('.gif') ||
          message.includes('.svg') ||
          message.includes('.webp') ||
          message.includes('.woff') ||
          message.includes('.css') ||
          message.includes('.js')
        )
      ) {
        // Silently ignore these warnings - they're expected for static assets
        return
      }
      
      // Call original warn for other messages
      originalWarn.apply(console, args)
    }
  }
})

