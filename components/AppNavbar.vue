<script setup>
  import debounce from "lodash.debounce";


  const config = useRuntimeConfig()
  // const { data: products } = await useFetch(`${ config.public.baseURL }c/neues/`) /// for debug styles

  const search = ref('')
  const products = ref([])

  const debouncedHandler = debounce(async query => {
    const { data: prods }  = await useFetch(`${ config.public.baseURL }c/search/`, {
      method: 'POST',
      body: {
        name: search
      }
    })

    products.value = ( await prods.value )

  }, 300);

  watch(search, (searchRequest) => {
    debouncedHandler()
  })


</script>


<template>
  <div class="container">
    <div class="mx-auto my-4 px-4 lg:max-w-7xl lg:px-8">

      <div class="grid grid-cols-2 gap-2">
        

        
        <div class="w-full">
          <div class="relative w-full group">
            <div class="flex absolute inset-y-0 left-0 items-center  pointer-events-none">
              <p class="mdi mdi-24px mdi-store-search px-3 text-gray-600 dark:text-gray-300"></p>
            </div>
            <input v-model="search" type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-gray-300 focus:border-gray-300 block w-full pl-14 p-1.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 ring-0 dark:focus:ring-gray-600 dark:focus:border-gray-600" placeholder="Поиск по товарам">
          
            <div v-if="search.length > 1" class="absolute z-30 w-full invisible group-hover:visible ease-in-out transition-opacity duration-100 opacity-0 group-hover:opacity-100">
              <div class="bg-white/90 dark:bg-gray-700/80 border border-gray-100 dark:border-gray-600 backdrop-blur-md rounded-sm my-1 min-h-[80px]">
                
                <div class="px-2 h-96 overflow-y-auto my-2">

                  <div v-if="search.length > 3 && products.length === 0" class="">
                    <p class="">Ничего не найдено</p>
                  </div>

                  <div v-if="search.length === 0" class="">
                    <p class="">Введите запрос</p>
                  </div>

                  <transition-group name="fade">
                    <div class="px-2 py-2 my-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 hover:border-gray-300 dark:border-gray-500 hover:dark:border-gray-400 rounded-md transition-all" v-for="product in products" :key="product.id">
                      <nuxt-link :to="{ name: 'product-id', params: { id: product.id }}" class="">
                        <div class="flex gap-4">
                          <div class="">
                            <img class="bg-white w-20 p-1 rounded-md" :src="product.preview_image" />
                          </div>
                          <div class="">
                            <p class="text-sm">{{ product.name }}</p>
                            <p v-if="product.only_price > 0" class="">{{ product.only_price.toLocaleString() }} <span class="text-xs">руб.</span></p>
                            <p v-else class="text-xs">Стоимость по запросу</p>
                          </div>
                        </div>
                      </nuxt-link>
                    </div>
                  </transition-group>

                </div>
                
              </div>
              
            </div>
          
          
          </div> 
        </div>



        <div class="flex items-center gap-2 ">
          <nuxt-link :to="{ name: 'index' }" class="bg-white dark:bg-gray-800 h-full w-full flex items-center  border dark:border-gray-600 rounded-sm">
            <div class="flex items-center gap-1">
              <span class="px-2 mdi mdi-star border-r border-gray-700"></span>
              <p class="text-sm "> Избранное</p>
            </div>
          </nuxt-link>

          <nuxt-link :to="{ name: 'compare' }" class="bg-white dark:bg-gray-800 h-full w-full flex items-center border dark:border-gray-600 rounded-sm">
            <div class="flex items-center gap-1">
              <span class="px-2 mdi mdi-align-horizontal-right border-r border-gray-700"></span>
              <p class="text-sm "> Сравнение</p>
            </div>
          </nuxt-link>

          <nuxt-link :to="{ name: 'cart' }" class="bg-white dark:bg-gray-800 h-full w-full flex items-center border dark:border-gray-600 rounded-sm">
            <div class="flex items-center gap-1">
              <span class="px-2 mdi mdi mdi-cart border-r border-gray-700"></span>
              <p class="text-sm "> Корзина</p>
            </div>
          </nuxt-link>

          <nuxt-link :to="{ name: 'about' }" class="bg-white dark:bg-gray-800 h-full w-full flex items-center border dark:border-gray-600 rounded-sm">
            <div class="flex items-center gap-1">
              <span class="px-2 mdi mdi-store-marker border-r border-gray-700"></span>
              <p class="text-sm "> Магазины</p>
            </div>
          </nuxt-link>
        </div>


      </div>
    </div>
  </div>
</template>