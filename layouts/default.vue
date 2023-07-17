<script setup>
import { onMounted } from 'vue'

const config = useRuntimeConfig()
const shopStore = useShopStore()
const route = useRoute()

const { data: shops } = await useFetch(`${ config.public.baseURL }c/shops/`)
const { data: cts } = await useFetch(`${ config.public.baseURL }c/ct/`)

shopStore.writeShops(shops)

onMounted(() => {
  if ("geolocation" in navigator) {
    /* местоположение доступно */
    navigator.geolocation.getCurrentPosition(position => {
      let location = {
        "latitude": position.coords.latitude, 
        "longitude": position.coords.longitude 
      }

      shopStore.sendCoordinates(location)

      // this.sendCoordinates(location)
    });
  } else {
    /* местоположение НЕ доступно */
  }

})

</script>

<template>
  <div class="bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300">
    <div id="background-page" class="bg-fixed bg-no-repeat bg-[center_100px] bg-cover bg-[url('images/footer-bg.webp')] dark:bg-[url('images/footer-dark-bg.webp')] min-h-screen">
      <div class="container mx-auto">
        <AppHeader />



        <div class="">
          <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
            
            
            <div class="flex justify-between gap-4 relative">
              
              <div class="w-full grid grid-cols-1 bg-white dark:bg-gray-800 rounded-sm border-t border-gray-100 dark:border-gray-700">

                <!-- <div class="flex items-center justify-center px-4">
                  <nuxt-link :to="{ name: 'index'}" class="">
                    <img
                      class=" w-full select-none"
                      width=""
                      src="/images/blue-svar.webp"
                    />      
                  </nuxt-link>                  
                </div>

                <div class=" rounded-lg bg-gray-800 hover:bg-gray-900 border border-gray-300/50 dark:border-gray-500/50 transition-all duration-1000 mx-4 my-2">
                  <div class="w-full h-full bg-gradient-to-br from-gray-100/20 to-gray-900/40 rounded-lg flex items-center justify-center">
                    <nuxt-link :to="{ name: 'cts' }" class=" ">
                      <div class="">
                        <p class="mdi mdi-book-open-page-variant font-sans font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600  uppercase select-none"> Перейти в католог</p>
                      </div>
                    </nuxt-link>
                  </div>
                </div> -->

                <div class=" h-full">
                  <div class="">


                    <div class="flex items-center justify-center px-4">
                      <nuxt-link :to="{ name: 'index'}" class="">
                        <img
                          class=" w-full select-none"
                          width=""
                          src="/images/blue-svar.webp"
                        />      
                      </nuxt-link>                  
                    </div>

                    <div class="flex gap-4 items-center justify-end px-4 my-1">
                      <button class="">
                        <p class="text-xl">Санкт-Петербург</p>
                      </button>
                    </div>
                    <div class="my-2">
                      <div class="flex items-center justify-end px-4">
                        <p class="text-sm">+7 (8112) 60 60 05</p>
                      </div>
                      <div class="flex items-center justify-end px-4">
                        <p class="text-sm">zakaz@glsvar.ru</p>
                      </div>
                    </div>

                  </div>                  
                </div>



                <div class="bg-gray-200 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-500 group ">
                  
                  <nuxt-link :to="{ name: 'cts' }" class="flex items-center justify-center h-full w-full">
                    <div class="">
                      <p class="text-lg">Открыть каталог</p>
                    </div>
                  </nuxt-link> 

                  <div v-if=" route.path !== '/cts'" class="py-1 absolute w-full z-40 invisible group-hover:visible ease-in-out transition-opacity duration-100 opacity-0 group-hover:opacity-100">
                    <div class="bg-white/90 dark:bg-gray-700/90 border border-gray-100 dark:border-gray-600 backdrop-blur-md rounded-b-2xl">
                      
                      <div class="px-2 py-2">
                        
                        <div class="columns-3 lg:columns-4">
                          <div v-for="ct in cts" :key="ct.id" class="break-inside-avoid-column">
                            <div class="">


                              <div class="py-2 ">
                                
                                <div class="bg-gray-100/90 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-500 rounded-md py-4 px-2">
                                  <div class="">
                                    <nuxt-link :to="{ name: 'prods', query: { ct: ct.id } }" class=" text-gray-700 dark:text-gray-100 text-base transition-all">{{ ct.name }}</nuxt-link>              
                                  </div>

                                  <div>
                                    <ul>
                                      <li v-for="sct in ct.inserted" :key="sct.id" class="inline-block ">
                                        <nuxt-link :to="{ name: 'prods', query: { ct: sct.id } }" class="text-gray-700 mr-3 text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all">{{ sct.name }}</nuxt-link>
                                      </li>
                                    </ul>
                                  </div>                                  
                                </div>





                              </div>


                            </div>
                          </div>
                        </div>
                        
                      </div>

                      
                    </div>  
                  </div>

                </div>

              </div>


              <div class="lg:w-[700px] xl:w-[800px]">
                <TopSlider />
              </div>
            </div>
            


          </div>
        </div>

        
        <AppNavbar />
        <slot />
        <AppFooter />
      </div>
    </div>
  </div>
</template>