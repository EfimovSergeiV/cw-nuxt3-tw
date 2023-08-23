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

      <div class="grid grid-cols-2 gap-4">
        

        
        <div class="w-full">
          <div class="relative w-full group">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <p class="mdi mdi-24px mdi-magnify"></p>
            </div>
            <input v-model="search" type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-gray-300 focus:border-gray-300 block w-full pl-14 p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 ring-0 dark:focus:ring-gray-600 dark:focus:border-gray-600" placeholder="Поиск по товарам">
          
            <div v-if="search.length > 1" class="absolute z-30 w-full invisible group-hover:visible ease-in-out transition-opacity duration-100 opacity-0 group-hover:opacity-100">
              <div class="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-sm my-1 min-h-[80px]">
                
                <div class="px-2 h-96 overflow-y-auto my-2">

                  <div v-if="search.length > 3 && products.length === 0" class="">
                    <p class="">Ничего не найдено</p>
                  </div>

                  <div v-if="search.length === 0" class="">
                    <p class="">Введите запрос</p>
                  </div>

                  <transition-group name="fade">
                    <div class="px-2 py-2 my-1 bg-gray-100 dark:bg-gray-800/80 border border-gray-200 hover:border-gray-300 dark:border-gray-500 hover:dark:border-gray-400 rounded-md transition-all" v-for="product in products" :key="product.id">
                      <nuxt-link :to="{ name: 'product-id', params: { id: product.id }}" class="">
                        <div class="flex gap-4">
                          <div class="">
                            <img class="bg-white w-20 p-1 rounded-md" :src="product.preview_image" />
                          </div>
                          <div class="">
                            <p class="">{{ product.name }}</p>
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
          <nuxt-link :to="{ name: 'index' }" class="dark:bg-gray-800 h-full w-full flex items-center justify-center border dark:border-gray-600 rounded-lg">
            <div class="">
              <p class="flex items-center gap-1 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 border-b border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-gray-900  md:dark:hover:bg-transparent dark:border-gray-700 transition-all mdi mdi-star text-sm"> Избранное</p>
            </div>
          </nuxt-link>

          <nuxt-link :to="{ name: 'index' }" class="dark:bg-gray-800 h-full w-full flex items-center justify-center border dark:border-gray-600 rounded-lg">
            <div class="">
              <p class="flex items-center gap-1 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 border-b border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-gray-900  md:dark:hover:bg-transparent dark:border-gray-700 transition-all mdi mdi-align-horizontal-right text-sm"> Сравнение</p>
            </div>
          </nuxt-link>

          <nuxt-link :to="{ name: 'cart' }" class="dark:bg-gray-800 h-full w-full flex items-center justify-center border dark:border-gray-600 rounded-lg">
            <div class="">
              <p class="flex items-center gap-1 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 border-b border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-gray-900  md:dark:hover:bg-transparent dark:border-gray-700 transition-all mdi mdi mdi-cart text-sm"> Корзина</p>
            </div>
          </nuxt-link>

          <nuxt-link :to="{ name: 'about' }" class="dark:bg-gray-800 h-full w-full flex items-center justify-center border dark:border-gray-600 rounded-lg">
            <div class="">
              <p class="flex items-center gap-1 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 border-b border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-gray-900  md:dark:hover:bg-transparent dark:border-gray-700 transition-all mdi mdi-store-marker text-sm"> Магазины</p>
            </div>
          </nuxt-link>
        </div>



        <!-- <nav class="">
          <div class="">
            <div class="grid justify-items-end mx-auto max-w-screen-xl ">
              <div id="mega-menu-full" class="">
                <ul class="flex  bg-gray-700">
                  <li class="w-28  ">
                    <nuxt-link :to="{ name: 'index' }" class=" block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 border-b border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-gray-900  md:dark:hover:bg-transparent dark:border-gray-700 mdi mdi-home text-base" aria-current="page"> Избранное</nuxt-link>
                  </li>
                  <li class="w-28 ">
                    <nuxt-link :to="{ name: 'index' }" class=" block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 border-b border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-gray-900  md:dark:hover:bg-transparent dark:border-gray-700 mdi mdi-home text-base" aria-current="page"> Сравнение</nuxt-link>
                  </li>
                  <li class="relative w-28">
                    <nuxt-link :to="{ name: 'cart' }" class="block border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 mdi mdi-cart text-base"> Корзина</nuxt-link>
                  </li>
                  <li class="w-28">
                    <nuxt-link :to="{ name: 'about' }" class="block border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 mdi mdi-store-marker text-base"> Магазины</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </nav> -->



      </div>




    </div>
  </div>
</template>