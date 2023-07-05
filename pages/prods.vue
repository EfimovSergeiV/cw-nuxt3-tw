<script setup>
  const config = useRuntimeConfig()
  const productsStore = useProductsStore()
  const notificationsStore = useNotificationsStore()
  const route = useRoute()
  const router = useRouter()

  const { data: brands } = await useFetch(`${ config.public.baseURL }c/ctbrand/`, { params: route.query })
  const { data: props } = await useFetch(`${ config.public.baseURL }c/props/`, { params: route.query })


  const { data: products } = await useFetch(`${ config.public.baseURL }c/prods/`, { params: route.query })
  const { data: breadcrumbs } = await useFetch(`${ config.public.baseURL }c/breadcrumb/`, { params: route.query })

  /// Корзина кнопки, лайки, сравнение

  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  watch(() => route.fullPath, async (fullPath) => {
      const { data: prods }  = await useFetch(`${ config.public.baseURL }c/prods/`, { params: route.query })
      const { data: crumbs } = await useFetch(`${ config.public.baseURL }c/breadcrumb/`, { params: route.query })
      products.value = ( await prods.value )
      breadcrumbs.value = ( await crumbs.value )
      scrollToTop()
    }
  )

  // const ct_id = ref(1)
  // const page_id = ref(1)

  // const { data: products, pending, error } = await useAsyncData(() => {
  //   return $fetch(`${ config.public.baseURL }c/prods/`, { params: { ct: ct_id.value, page: page_id.value } })
  // // return $fetch(`${ config.public.baseURL }c/prods/`, { params: route.query })
  // }, {
  //   watch: [ct_id, page_id ]
  // })

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


    <div class="mx-auto px-4 my-4 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 md:flex items-center justify-between">

        <div class="flex items-center gap-0.5 justify-center md:justify-end my-4">
          <button class="px-4 h-8 text-sm flex items-center justify-center text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="notificationsStore.statusFilterComponent">Фильтр</button>
          <button class="px-4 h-8 text-sm flex items-center justify-center text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="notificationsStore.statusFilterComponent">Новые</button>
          <button class="px-4 h-8 text-sm flex items-center justify-center text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="notificationsStore.statusFilterComponent">Рейтинг</button>
          <button class="px-4 h-8 text-sm flex items-center justify-center text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="notificationsStore.statusFilterComponent">Дешевле</button>
          <button class="px-4 h-8 text-sm flex items-center justify-center text-gray-500 bg-white rounded-r-sm border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="notificationsStore.statusFilterComponent">Дороже</button>
        </div>

        <Pagination :count="products.count" />
      </div>

    </div>


    <transition name="filter">
      <div v-if="notificationsStore.filterComponent" class="fixed z-40 top-0 left-0">
        <Filters :brands="brands" :props="props" />
      </div>
    </transition>

   
    <div id="products" class="">
      <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

        <div class="">
          <div class="grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            
            <transition-group name="fade">
              <div class="" v-for="product in products.results" :key="product.id">
                <ProductCard :product="product" />
              </div>
            </transition-group>

          </div>
        </div>

      </div>
    </div>





    

    <div class="mx-auto px-4 my-4 lg:max-w-7xl lg:px-8">
      <div class="flex items-center justify-end">
        <Pagination :count="products.count" />
      </div>
    </div>

  </div>
</template>