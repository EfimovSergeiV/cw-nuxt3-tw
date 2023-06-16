<template>
  <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
    <!-- <div class="grid grid-cols-2 lg:grid-cols-6 gap-4 text-center">
      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md cursor-pointer group" v-for="(city, pk) in ['Москва', 'Санкт-Петербург', 'Псков', 'Смоленск', 'Петрозаводск', 'Великие луки',]" :key="pk">
        <p class="text-base my-1" @click="selectCity = city"> {{ city }}</p>
      </div>
    </div>

    <div class="mt-2 bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
      <div class="relative">
        <iframe :src="mapURLs[selectCity]" width="100%" height="350" frameborder="0" loading="lazy" class="rounded-sm"></iframe>
        <div class="absolute top-0 bg-gradient-to-r from-gray-400/80 dark:from-gray-700/95 to-gray-500/0 w-2/3 h-full hidden md:block">
          <div class="mx-2">
            <p class="my-1 font-bold text-gray-700 dark:text-gray-300">Главный сварщик | {{ selectCity }}</p>
            <div class="">
              <div class="my-1" v-for="shop in shops" :key="shop.id">
                <div class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 text-xs" v-if="shop.city == selectCity">
                  <div class="border border-gray-200 dark:border-gray-300/30 w-2/3 p-1 transition-all duration-500 rounded-sm hover:border-gray-300/50 dark:hover:border-gray-100/50 cursor-pointer bg-white/60 dark:bg-gray-700/60 hover:bg-white/80 dark:hover:bg-gray-700/80 ">
                    <p class="mdi mdi-map-marker"> {{ shop.adress }}</p>
                    <a href="tel:+78112606005"><p class="my-1 mdi mdi-phone"> {{ shop.phone }}</p></a>
                    <p class="">{{ shop.wday }}</p>
                    <p class="">{{ shop.wend }}</p>                      
                  </div>
                </div>            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>