<template>
  <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="مسیر راهنما">
    <ol 
      class="inline-flex items-center space-x-1 space-x-reverse md:space-x-3 md:space-x-reverse rtl"
      itemscope itemtype="https://schema.org/BreadcrumbList"
    >
      <li 
        class="inline-flex items-center"
        itemprop="itemListElement" 
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <NuxtLink 
          to="/" 
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-white"
          itemprop="item"
        >
          <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>
          <span itemprop="name">خانه</span>
          <meta itemprop="position" content="1" />
        </NuxtLink>
      </li>
      <li v-for="(item, index) in items" :key="index"
        itemprop="itemListElement" 
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <div class="flex items-center">
          <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
          <NuxtLink 
            v-if="!item.active" 
            :to="item.path" 
            class="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
            itemprop="item"
          >
            <span itemprop="name">{{ item.name }}</span>
            <meta itemprop="position" :content="index + 2" />
          </NuxtLink>
          <span 
            v-else 
            class="ml-1 text-sm font-medium text-emerald-500 md:ml-2 dark:text-emerald-400"
            itemprop="item"
          >
            <span itemprop="name">{{ item.name }}</span>
            <meta itemprop="position" :content="index + 2" />
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadcrumbComponent',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.rtl {
  direction: rtl;
}
</style> 