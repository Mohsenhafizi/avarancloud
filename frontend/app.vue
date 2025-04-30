<template>
  <div class="relative z-0 bg" dir="rtl">
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