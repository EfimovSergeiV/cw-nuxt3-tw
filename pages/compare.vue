<script setup>

  const productsStore = useProductsStore()


  const getPropValue = (props, name) => {
    let value = null
    props.forEach((el) => {
      if (el.name === name) {
        value = el.value
      }
    })
    return value
  }


</script>

<template>
  <div class="container mx-auto my-4 px-4 lg:max-w-7xl lg:px-8">



    <div class="">
      <transition name="fade" mode="out-in">
        <div id="comp-data" v-if="productsStore.comp.length > 0" class="">

          <div class="">


            <transition-group tag="div" name="left-emergence" class="grid grid-cols-2 lg:grid-cols-4 gap-4">

              
              <div v-for="product in productsStore.comp.slice(0, 4)" :key="product.id" class="">
                <ProductSmall :product="product" />

                <!-- <div class="bg-white border-gray-200 border rounded-sm dark:border-gray-700 dark:bg-gray-800 h-full">

                  <div class="">

                    <div class="bg-white flex items-center justify-center m-1 rounded-sm relative">
                      <div class="">
                        <img :src="product.preview_image" />
                      </div>
                      <div class="absolute top-0 right-0">
                        <div class="cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-700 hover:dark:text-gray-900">
                          <p @click="delToComparison(product)" class="mdi mdi-24px mdi-window-close"></p>
                        </div>
                      </div>
                      
                    </div>

                    <div class="flex items-center justify-center h-28">
                      <nuxt-link :to="{ name: 'product-id', params: { id: product.id } }" class="text-sm text-center">{{ product.name }}</nuxt-link>
                    </div>

                    <div class="flex items-center justify-center gap-2 px-2">
                      <div class="my-2">
                        <button @click="requestPriceProduct(product)" v-if="product.only_price === 0" class="">
                          <div class=" text-sm text-gray-100 rounded-lg bg-blue-600 hover:bg-blue-700 border border-gray-300/50 dark:border-gray-500/50 transition-all duration-1000">
                            <div class=" bg-gradient-to-br from-gray-100/20 to-gray-900/40 rounded-lg">
                              <p class="text-white text-base w-32 md:w-52 py-2.5">Запросить</p>
                            </div>
                          </div>
                        </button>
                        <CartBtn v-else cls="px-10 py-1.5" :product="product" />
                      </div>
                    </div>
                    
                  </div>


                </div> -->

              </div>
            </transition-group>
          </div>


          <!-- <div class="grid grid-cols-2 lg:grid-cols-4">
            <div v-for="prod in productsStore.comp.slice(0, 4)" :key="prod.id" class="my-4">

              <div class="flex gap-2 justify-center items-center">
                <div v-if="prod.only_price > 0" class="flex items-center justify-center gap-2">
                  <p class="text-xl">{{ prod.only_price.toLocaleString() }}</p>
                  <p class="">руб.</p>
                </div>
                <div v-else class="">
                  <p class="text-sm">стоимость по запросу</p>
                </div>
              </div>
            </div>
          </div> -->


          <div class="bg-white rounded-sm dark:bg-gray-800 border border-gray-700 my-4">
            <div class="px-2 py-4 bg-gray-700 border-b border-gray-600">
              <p class="text-base">Сравнение характеристик:</p>
            </div>

            <div v-for="prop in productsStore.comp[0].propstrmodel" :key="prop.id" class="group dark:hover:bg-gray-700 duration-500 transition-all py-2">


              <div class="border-b border-gray-200 dark:border-gray-700 dark:group-hover:border-gray-600 transition-all">
                <p class="text-sm dark:text-gray-400 font-semibold px-4 py-1">{{ prop.name }}</p>
              </div>

              <div class="grid grid-cols-2 lg:grid-cols-4 items-center gap-4">
                <div v-for="product in productsStore.comp.slice(0, 4)" :key="product.id">
                  <div class="px-4 my-2">
                    <div v-if="getPropValue(product.propstrmodel, prop.name)">
                      <p class="text-sm dark:text-gray-100">{{ getPropValue(product.propstrmodel, prop.name) }}</p>
                    </div>
                    <div v-else>
                      <p class="text-sm dark:text-gray-100 mdi mdi-minus"></p>
                    </div>
                  </div>
                  
                </div>            
              </div>

            </div>
          </div>



        </div>

        <div id="comp-leer" v-else class="">
          <div class="flex gap-4 items-center justify-center h-full my-20 md:my-40">

            <div class="flex items-center gap-8">
              <div class="grid gap-2 grid-cols-1">
                <div class="mx-4 text-center">
                  <p class="text-2xl">У вас нет товаров для сравнения</p>
                </div>
                <div class="border-b border-gray-700 dark:border-gray-300"></div>
                <div class="mx-4 text-center">
                  <nuxt-link :to="{ name: 'cts' }" class="text-sm hover:underline hover:text-gray-900 dark:hover:text-gray-100 ">Перейти в каталог</nuxt-link>
                </div>
              </div>
              <div>
                <p class="mdi mdi-close-outline text-3xl md:text-6xl"></p>
              </div>
            </div>

          </div>  
        </div>

      </transition>


    </div>



    <!-- <p class="text-xs">
      {{ productsStore.comp }}
    </p> -->


    
  </div>
</template>