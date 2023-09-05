<script setup>
  useHead({
    titleTemplate: '%s - Магазины'
  })

  // const route = useRoute()

  // const { data: widebanner } = await useFetch('https://api.glsvar.ru/c/widebanners/')

  const images = [
    { "id": 1, "url": "/shops/1.webp"},
    { "id": 2, "url": "/shops/2.webp"},
    { "id": 3, "url": "/shops/3.webp"},
    { "id": 4, "url": "/shops/4.webp"},
    { "id": 5, "url": "/shops/5.webp"},
    { "id": 6, "url": "/shops/6.webp"},
  ]



</script>

<template>
  <div class="">
    <AppHeader />
    <AppNavbar />

    <div class="container mx-auto py-2 px-4 max-w-6xl lg:px-8 min-h-[40rem]">
    <div class="max-w-[500px]">
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
                style=""
                :src="slide.url"
                class="rounded-md border dark:border-gray-700 shadow-md "
              />             

          </SwiperSlide>
          <div class="absolute bottom-0 right-0 z-50 p-3">
            <SwiperControls />
          </div>
        </Swiper>
      </div>
    </div>      
    </div>




  </div>
  <!-- <div class="">
    <AppHeader />
    <AppNavbar />

    <div class="mx-auto px-4 max-w-6xl lg:px-8">
      <div class="bg-white rounded-md border dark:border-gray-700 dark:bg-gray-800 shadow-md my-4">
        <div class="px-4 py-4">

          <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">

            <div class="max-w-[500px]">
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
                        style=""
                        :src="slide.url"
                        class="rounded-md border dark:border-gray-700 shadow-md "
                      />             

                  </SwiperSlide>
                  <div class="absolute bottom-0 right-0 z-50 p-3">
                    <SwiperControls />
                  </div>
                </Swiper>
              </div>
            </div>

            <div class="">
              <p class="text-2xl my-2 text-gray-900 dark:text-gray-100">Магазины</p>
              <p class="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-700">
                У нас представлен широкий выбор сварочного оборудования и аксессуаров от известных и проверенных производителей, таких как Сварог, Ресанта, Telwin, Кедр, Huter и другие. У нас вы найдете самые привлекательные цены и прогрессивные системы скидок!<br /> Если Вы ищите инверторный аппарат, полуавтомат или аргоно-дуговую установку, то доверьтесь нам.
              </p>
            </div>
          </div>
        </div>

        <div class="my-10 lg:my-20"></div>

        <div class="flex flex-col lg:flex-row gap-8 items-center justify-between my-8 mx-4">
          <div class="w-full lg:w-5/12">
            <p class="text-2xl my-2 text-gray-900 dark:text-gray-100">Сертификаты</p>
            <p class="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-700">
              Мы являемся официальным дистрибьютором ведущих брендов сварочного оборудования, и всегда готовы предложить вам широкий выбор продуктов, которые обеспечат вашу эффективную и качественную работу. Наши специалисты всегда готовы проконсультировать вас и помочь выбрать именно то, что вам нужно.
            </p>
          </div>
          <div class="flex items-center gap-4">
            <div class="">
              <img @click="cert = 'esab-cert.jpg'" alt="cert-1" src="/esab-cert.jpg" class="rounded-md cursor-zoom-in w-48" fluid/>
            </div>
            <div class="">
              <img @click="cert = 'cert-redius.jpg'" alt="cert-2" src="/cert-redius.jpg" class="rounded-md cursor-zoom-in w-48" fluid />
            </div>
            <div class="">
              <img @click="cert = 'svarog.jpg'" alt="cert-3" src="/svarog.jpg" class="rounded-md cursor-zoom-in w-48" fluid />
            </div>                
          </div>
        </div>

        <div class="my-10 lg:my-20"></div>

        <div class="flex justify-center items-center gap-8 md:gap-16 text-center text-sm lg:text-base px-8">
          <div class="">
            <div class="flex justify-center items-center">
              <img src="/icons/thumb-up.png" class="my-4 h-10 lg:h-20" />
            </div>
            <p>Широкий выбор оборудования</p>
          </div>
          <div class="">
            <div class="flex justify-center items-center">
              <img src="/icons/businessman.png" class="my-4 h-10 lg:h-20" />
            </div>
            <p>Профессиональная консультация специалистов</p>
          </div>
          <div class="">
            <div class="flex justify-center items-center">
              <img src="/icons/high-quality.png" class="my-4 h-10 lg:h-20" />
            </div>
            <p>Гарантия качества продукции</p>
          </div>
        </div>


        <div class="my-10 lg:my-20"></div>

        <div class="flex items-center justify-center">
          <div class="text-center text-sm md:text-base">
            <p class="text-gray-900 dark:text-gray-100">Если вы не нашли то, что Вам нужно - свяжитесь с нами и мы найдем этот товар специально для Вас!</p>
            <p class="text-gray-900 dark:text-gray-100">Покупайте современное сварочное оборудование у нас и помните, качественное оборудование - залог успешной работы!</p>            
          </div>
        </div>

        <div class="flex items-center justify-center my-8">
          <nuxt-link to="/">
            <img src="/images/blue-svar.png" alt="glsvar-logo" class=" h-14" />
          </nuxt-link>
        </div>
      </div>



      <transition name="fade">
        <div v-if="cert" class="fixed inset-0 overflow-y-hidden overscroll-y-none z-50 my-10">
          <div class="flex min-h-full justify-center text-center items-center">
            <div class="relative rounded-md px-10">
              <div class="overflow-y-auto h-screen">
                <div class="flex min-h-full justify-center text-center items-center">
                  <img @click="cert = null" :src="cert" class="rounded-md cursor-zoom-out" fluid/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>


    </div>

    <ShopMaps />
  </div> -->
</template>