<script setup>
  const colorMode = useColorMode()
  // const route = useRoute()

  const { data: shops } = await useFetch('https://api.glsvar.ru/c/shops/')
</script>


<template>
  <div class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8 py-2">

    <!-- <p class="p-4 pb-2">
      <select
        v-model="colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </p> -->

    <div class="flex items-center justify-between">
      
      <div id="color-mode" class="flex gap-1">

        <div>
          <div v-if="$colorMode.preference === 'system'" @click="$colorMode.preference = 'dark'" class="cursor-pointer w-8 h-8 bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-2xl flex items-center justify-center transition-all">
            <p class="text-base mdi mdi-laptop"></p>
          </div>
          <div v-if="$colorMode.preference === 'dark'" @click="$colorMode.preference = 'light'" class="cursor-pointer w-8 h-8 bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-2xl flex items-center justify-center transition-all">
            <p class="text-base mdi mdi-weather-night"></p>
          </div> 
          <div v-if="$colorMode.preference === 'light'" @click="$colorMode.preference = 'system'" class="cursor-pointer w-8 h-8 bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 rounded-2xl flex items-center justify-center transition-all">
            <p class="text-base mdi mdi-white-balance-sunny"></p>
          </div> 
        </div>

        <div class="flex items-center justify-center transition-all duration-600 gap-2 bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700 border border-gray-300 hover:border-gray-400 dark:border-gray-700 hover:dark:border-gray-600 px-2 h-8 rounded-2xl">
          <nuxt-link :to="{ name: 'person' }" class="mdi mdi-account text-base cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></nuxt-link>
          <nuxt-link :to="{ name: 'compare' }" class="mdi mdi-compare text-base cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></nuxt-link>
          <nuxt-link :to="{ name: 'person' }" class="mdi mdi-heart-outline text-base cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></nuxt-link>
        </div>

      </div>

      <!-- <div class="grid grid-cols-1">

        <ul class="flex items-center flex-row space-x-2 md:space-x-3 justify-end">

          <li>
            <a :href="`tel:${shop.phone.replace('(', '').replace(')', '').replace(/ /ig, '')}`" class="text-sm md:text-2xl font-bold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all"> {{ shop.phone }}</a>
          </li>

          <transition name="right-emergence">
            <li v-if="shop.telegram">
              <a class="" :href="shop.telegram" target="_blank">
                <div class="bg-white w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-md border border-white/10">
                  <img src="/telegr-logo.webp" class="w-4 md:w-5" />
                </div>
              </a>
            </li>
          </transition>
          <transition name="right-emergence">
            <li v-if="shop.whatsapp">
              <a class="" :href="shop.whatsapp" target="_blank">
                <div class="bg-white w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-md border border-white/10">
                  <img src="/WhatsApp-logo.webp" class="w-5 md:w-8" />
                </div>
              </a>
            </li>
          </transition>
          <transition name="right-emergence">
            <li v-if="shop.viber">
              <a class="" :href="shop.viber" target="_blank">
                <div class="bg-white w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-md border border-white/10">
                  <img src="/viber-logo.webp" class="w-4 md:w-5" />
                </div>
              </a>
            </li>
          </transition>
          </ul>

      </div> -->

    </div>



  </div>
</template>