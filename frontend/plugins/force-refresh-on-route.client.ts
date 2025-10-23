export default defineNuxtPlugin((nuxtApp) => {
  if (!process.client) {
    return;
  }

  const router = nuxtApp.$router;
  let isFirstNavigation = true;

  router.beforeEach((to, _from) => {
    if (isFirstNavigation) {
      isFirstNavigation = false;
      return true;
    }

    const href = router.resolve(to).href;
    window.location.href = href;
    return false;
  });
});


