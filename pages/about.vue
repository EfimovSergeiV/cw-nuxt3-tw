<script setup>
  useHead({
    titleTemplate: '%s - Магазины'
  })

  const config = useRuntimeConfig()
  const shopStore = useShopStore()
  const { data: shops } = await useFetch(`${ config.public.baseURL }c/shops/`)
  const images = [
    { "id": 1, "url": "/shops/1.webp"},
    { "id": 2, "url": "/shops/2.webp"},
    { "id": 3, "url": "/shops/3.webp"},
    { "id": 4, "url": "/shops/4.webp"},
    { "id": 5, "url": "/shops/5.webp"},
    { "id": 6, "url": "/shops/6.webp"},
  ]

  const mapURLs = {
    "Псков" : "https://yandex.ru/map-widget/v1/?um=constructor%3A47f57d246b40670e64b17cb3f82dde8a81f3b3a825fa0ec9dc5e2a360214ec38&amp;source=constructor",
    "Москва" : "https://yandex.ru/map-widget/v1/?um=constructor%3Ae113235413b59c4ae31cb4d894caa9612e5c88e95cb5fc873f8508770800a19f&amp;source=constructor",
    "Санкт-Петербург" : "https://yandex.ru/map-widget/v1/?um=constructor%3A4892b9a6ff89034d14a4833ed892e30ddac4cde58559e85c6ae75d9d5cb766b2&amp;source=constructor",
    "Великие луки" : "https://yandex.ru/map-widget/v1/?um=constructor%3A8cbd01689857fcf3e2c9604637d5e0e3ac33b5e71467a701ed470d12b63e1dea&amp;source=constructor",
    "Смоленск" : "https://yandex.ru/map-widget/v1/?um=constructor%3A22e3d619383ca4fb59e78352a52f5e3808418009918e23d73549578277b6a013&amp;source=constructor",
    "Петрозаводск" : "https://yandex.ru/map-widget/v1/?um=constructor%3A7a6886838355b4c4aab4597dd2ee3dcd40eb7c6cd2bab5638666af5f1606c267&amp;source=constructor",
  }


</script>

<template>
  <div class="">
    <AppHeader />
    <AppNavbar />

    <div class="container mx-auto py-2 px-4 max-w-6xl lg:px-8 min-h-[40rem]">

      <div class="my-4">
        <p class="text-3xl">ИНТЕРНЕТ-МАГАЗИН СВАРОЧНОЙ ТЕХНИКИ И ПРОМЫШЛЕННЫХ НУЖД</p>
        <div class="">
          <p class="">
            На сайте GLSVAR.RU вы найдете сварочную технику, сварочные принадлежности, сварочные присадочные материалы, промышленные принадлежности, технику безопасности и многое другое. Наш сварочный цех предлагает Вам большой выбор сварочных аппаратов и аксессуаров всех видов, необходимых для сварки и в мастерской.          </p>
        </div>

      </div>


      <div class="grid grid-cols-2 gap-4">
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
        
        
        <div class="">
          <div class="">
            <div class="relative">
              <iframe :src="mapURLs[shopStore.city]" width="100%" height="260" frameborder="0" loading="lazy" class="rounded-md"></iframe>
            </div>
          </div>
        </div>

      </div>








      <div class="my-8">
        <p class="text-3xl">МЫ ПРЕДЛАГАЕМ РЕШЕНИЯ В СЛЕДУЮЩИХ ОБЛАСТЬЯХ</p>

        <div class="grid grid-cols-3 gap-4 py-8">
          <div class="flex items-center gap-2">
            <img src="/bnr/arbeitsschutz-schweissen.webp" class=" rounded-full w-36 border border-white/20"/>
            <p class="">Средства защиты головы, рук и лица</p>
          </div>
          <div class="flex items-center gap-2">
            <img src="/bnr/autogentechnik.webp" class=" rounded-full w-36 border border-white/20"/>
            <p class="">Принадлежности для газокислородной сварки</p>
          </div>
          <div class="flex items-center gap-2">
            <img src="/bnr/Kreise-SH-hell4.webp" class=" rounded-full w-36 border border-white/20"/>
            <p class="">Инструменты и химия для очистки поверхности</p>
          </div>
          <div class="flex items-center gap-2">
            <img src="/bnr/schweissbrenner.webp" class=" rounded-full w-36 border border-white/20"/>
            <p class="">Сварочные горелки и их изнашиваемые детали</p>
          </div>
          <div class="flex items-center gap-2">
            <img src="/bnr/schweissgeraete.webp" class=" rounded-full w-36 border border-white/20"/>
            <p class="">Современные сварочные аппараты на дуговой сварке</p>
          </div>
          <div class="flex items-center gap-2">
            <img src="/bnr/schweisszusatzwerkstoffe.webp" class=" rounded-full w-36 border border-white/20"/>
            <p class="">Сварочные электроды, проволока и присадочные материалы</p>
          </div>
          <div class="flex items-center gap-2">
            <img src="/bnr/oberflaechenbearbeitung.webp" class=" rounded-full w-36 border border-white/20"/>
            <p class="">Инструменты и химия для очистки поверхности</p>
          </div>          
          <div class="flex items-center gap-2">
            <img src="/bnr/schweisszubehoer.webp" class=" rounded-full w-36 border border-white/20"/>
            <p class="">Другие принадлежности для ваших сварочных работ</p>
          </div>
          
          
        </div>

      </div>

      <div class="">
        <img src="/bnr/banner_image-sh.webp" class="rounded-md border border-white/20" />
      </div>

      <div class="py-8">
        <p class="text-2xl">ЕСЛИ НУЖНО СВАРОЧНОЕ ОБОРУДОВАНИЕ, ЗАКАЗЫВАЙТЕ ОНЛАЙН НА GLSVAR.RU!</p>
        <div class="py-2">
          <p class="">
            Здесь вы найдете бренды известных производителей, таких как Lorch, EWM, ESAB, Fronius, Binzel, 3 M, Optrel, Speedglas, Rehm, Böhler, Voestalpine, Kemper и многих других. Поддайтесь очарованию нашего профессионального и широкого ассортимента изделий: от сварочных аппаратов для инверторных, MIG/MAG, TIG или плазменных процессов, до многочисленных дополнительных материалов и до кислородно-топливной технологии. Каждый гарантированно найдет то, что ищет, ведь герои сварки предлагают вам сварочную технику как для новичков, так и профессиональное оборудование. Мы также уделяем первостепенное внимание области безопасности труда сварщиков: будь то защита тела, защита ног, защита рук, защита головы, защита глаз и лица, защита рабочего места или защитные шторы для сварки - просто выберите подходящее оборудование для ваших нужд и стань настоящим героем сварки!
          </p>
        </div>

      </div>

      <div class="my-4">

      </div>

      <div class="my-4">

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