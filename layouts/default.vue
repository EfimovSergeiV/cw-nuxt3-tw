<script setup>
import { onMounted } from 'vue'

const config = useRuntimeConfig()
const shopStore = useShopStore()
const route = useRoute()
const colorMode = useColorMode()

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
            
            
            <div class="flex gap-4 justify-between relative">
              
              <!-- <div class="w-full grid grid-cols-1 ">

                <div class="h-full">
                  <div class="">

                    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      <div class="flex gap-4 items-center justify-end px-4 py-2">
                        <button class="">
                          <p class="text-lg px-2 mdi mdi-map-marker-radius"> Санкт-Петербург</p>
                        </button>
                      </div>
                    </div>


                    <div class="flex gap-4 py-4 px-4">

                    </div>


                  </div>                  
                </div>



                <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  
                  <div class="flex gap-4 items-center">
                    <div class="py-2 px-4">
                      <div v-if="$colorMode.preference === 'system'" @click="$colorMode.preference = 'dark'" class="cursor-pointer w-8 h-8 bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-full flex items-center justify-center transition-all">
                        <p class="text-base mdi mdi-laptop"></p>
                      </div>
                      <div v-if="$colorMode.preference === 'dark'" @click="$colorMode.preference = 'light'" class="cursor-pointer w-8 h-8 bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-full flex items-center justify-center transition-all">
                        <p class="text-base mdi mdi-weather-night"></p>
                      </div> 
                      <div v-if="$colorMode.preference === 'light'" @click="$colorMode.preference = 'system'" class="cursor-pointer w-8 h-8 bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-full flex items-center justify-center transition-all">
                        <p class="text-base mdi mdi-white-balance-sunny"></p>
                      </div> 
                    </div>

                    <div class="flex items-center justify-center transition-all duration-600 gap-2 bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 px-2 h-8 rounded-full">
                      <nuxt-link :to="{ name: 'person' }" class="mdi mdi-account px-2 text-sm cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> Войти</nuxt-link>
                    </div>
                  </div>


                </div>



                <div class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-500 group ">
                  
                  <nuxt-link :to="{ name: 'cts' }" class="flex items-center justify-center h-full w-full">
                    <div class="">
                      <p class="text-base font-semibold uppercase mdi mdi-menu"> Открыть каталог</p>
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

              </div> -->

              


              <div class="lg:w-[700px] xl:w-[800px]">
                <TopSlider />
              </div>

              <div class=" w-full grid grid-cols-1 content-between">
                <div class="">
                  <div class="grid grid-cols-2 gap-4 ">
                    <div class="py-4 px-1 cursor-pointer bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-md transition-all duration-500">
                      <div class="flex items-center justify-center">
                        <p class="text-sm px-2 mdi mdi-theme-light-dark"> Ночной режим</p>                        
                      </div>
                    </div>
                    <div class="py-4 px-1 cursor-pointer bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-md transition-all duration-500">
                      <div class="flex items-center justify-center">
                        <p class="text-sm px-2 mdi mdi-map-marker-radius"> Санкт-Петербург</p>
                      </div>
                    </div>
                    <div class="py-4 px-1 cursor-pointer bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-md transition-all duration-500">
                      <div class="flex items-center justify-center">
                        <p class="text-sm px-2 mdi mdi-account"> Личный кабинет</p>
                        <p class="text-sm px-2 mdi mdi-map-marker-radius hidden"> Регистрация</p>
                      </div>
                    </div>
                    <div class="py-4 px-1 cursor-pointer bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-md transition-all duration-500">
                      <div class="flex items-center justify-center">
                        <p class="text-sm px-2 mdi mdi-login-variant"> Выйти</p>
                        <p class="text-sm px-2 mdi mdi-login-variant hidden"> Войти</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="">
                  <div class="group">
                  
                    <div class="py-4 px-1 group cursor-pointer h-full bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-md transition-all">
                      <div class="mdi mdi-24px mdi-menu flex items-center justify-center">
                        <p class="text-lg px-2 "> Открыть каталог</p>
                      </div>
                    </div>

                    <div v-if=" route.path !== '/cts'" class="py-1 absolute w-full left-0 z-40 invisible group-hover:visible ease-in-out transition-opacity duration-100 opacity-0 group-hover:opacity-100">
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
              </div>

              <!-- <div class="flex h-full w-full items-end">
                <div class="flex-row space-y-4 w-full ">
                  
                  <div class="grid grid-cols-2 gap-4 ">
                    <div class="py-4 px-1 cursor-pointer bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-md transition-all duration-500">
                      <div class="flex items-center justify-center">
                        <p class="text-sm px-2 mdi mdi-theme-light-dark"> Ночной режим</p>                        
                      </div>
                    </div>
                    <div class="py-4 px-1 cursor-pointer bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-md transition-all duration-500">
                      <div class="flex items-center justify-center">
                        <p class="text-sm px-2 mdi mdi-map-marker-radius"> Санкт-Петербург</p>
                      </div>
                    </div>
                    <div class="py-4 px-1 cursor-pointer bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-md transition-all duration-500">
                      <div class="flex items-center justify-center">
                        <p class="text-sm px-2 mdi mdi-account"> Личный кабинет</p>
                        <p class="text-sm px-2 mdi mdi-map-marker-radius hidden"> Регистрация</p>
                      </div>
                    </div>
                    <div class="py-4 px-1 cursor-pointer bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-md transition-all duration-500">
                      <div class="flex items-center justify-center">
                        <p class="text-sm px-2 mdi mdi-login-variant"> Выйти</p>
                        <p class="text-sm px-2 mdi mdi-login-variant hidden"> Войти</p>
                      </div>
                    </div>
                  </div>

                  <div class="group">
                  
                    <div class="py-4 px-1 group cursor-pointer h-full bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-md transition-all">
                      <div class="mdi mdi-24px mdi-menu flex items-center justify-center">
                        <p class="text-lg px-2 "> Открыть каталог</p>
                      </div>
                    </div>

                    <div v-if=" route.path !== '/cts'" class="py-1 absolute w-full left-0 z-40 invisible group-hover:visible ease-in-out transition-opacity duration-100 opacity-0 group-hover:opacity-100">
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
              </div> -->



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