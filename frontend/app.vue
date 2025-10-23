<template>
  <div class="relative z-0 bg" dir="rtl">
    <NuxtLoadingIndicator color="#22c55e" :height="3" throttle="100" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  mounted() {
    // Set direction to RTL for both document and HTML element
    document.documentElement.dir = 'rtl';
    document.body.dir = 'rtl';
    
    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
          .then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          })
          .catch(function(error) {
            console.log('ServiceWorker registration failed: ', error);
          });
      });
    }
  },
  beforeDestroy() {
    // Clean up on component destruction (though unlikely in this root app component)
    document.documentElement.dir = 'rtl';
    document.body.dir = 'rtl';
  }
}
</script>

<style>
html, body {
  direction: rtl;
}
</style>