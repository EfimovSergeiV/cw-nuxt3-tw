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

    <div class="container mx-auto px-4 py-2 max-w-6xl lg:px-8 min-h-[40rem]">

      <div class="bg-white dark:bg-gray-800 px-4 py-4 rounded-md border border-white/20">
        <div class="flex border-b border-white/20">
          <p class="text-2xl">ИНТЕРНЕТ-МАГАЗИН СВАРОЧНОЙ ТЕХНИКИ И ПРОМЫШЛЕННЫХ НУЖД</p>
        </div>
        <div class="py-4">
          <p class="max-w-2xl">
            На сайте GLSVAR.RU вы найдете сварочную технику, сварочные принадлежности, сварочные присадочные материалы, промышленные принадлежности, технику безопасности и многое другое. Наш сварочный цех предлагает Вам большой выбор сварочных аппаратов и аксессуаров всех видов, необходимых для сварки и в мастерской.          </p>
        </div>

      </div>


      <div class=" gap-4 hidden">
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







      <div class="my-4">
        <div class="relative">

          <div class="grid grid-cols-3 gap-4">
            <div class="flex items-center justify-center bg-white dark:bg-gray-800 px-4 py-1 rounded-md border border-white/20">
              <p class="text-center uppercase">Мы предлагаем решения в следующих областях</p>
            </div>
            <div class="flex items-center gap-2 bg-white dark:bg-gray-800 px-1 py-1 rounded-md border border-white/20">
              <img src="/bnr/arbeitsschutz-schweissen.webp" class=" rounded-full w-24 border border-white/20"/>
              <div class="">
                <p class="">Средства защиты головы, рук и лица</p>
              </div>
            </div>
            <div class="flex items-center gap-2 bg-white dark:bg-gray-800 px-1 py-1 rounded-md border border-white/20">
              <img src="/bnr/autogentechnik.webp" class=" rounded-full w-24 border border-white/20"/>
              <div class="">
                <p class="">Принадлежности для газокислородной сварки</p>
              </div>
            </div>
            <div class="flex items-center gap-2 bg-white dark:bg-gray-800 px-1 py-1 rounded-md border border-white/20">
              <img src="/bnr/Kreise-SH-hell4.webp" class=" rounded-full w-24 border border-white/20"/>
              <div class="">
                <p class="">Современные сварочные аппараты на дуговой сварке</p>
              </div>
            </div>
            <div class="flex items-center gap-2 bg-white dark:bg-gray-800 px-1 py-1 rounded-md border border-white/20">
              <img src="/bnr/schweissbrenner.webp" class=" rounded-full w-24 border border-white/20"/>
              <div class="">
                <p class="">Сварочные горелки и их изнашиваемые детали</p>
              </div>
            </div>
            <div class="flex items-center gap-2 bg-white dark:bg-gray-800 px-1 py-1 rounded-md border border-white/20">
              <img src="/bnr/schweisszusatzwerkstoffe.webp" class=" rounded-full w-24 border border-white/20"/>
              <div class="">
                <p class="">Сварочные электроды, проволока и присадочные материалы</p>
              </div>
            </div>
            <div class="flex items-center gap-2 bg-white dark:bg-gray-800 px-1 py-1 rounded-md border border-white/20">
              <img src="/bnr/oberflaechenbearbeitung.webp" class=" rounded-full w-24 border border-white/20"/>
              <div class="">
                <p class="">Инструменты и химия для очистки поверхности</p>
              </div>
            </div>          
            <div class="flex items-center gap-2 bg-white dark:bg-gray-800 px-1 py-1 rounded-md border border-white/20">
              <img src="/bnr/schweisszubehoer.webp" class=" rounded-full w-24 border border-white/20"/>
              <div class="">
                <p class="">Другие принадлежности для ваших сварочных работ</p>
              </div>
            </div>
            <div class="flex items-center justify-center bg-white dark:bg-gray-800 px-4 py-1 rounded-md border border-white/20">
              <p class="text-center uppercase">Перейти в каталог</p>
            </div>
            
          </div>

        </div>
      </div>



      <div class="">

        <div class="" v-for="(shop, pk) in shops" :key="shop.id">
          <p class="text-sm">{{ pk+1 }}. {{ shop.adress }}</p>
        </div>
        
      </div>



      <div class="bg-white dark:bg-gray-800 rounded-md border border-white/20">
        <div class="">
          <img src="/bnr/banner_image-sh.webp" class=" rounded-t-md" />
        </div>

        <div class="px-4 py-4">
          <div class="border-b border-white/10">
            <p class="text-2xl py-4">ЕСЛИ НУЖНО СВАРОЧНОЕ ОБОРУДОВАНИЕ, ЗАКАЗЫВАЙТЕ ОНЛАЙН НА GLSVAR.RU!</p>
          </div>
          
          <div class="py-4">
            <p class="">
              Здесь вы найдете бренды известных производителей, таких как Lorch, EWM, ESAB, Fronius, Binzel, 3 M, Optrel, Speedglas, Rehm, Böhler, Voestalpine, Kemper и многих других. Поддайтесь очарованию нашего профессионального и широкого ассортимента изделий: от сварочных аппаратов для инверторных, MIG/MAG, TIG или плазменных процессов, до многочисленных дополнительных материалов и до кислородно-топливной технологии. Каждый гарантированно найдет то, что ищет. Главный сварщик предлагает вам сварочную технику как для новичков, так и профессиональное оборудование. Мы также уделяем первостепенное внимание области безопасности труда сварщиков: будь то защита тела, защита ног, защита рук, защита головы, защита глаз и лица, защита рабочего места или защитные шторы для сварки - просто выберите подходящее оборудование для ваших нужд и стань настоящим героем сварки!
            </p>
          </div>
        </div>

      </div>


      <div class="my-4">

      </div>

      <div class="my-4">

      </div>


    </div>




  </div>
</template>