<template>
  <div class="relative z-0 bg">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>

</script>

<style>
.bg {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background: radial-gradient(
    125% 125% at -2% 101%,
    rgba(245, 87, 2, 1) 10.5%,
    rgba(245, 120, 2, 1) 16%,
    rgba(245, 140, 2, 1) 17.5%,
    rgba(245, 170, 100, 1) 25%,
    rgba(238, 174, 202, 1) 40%,
    rgba(202, 179, 214, 1) 65%,
    rgba(148, 201, 233, 1) 100%
  );
}

@media (max-width: 768px) {
  .bg {
    min-height: 100vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    width: 100%;
  }
}
</style>