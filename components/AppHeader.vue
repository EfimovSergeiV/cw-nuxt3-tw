<script setup>
  import cities from '~/cities.ts';

  const colorMode = useColorMode()
  const shopStore = useShopStore()
  // const route = useRoute()

  // const { data: shops } = await useFetch('https://api.glsvar.ru/c/shops/')
  
  const searchProduct = ref('')
  const searchCity = ref('')
  const searchCountries = computed(() => {
    if (searchCity.value === '') {
      return []
    }

    let matches = 0
    return cities.filter(city => {
      if (
        city.toLowerCase().includes(searchCity.value.toLowerCase())
        && matches < 10
      ) {
        matches++
        return city
      }
    })

  })

</script>


<template>
  <div class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8 py-2">

    <div class="flex items-center justify-between">

      
      <!-- <div class="">
        <div class="flex items-center justify-center">
          <nuxt-link :to="{ name: 'index'}" class="">
            <img
              class=" h-16 select-none"
              width=""
              src="/images/blue-svar.webp"
            />      
          </nuxt-link>                  
        </div>

        <div>
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

      </div> -->


      <div class="grid grid-cols-1 gap-2">


        <!-- <ul class="flex items-center flex-row justify-end space-x-3 ">

          <li class="">
            <a :href="`mailto:${ shopStore.shop.email }`" class=" mdi mdi-email-open-outline text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"> zakaz@glsvar.ru</a>
          </li>

          <li id="navabar-menu" class=" group">

            <div class="relative">
              <p hover="true" id="change-city" data-collapse-toggle="change-city" class=" mdi mdi-map-marker cursor-pointer text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 mt-1"> {{ shopStore.city }}</p>
              
              <div class="absolute invisible group-hover:visible right-0 z-50">
                <div class="transition group-hover:translate-y-2 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform">
                  
                  <div class="bg-white rounded-md border border-gray-500/50 px-4 py-4">
                    <div class="flex items-center justify-center gap-1">
                      <div class="text-gray-700">

                        <input
                          type="text"
                          id="search"
                          placeholder="Type here..."
                          v-model="searchCity"
                        >
                        {{ typeof searchCountries }}
                        {{ searchCountries.length }}
                        <ul v-if="searchCountries.length">
                          <li
                            v-for="(country, pk) in searchCountries"
                            :key="pk"
                          >
                            {{ country }}
                          </li>
                        </ul>


                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>
          </li>
        </ul> -->



        <!-- <ul class="flex items-center bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 px-8 py-0.5 rounded-md flex-row space-x-2 md:space-x-3 justify-end transition-all"> -->
        <ul class="flex items-center rounded-md flex-row space-x-2 md:space-x-3 justify-end transition-all">


          <transition name="right-emergence">
            <li v-if="shopStore.shop.telegram">
              <a class="" :href="shopStore.shop.telegram" target="_blank">
                <div class="bg-white w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-md border border-white/10">
                  <img src="/telegr-logo.webp" class="w-4 md:w-5" />
                </div>
              </a>
            </li>
          </transition>
          <transition name="right-emergence">
            <li v-if="shopStore.shop.whatsapp">
              <a class="" :href="shopStore.shop.whatsapp" target="_blank">
                <div class="bg-white w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-md border border-white/10">
                  <img src="/WhatsApp-logo.webp" class="w-5 md:w-8" />
                </div>
              </a>
            </li>
          </transition>
          <transition name="right-emergence">
            <li v-if="shopStore.shop.viber">
              <a class="" :href="shopStore.shop.viber" target="_blank">
                <div class="bg-white w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-md border border-white/10">
                  <img src="/viber-logo.webp" class="w-4 md:w-5" />
                </div>
              </a>
            </li>
          </transition>
        </ul>

        <div v-if="shopStore.shop.mobile" class="flex justify-end">
          <a :href="`tel:${shopStore.mobile.replace('(', '').replace(')', '').replace(/ /ig, '')}`" class="text-sm md:text-xl font-bold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all"> {{ shopStore.shop.mobile }}</a>
        </div>






      </div>

      <div class="flex gap-2">
        <div class="bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-lg transition-all">
          <div class="grid grid-cols-1 px-10 py-1">
            <a :href="`tel:${shopStore.shop.phone.replace('(', '').replace(')', '').replace(/ /ig, '')}`" class="text-base font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all"> {{ shopStore.shop.phone }}</a>
          </div>        
        </div>
        <!-- <div class="bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-md transition-all">
          <div class="grid grid-cols-1 px-10 py-1">
            <a :href="`tel:${shopStore.shop.phone.replace('(', '').replace(')', '').replace(/ /ig, '')}`" class="text-base font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all"> {{ shopStore.shop.phone }}</a>
          </div>        
        </div> -->
        <div class="bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-lg transition-all">
          <div class="grid grid-cols-1 px-10 py-1">
            <a href="#" class="text-base">zakaz@glsvar.ru</a>
          </div>        
        </div>
      </div>


    </div>



    <!-- <div class="grid grid-cols-1 gap-4 md:flex items-end justify-center md:justify-between">
      <nuxt-link :to="{ name: 'index'}" class="">
        <img
          class=" h-12 md:h-16 select-none"
          width=""
          src="/images/blue-svar.webp"
        />      
      </nuxt-link>
  
      <div class="">
        <div class="relative md:w-[360px] lg:w-[600px]">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <p class="mdi mdi-24px mdi-store-search-outline"></p>
          </div>
          <input v-model="searchProduct" type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 ring-0 dark:focus:ring-gray-600 dark:focus:border-gray-600" placeholder="Поиск по товарам">
        </div> 
      </div>

    </div> -->



  </div>
</template>