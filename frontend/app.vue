<template>
  <div class="font">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>

</script>

<style>
@font-face{ 
  font-family: "font";
  src: url("../frontend/assets/font/font.woff2");
  src: url("../frontend/assets/font/font.woff2") format("woff2"),
  url("../frontend/assets/font/font.woff2") format("opentype"),
}

.font {
  font-family: 'font', Arial, sans-serif;
  font-weight:normal;
}
</style>