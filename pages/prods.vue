<script setup>
  const config = useRuntimeConfig()
  const productsStore = useProductsStore()
  const props = defineProps(['products'])
  const route = useRoute()

  const { data: products } = await useFetch(`${ config.public.baseURL }c/prods/`, {params: route.query,})
  const { data: breadcrumbs } = await useFetch(`${ config.public.baseURL }c/breadcrumb/`, {params: route.query,})

  // const breadcrumbs = await $axios.$get(`c/breadcrumb/?ct=${product.category.id}`)
  // const breadcrumbs = await $axios.$get(`c/breadcrumb/`, { params: query })
  /// Корзина кнопки, лайки, сравнение
</script>



<template>
  <div>
    <AppNavbar />

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8 mb-4">
      <div class="">
        <div id="cat-title" class="flex items-center justify-end mb-2">
          <p class="text-2xl">{{ products.meta.title }}</p>
        </div>
 
        <div v-if="products.meta.inserted" class="flex items-center justify-end">
          <div id="" class="">
            <div class="flex flex-wrap gap-2 justify-end max-w-[700px]">
              <div v-for="inserted in products.meta.inserted" :key="inserted.id" class="">
                <div class="bg-white dark:bg-gray-800 rounded-xl border hover:border-gray-300 dark:border-gray-700 border-gray-200 hover:dark:border-gray-600 transition-all shadow-md">
                  
                  <div class="flex items-center justify-center py-1 px-4">
                    <nuxt-link :to="{ name: 'prods', query: { ct: inserted.id}}" class="text-[10px] md:text-xs">{{ inserted.name }}</nuxt-link>
                  </div>
                
                </div>
              </div>          
            </div>
          </div>
        </div>

      </div>
    </div>

    <BreadCrumbs :breadcrumbs="breadcrumbs" />

    <div class="">
      <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">

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