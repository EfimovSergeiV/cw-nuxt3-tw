<script setup>
  const config = useRuntimeConfig()
  const productsStore = useProductsStore()
  const props = defineProps(['products'])
  const route = useRoute()
  console.log(route.query)

  const { data: products } = await useFetch(`${ config.public.baseURL }c/prods/`, {params: route.query,})

/// Корзина кнопки, лайки, сравнение
</script>



<template>
  <div>


    <div class="">
      <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">

        <p class="text-xs">cart: {{ productsStore.cart }}</p>
        <p class="text-xs">comp: {{ productsStore.comp }}</p>
        <p class="text-xs">comp: {{ productsStore.like }}</p>

        <div class="">
          <div class="grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            <div class="" v-for="product in products.results" :key="product.id">

              <ProductCard :product="product" />
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>