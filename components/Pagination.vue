<script setup>
  const props = defineProps(['count'])
  const route = useRoute()

  const current = computed(() => route.query.page || 1 )
  const pages = computed(() => {
    console.log(Number(current.value) + 3)
    if (current.value < 7) {
      return Array.from({length: Math.ceil(props.count/36)}, (v, k) => k + 1).slice(0, 7)
    } else {
      return Array.from({length: Math.ceil(props.count/36)}, (v, k) => k + 1).slice(Number(current.value) - 4, Number(current.value) + 3)
    }
    
  })


</script>



<template>
  <div v-if="pages.length > 1" class="">
    
    <p class="text-xs">{{ current }}</p>
    <p class="text-xs">{{ pages }}</p>

    <ul class="flex gap-0.5">
      <li>
        <nuxt-link :to="{ name: 'prods', query: {...route.query, page: 1 }}" class="py-2 px-3 text-gray-500 bg-white rounded-l-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          &lt;
        </nuxt-link>
      </li>
      <li v-for="(page, pk) in pages" :key="pk">
        <nuxt-link :to="{ name: 'prods', query: { ...route.query, page: page }}">
          <div v-if="Number(current) === Number(page)" class="py-1 px-3 text-gray-800 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{{ page }}</div>
          <div v-else class="py-1 px-3 text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ page }}</div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'prods', query: {...route.query, page: Math.ceil(props.count/36)}}" class="py-2 px-3 text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          &gt;
        </nuxt-link>
      </li>
    </ul>

  </div>
</template>