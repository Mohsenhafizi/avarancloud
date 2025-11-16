// Router guard to prevent routing to static assets
export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) return

  // Static asset patterns that should not be routed
  const staticAssetPatterns = [
    /^\/_nuxt\//,
    /^\/assets\//,
    /^\/icons\//,
    /^\/svg\//,
    /^\/public\//,
    /\.(woff2?|png|jpg|jpeg|gif|svg|webp|avif|ico|css|js|json|xml|txt|map)$/i
  ]

  // Check if a path is a static asset
  function isStaticAsset(path: string): boolean {
    return staticAssetPatterns.some(pattern => pattern.test(path))
  }

  // Suppress Vue Router warnings for static assets
  const originalPush = nuxtApp.$router.push
  const originalReplace = nuxtApp.$router.replace

  // Override push to skip static assets
  nuxtApp.$router.push = function(to: any) {
    if (typeof to === 'string' && isStaticAsset(to)) {
      // Silently ignore static asset paths
      return Promise.resolve()
    }
    if (typeof to === 'object' && to.path && isStaticAsset(to.path)) {
      return Promise.resolve()
    }
    return originalPush.call(this, to)
  }

  // Override replace to skip static assets
  nuxtApp.$router.replace = function(to: any) {
    if (typeof to === 'string' && isStaticAsset(to)) {
      return Promise.resolve()
    }
    if (typeof to === 'object' && to.path && isStaticAsset(to.path)) {
      return Promise.resolve()
    }
    return originalReplace.call(this, to)
  }

  // Add a global before guard to prevent routing to static assets
  nuxtApp.$router.beforeEach((to, from, next) => {
    // Skip routing for static assets - let the browser handle them normally
    if (isStaticAsset(to.path)) {
      // Prevent Vue Router from handling this route
      // Return false to cancel the navigation
      return false
    }
    next()
  })
})

