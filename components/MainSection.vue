<script setup>
  const props = defineProps(['banners','latest'])


</script>


<template>
  <div  class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8">


    <div class="grid grid-cols-1 lg:flex gap-4">


      <div class="bg-white rounded-sm border border-gray-100 dark:border-gray-700 dark:bg-gray-800 p-1 shadow-md w-full">
        <div class="grid grid-cols-2 gap-4">
          <div v-for="product in latest.slice(0, 4)" :key="product.id">

            <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800">
              <div class="h-36 lg:h-40">

                <nuxt-link :to="{ name: 'product-id', params: { id: product.id } }">
                  <div class="bg-white h-full rounded-sm group">

                    <div class="relative h-full rounded-sm">
                      <div class="flex items-center h-full justify-center">
                        <div class="">
                          <img 
                            :src="product.preview_image"
                            onerror="this.src='../../noimage-235-177.png'"
                            :alt="product.name"
                            loading=lazy
                            class="h-16 md:h-28"
                          />                            
                        </div>
                      </div>

                      <div class="absolute left-0 top-0">
                        <div class="flex items-center p-1">
                          <p class="flex items-center uppercase text-red-600 font-bold mdi mdi-alert-decagram text-xs">Новинка</p>
                        </div>
                      </div>
                      <div class="absolute top-0 right-0">
                        <div class="flex items-center p-1 rounded-sm">
                          <p v-if="product.only_price === 0" class="text-gray-700 font-bold text-xs">По запросу</p>
                          <p v-else class="text-gray-700 font-bold text-xs">{{ product.only_price.toLocaleString() }} руб.</p>
                        </div>
                      </div>
                      <div class="absolute bottom-0 left-0 w-full">
                        <div class="flex items-center justify-center p-1 h-10 rounded-sm">
                          <p class="text-gray-900 text-xs text-center">{{ product.name }}</p>
                        </div>
                      </div>
                    </div>
                  </div>                    
                </nuxt-link>

              </div>
            </div>


          </div>

        </div>
      </div>



      <div class="hidden lg:block">
        <Swiper
          class="rounded-sm relative"
          style="height: 348px; width: 598px;"
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 10000,
            disableOnInteraction: true
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1]
            },
            next: {
              translate: ['100%', 0, 0]
            }
          }"
        >
          <SwiperSlide v-for="slide in props.banners" :key="slide.id" class="">
            <nuxt-link :to="slide.link">
              <img
                style="height: 348px; width: 598px;"
                :src="slide.image"
                class="rounded-sm border dark:border-gray-700 shadow-md "
              />             
            </nuxt-link>
          </SwiperSlide>
          <div class="absolute bottom-0 right-0 z-50 p-3">
            <SwiperControls />
          </div>
        </Swiper>
      </div>





    </div>
  </div>
</template>
