<script setup>
  const config = useRuntimeConfig()
  const productsStore = useProductsStore()
  const props = defineProps(['products'])
  const route = useRoute()
  const router = useRouter()


  const { data: products } = await useFetch(`${ config.public.baseURL }c/prods/`, { params: route.query })
  const { data: breadcrumbs } = await useFetch(`${ config.public.baseURL }c/breadcrumb/`, { params: route.query })

  /// Корзина кнопки, лайки, сравнение

  const refreshing = ref(false)
  const refreshAll = async () => {
    refreshing.value = true
    try {
      await refreshNuxtData()
    } finally {
      refreshing.value = false
    }
  }

  watch(() => route.fullPath, async (fullPath) => {

      const { data: res, pending, error }  = await useFetch(`${ config.public.baseURL }c/prods/`, {params: route.query,})
      const { data: crumbs } = await useFetch(`${ config.public.baseURL }c/breadcrumb/`, { params: route.query })

      products.value = ( await res.value )
      breadcrumbs.value = ( await crumbs.value )

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

      <button :disabled="refreshing" @click="refreshAll">
        Refetch All Data ({{ refreshing }})
      </button>

      <p v-if="pending">Fetching...</p>

      <div class="">
        <ul class="flex gap-4">
          <li v-for="i in 10" :key="i">
            <nuxt-link :to="{ name: 'prods', query: { ct: 1, page: i}}">{{ i }}</nuxt-link>
          </li>
        </ul>
      </div>


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

    <div id="products" class="">
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


    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8 my-4">

      <ul class="flex gap-4">
        <li v-for="i in 10" :key="i">
          <nuxt-link :to="{ name: 'prods', query: { ct: 1, page: i}}">{{ i }}</nuxt-link>
        </li>
      </ul>

    </div>


  </div>
</template>



<!-- <template>
  <div>
    

    <button @click="previous()" >Previous</button>
    <button @click="next()">Next</button>

    {{ page }}

    {{  cafes }}


    <button @click="previous()" >Previous</button>
    <button @click="next()">Next</button>

  </div>
</template>
<script setup>

const page = ref(1);

const { data: cafes, error } = await useAsyncData(
  'cafes',
  () => $fetch( `c/prods/`, {
    method: 'GET',
    baseURL: 'http://127.0.0.1:8000/',
    params: {
      ct: 1 ,
      page: page.value,
    }
  } ), {
    watch: [
      page,
    ]
  }
);

const previous = () => {
  if( page.value != 1 ){
    page.value = page.value -1 ;
  }
}

const next = () => {

    page.value = page.value + 1;

}
</script> -->