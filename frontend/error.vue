<template>
<div class="">
    <div v-if="error.statusCode === 404" class="">
        <div class="flex justify-center">
            <img class="w-110 h-100" src="/assets/svg/404.svg" alt="404">
        </div>
        <div class="text-center">
            <span class="relative bottom-12">!صفحه مورد نظر پیدا نشد</span>
        </div>
    </div>
    <div v-else>
        <Nuxt />
    </div>
</div>
</template>

<script lang="ts">

export default defineComponent({
props: {
    error: {
    type: Object,
    default: () => ({ statusCode: 500 })
    }
}
});
</script>

<style>
</style>
