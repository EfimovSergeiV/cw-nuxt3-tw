<script setup>
  import { onMounted } from 'vue'

  const config = useRuntimeConfig()
  const shopStore = useShopStore()
  const route = useRoute()
  const colorMode = useColorMode()

  const productsStore = useProductsStore()
  const notificationsStore = useNotificationsStore()

  const { signIn, signOut, token, data, status, lastRefreshedAt } = useAuth()
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
  <div class="">


    <transition name="fade" mode="in-out">
      <CartModal v-if="productsStore.cartAlert" />
    </transition>
    <transition name="fade" mode="in-out">
      <RequestPrice v-if="productsStore.requestPrice" />
    </transition>
    

    <div class="bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300">
      <div id="background-page" class="bg-fixed bg-no-repeat bg-[center_100px] bg-cover bg-[url('images/footer-bg.webp')] dark:bg-[url('images/footer-dark-bg.webp')] min-h-screen">
        <div class="container mx-auto">
          <AppHeader />
          <div class="">
            <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
              
              
              <div class="flex gap-4 justify-between relative">


                <div class="w-full grid grid-cols-1 content-between">

                  <div class="flex items-center justify-center -mt-4">
                    <nuxt-link :to="{ name: 'index'}" class="">
                      <img
                        class=" select-none"
                        width=""
                        src="/images/blue-svar.webp"
                      />      
                    </nuxt-link>                  
                  </div>

                  <div class="">
                    <div class="grid grid-cols-2 gap-x-1 gap-y-1">
                      <div class="py-1 px-1 cursor-pointer bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-600 rounded-sm transition-all duration-500">
                        <div class="flex items-center justify-center">
                          <p class="text-sm px-2 mdi mdi-map-marker-radius"> Санкт-Петербург</p>
                        </div>
                      </div>
                      <div id="color-mode">
                        <button v-if="$colorMode.preference === 'system'" @click="$colorMode.preference = 'dark'" class="bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-600 rounded-sm transition-all duration-500 w-full h-full flex items-center justify-center">
                          <p class="text-sm mdi mdi-laptop"> Авто режим</p>
                        </button>
                        <button v-if="$colorMode.preference === 'dark'" @click="$colorMode.preference = 'light'" class="bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-600 rounded-sm transition-all duration-500 w-full h-full flex items-center justify-center">
                          <p class="text-sm mdi mdi-weather-night"> Ночной режим</p>
                        </button>
                        <button v-if="$colorMode.preference === 'light'" @click="$colorMode.preference = 'system'" class="bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-600 rounded-sm transition-all duration-500 w-full h-full flex items-center justify-center">
                          <p class="text-sm mdi mdi-white-balance-sunny"> Дневной режим</p>
                        </button>
                      </div>

                      <div class="py-1 px-1 cursor-pointer bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-600 rounded-sm transition-all duration-500">
                        <div class="flex items-center justify-center">
                          <p class="text-sm px-2 mdi mdi-account hidden"> Личный кабинет</p>
                          <p class="text-sm px-2 mdi mdi-account-plus"> Регистрация</p>
                        </div>
                      </div>
                      <div class="flex items-center justify-center w-full h-full">
                        <nuxt-link v-if="status === 'unauthenticated'" :to="{ name: 'login' }" class="bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-600 rounded-sm transition-all duration-500 w-full h-full flex items-center justify-center">
                          <p class="text-sm mdi mdi-login-variant">
                            Войти
                          </p>
                        </nuxt-link>
                        <button v-else @click="signOut()" class="bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-600 rounded-sm transition-all duration-500 w-full h-full flex items-center justify-center">
                          <p class="text-sm mdi mdi-login-variant">
                            Выйти
                          </p>
                        </button>
                      </div>

                    </div>
                  </div>


                  <div class="">
                    <div class="group">
                    
                      <div class="py-1 px-1 group cursor-pointer h-full bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-600 rounded-sm transition-all">
                        <nuxt-link :to="{ name: 'cts' }">
                          <div class="mdi mdi-24px mdi-menu flex items-center justify-center">
                            <p class="text-lg px-2 "> Открыть каталог</p>
                          </div>                        
                        </nuxt-link>
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
                                        <nuxt-link :to="{ name: 'prods', query: { ct: ct.id }, hash: '#breadcrumbs' }" class=" text-gray-700 dark:text-gray-100 text-base transition-all">{{ ct.name }}</nuxt-link>              
                                      </div>

                                      <div>
                                        <ul>
                                          <li v-for="sct in ct.inserted" :key="sct.id" class="inline-block ">
                                            <nuxt-link :to="{ name: 'prods', query: { ct: sct.id }, hash: '#breadcrumbs' }" class="text-gray-700 mr-3 text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all">{{ sct.name }}</nuxt-link>
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

      

      <div class="absolute">
        <div class="relative">
          <div class="fixed bottom-60 md:bottom-48 right-20 hover:right-24 transition-all duration-500">
            <div class="relative">
              <div class="absolute z-50">
                <div class="-rotate-90 bg-blue-700 px-4 pb-12 group rounded-md w-44 cursor-pointer">
                  <div class="flex items-center justify-center group-hover:text-gray-100 text-gray-300 font-bold transition-all duration-500">
                    <div class="">
                      <p class="text-sm mx-2">Напишите нам</p>
                    </div>
                    <div class="rotate-90">
                      <p class="mdi mdi-24px mdi-message-text-outline"></p>
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
</template>