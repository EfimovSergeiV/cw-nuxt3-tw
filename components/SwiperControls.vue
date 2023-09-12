<script setup lang="ts">
	const swiper = useSwiper()
</script>

<template>
  <!-- 
    <div class="">
      <Swiper
        class="rounded-md relative"
        style=""
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
        <SwiperSlide v-for="slide in images" :key="slide.id" class="">
          <img
            :src="slide.url"
            class="rounded-md border dark:border-gray-700 shadow-md "
          />             
        </SwiperSlide>
        <div class="absolute bottom-0 right-0 z-50 p-3">
          <SwiperControls />
        </div>
      </Swiper>
    </div>
  -->

  <div class="flex items-center justify-end bg-blue-700/60 hover:bg-blue-700/90 duration-500 transition-all rounded-lg border border-gray-300/10">
    <button @click="swiper.slideNext()" class="mdi mdi-arrow-left-bold text-gray-100 mdi-18px w-8 h-8"></button>
    <button @click="swiper.slidePrev()" class="mdi mdi-arrow-right-bold text-gray-100 mdi-18px w-8 h-8 duration-500 transition-all"></button>		
  </div>
</template>
