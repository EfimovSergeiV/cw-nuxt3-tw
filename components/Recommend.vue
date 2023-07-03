<script setup>
  const productsStore = useProductsStore()
  const config = useRuntimeConfig()

  const { data: recommends, pending, error} = await useFetch(`${ config.public.baseURL }c/recommend/`)

</script>

<template>
  <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
    <div class="my-4 p-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-sm">
      <p class="text-gray-700 dark:text-gray-300 my-4 uppercase">Главный Cварщик рекомендует</p>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="product in recommends" :key="product.id" class="">
          <ProductSmall :product="product" />
        </div>
      </div>      
    </div>
  </div>
</template>