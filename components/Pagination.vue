<script setup>
  const props = defineProps(['count'])
  const route = useRoute()


  onMounted(() => {
    console.log('mounted pagination')
  })
  // const pages = ref(Array.from({length: Math.ceil(props.count/36)}, (v, k) => k + 1))
  const pages = computed(() => Array.from({length: Math.ceil(props.count/36)}, (v, k) => k + 1))


</script>



<template>
  <div class="">
    
    <p class="text-xs">{{ props.count }}/ {{ pages }}</p>

    <ul class="flex gap-4">
      <li v-for="(page, pk) in pages" :key="pk">
        <nuxt-link :to="{ name: 'prods', query: { ...route.query, page: page }}">{{ page }}</nuxt-link>
      </li>
    </ul>

  </div>
</template>