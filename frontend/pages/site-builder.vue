<template>
    <div class="min-h-screen overflow-x-hidden">
        <SiteHeader />
        <div id="features">
          <SiteFeatures />
        </div>
        <div id="tozihat">
          <SiteTozihat />
        </div>
        <div id="packages">
          <SitePackages />
        </div>
        <div id="submenu">
          <SiteSubmenu />
        </div>
        <SiteFooter />
        <EndFooter />
    </div>
</template>

<script lang="ts">
import SiteHeader from '~/components/Site/header.vue';
import SiteTozihat from '~/components/Site/tozihat.vue';
import SitePackages from '~/components/Site/packages.vue';
import SiteSubmenu from '~/components/Site/submenu.vue';
import SiteFeatures from '~/components/Site/features.vue';
import SiteFooter from '~/components/Site/footer.vue';
import EndFooter from '~/components/End/footer.vue';
import NavBarNavDesktop from '~/components/NavBar/NavDesktop.vue';
import NavBarNavMobile from '~/components/NavBar/NavMobile.vue';

export default {
  components: {
    SiteHeader,
    SiteTozihat,
    SitePackages,
    SiteSubmenu,
    SiteFeatures,
    SiteFooter,
    EndFooter,
    NavBarNavDesktop,
    NavBarNavMobile
  },
}
</script>

<style scoped>

</style>