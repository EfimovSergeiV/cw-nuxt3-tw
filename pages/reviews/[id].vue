<script setup>
  const config = useRuntimeConfig()
  const route = useRoute()


  const { data: review } = await useFetch(`${ config.public.baseURL }c/reviews/${route.params.id}`)
  const { data: randomReviews } = await useFetch(`${ config.public.baseURL }c/random-reviews/`)
  
  const startAnimation = (image) => {
    image.show_image = image.image;
  }
  const stopAnimation = (image) => {
    image.show_image = image.static_image;
  }
  
  const product = ref(null)
  onMounted( async () => {
    if ( review.value.link.params ) {
      const prod = await $fetch(`${ config.public.baseURL }c/prod/${ review.value.link.params.id }/`).catch((error) => error.data)
      console.log(prod)
      product.value = ( await prod ) 
    }
  })


</script>


<template>
  <section id="" class="mt-4">

    <div class="mx-auto px-4 lg:max-w-7xl lg:px-8">

      <!-- <div class="flex justify-end items-center">
        <p class="text-2xl">{{ review.name }}</p>
      </div> -->

      <!-- <nav class="flex px-5 py-3 mt-1 mb-4 text-gray-700 border border-gray-200 rounded-sm bg-white dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1">
          <li class="">
            <nuxt-link :to="{ name: 'index' }" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"><span class="mdi mdi-home px-1"></span> Главная</nuxt-link>
          </li>
          <li class="">
            <nuxt-link :to="{ name: 'reviews' }" class="text-sm font-medium text-gray-700 dark:text-gray-300"><span class="mdi mdi-chevron-right px-1"></span> Обзоры на оборудование</nuxt-link>
          </li>
          <li class="">
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300"><span class="mdi mdi-chevron-right px-1"></span> {{ review.name }}</p>
          </li>
        </ol>
      </nav> -->



      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="h-96 border border-gray-300 dark:border-gray-700 shadow-md rounded-sm bg-white dark:bg-gray-900">
          <iframe
            :src="review.video"
            loading="lazy"
            height="100%"
            width="100%"
            allowfullscreen="0"
            frameborder="0"
            class="rounded-sm"
          ></iframe>

        </div>

        <transition name="fade">
          <div v-if="product" class="bg-white dark:bg-gray-800 px-2 rounded-sm border border-gray-200 dark:border-gray-600">
            
            <div class="">
              <div class="">
                <nuxt-link :to="review.link">
                  <p class="text-lg py-1">{{ product.name }}</p>
                  <div v-if="product.description.length > 280" class="">
                    <p class="text-sm">{{ product.description.slice(0, 280) }}...</p>
                  </div>
                  <div v-else class="">
                    <p class="text-sm">{{ product.description }}</p>
                  </div>
                </nuxt-link>
              </div>
            </div>

            <div class="flex justify-end items-center my-4">
              <p v-if="product.only_price > 0" class="text-xl">{{ product.only_price.toLocaleString() }} руб.</p>
              <p v-else class="text-base">Стоимость по запросу</p>
            </div>
                      
            <div class="">
              <p class="text-base mt-4 mb-1">Характеристики:</p>
              <div class="columns-1 gap-8">
                <div v-for="param in product.propstrmodel.slice(0,6)" :key="param.id" class="border-b border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600">
                  <div class="flex justify-between">
                    <div class=""><small>{{ param.name }} :</small></div>
                    <div class="text-right"><small>{{ param.value }}</small></div>                
                  </div>
                </div>
              </div>
            </div>

          </div>
        </transition>
      </div>


      <div class="flex border-b border-gray-200 dark:border-gray-600 my-4"></div>


      <div class="">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          <div v-for="image in randomReviews" :key="image.id"  class="">
            <div @mouseover="startAnimation(image)" @mouseout="stopAnimation(image)" class=" h-full cursor-pointer border border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 bg-gray-100 dark:bg-gray-700 transition-all rounded-md shadow-sm shadow-black/30">
              <div class="rounded-md transition-all duration-700">
                <nuxt-link :to="{ name: 'reviews-id', params: { id: image.id } }" class="">
                  <img :src="image.show_image" alt="Your WebP Image" class=" transition-all duration-700 rounded-md hh-36 rounded-bl-xl rounded-br-xl" />
                  <div class="px-1 py-4">
                    <p class="text-xs">{{ image.name }}</p>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>


        </div>
      </div>


    </div>

  </section>
</template>