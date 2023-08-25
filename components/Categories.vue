<script setup>
  const config = useRuntimeConfig()

  const { data: cts, pending, error } = await useFetch(`${ config.public.baseURL }c/ct/`)

</script>



<template>
  <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">
    <div class="bg-white border-gray-200 shadow-sm border dark:bg-gray-800 dark:border-gray-700 p-2 ">


      <p v-if="pending">Загрузка данных...</p>
      <div v-else-if="error">
        <div class="my-6 lg:my-10">
          <pre>Ошибка: Данные не получены </pre>
          <pre class="text-xs">{{ error.data }}</pre>
        </div>
      </div>


      <div v-else  class="">

        <div class="">
          <div class="">
            
            <div class="px-2 py-3">
              
              <div class="columns-3 lg:columns-4">
                <div v-for="ct in cts" :key="ct.id" class="break-inside-avoid-column">
                  <div class="">


                    <div class="py-2 ">
                      
                      <div class="bg-gray-100/90 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-500 rounded-md py-2 px-2">
                        <div class="py-2">
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
        <!-- <div v-for="ct in cts" :key="ct.id" class="break-inside-avoid-column">
          <div class="p-2">
            <div class="mb-1">
              <nuxt-link :to="{ name: 'prods', query: {ct: ct.id}}" class="font-bold text-gray-700 dark:text-gray-300 text-base">{{ ct.name }}</nuxt-link>              
            </div>
            <div>
              <ul>
                <li v-for="sct in ct.inserted" :key="sct.id" class="inline-block mr-3 my-1 group relative">
                  
                  <nuxt-link v-if="sct.inserted.length === 0" :to="{ name: 'prods', query: {ct: sct.id}}" class="text-gray-700 text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">{{ sct.name }}</nuxt-link>
                  <button v-else class="text-gray-700 text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">{{ sct.name }}</button>

                  <div class="absolute invisible group-hover:opacity-100 group-hover:visible right-0 z-40" v-if="sct.inserted.length > 0">
                    
                    <div class="bg-white border-gray-200 border rounded-sm dark:border-gray-700 dark:bg-gray-800 p-4">
                      <nuxt-link :to="{ name: 'prods', query: {ct: sct.id}}" class="font-bold">{{ sct.name }}</nuxt-link>
                      <div class="my-2 md:columns-2">
                        <div v-for="ssct in sct.inserted" :key="ssct.id" class="px-1">
                          <nuxt-link :to="{ name: 'prods', query: {ct: ssct.id}}" class="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">{{ ssct.name }}</nuxt-link>
                        </div>                                 
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

            </div>              
          </div>
        </div> -->
      </div>
    </div>

  </div>
</template>