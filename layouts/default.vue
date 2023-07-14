<script setup>
import { onMounted } from 'vue'

const config = useRuntimeConfig()
const shopStore = useShopStore()

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
              
              <div class="w-full grid grid-cols-1 rounded-sm bg-gray-800">

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

                <div class="border-t border-l border-r border-gray-100 dark:border-gray-700 h-full">
                  <div class="py-1">

                    <div class="flex gap-4 items-center justify-end px-4 -mb-2">
                      <button class="">
                        <p class="">Санкт-Петербург</p>
                      </button>
                    </div>

                    <div class="flex items-center justify-center px-4">

                      <nuxt-link :to="{ name: 'index'}" class="">
                        <img
                          class=" w-full select-none"
                          width=""
                          src="/images/blue-svar.webp"
                        />      
                      </nuxt-link>                  
                    </div>

                    <div class="mt-1">
                      <div class="flex items-center justify-end px-4">
                        <p class="text-xl">+7 (8112) 60 60 05</p>
                      </div>

                      <div class="flex items-center justify-end px-4">
                        <p class="text-sm">zakaz@glsvar.ru</p>
                      </div>
                    </div>

                  </div>                  
                </div>



                <div class="bg-gray-600 border-t border-gray-400 ">
                  
                  <button class="flex items-center justify-center h-full w-full">
                    <div class="">
                      <p class="text-lg">Открыть каталог</p>
                    </div>
                  </button> 


                  <div class="absolute w-full z-40 hi dden">
                    <div class="bg-gray-600 ">
                      
                      <div class="">
                        
                        <div v-for="i in 15" :key="i">
                          <p>akslkdkjsdlakj</p>
                        </div>
                        
                      </div>
                      <!-- {{ cts }} -->
                      
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