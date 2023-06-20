<script setup>
  useHead({
    titleTemplate: '%s - сварочное оборудование и всё для сварки Псков, Москва, Спб'
  })

  const config = useRuntimeConfig()
  // const colorMode = useColorMode()
  // const route = useRoute()

  const { data: widebanner } = await useFetch(`${ config.public.baseURL }c/widebanners/`)
  const { data: banners } = await useFetch(`${ config.public.baseURL }c/mainbanner/`)
  const { data: brands } = await useFetch(`${ config.public.baseURL }c/brands/`)
  const { data: esab } = await useFetch(`${ config.public.baseURL }c/prods/?brnd=3`)
  const { data: latest } = await useFetch(`${ config.public.baseURL }c/neues/`)
  const { data: mpromobs } = await useFetch(`${ config.public.baseURL }c/mpromob/`)
  const { data: recommends } = await useFetch(`${ config.public.baseURL }c/recommend/`)
  const { data: randomreviews } = await useFetch(`${ config.public.baseURL }c/random-reviews/`)
  // console.log(route.params.id)
</script>

<template>

  <div class="">
    <TopSlider />
    <AppNavbar />
    <MainSection :latest="latest" :banners="banners" />
    <MainWelder />
    <Reviews :reviews="randomreviews" />
    <ESAB />
    <Recommend :recommends="recommends" />
    <ShopMaps />    
    <CorouselBrands />



      <!-- <p class="text-xs text-gray-800">{{ widebanner }}</p> -->
      <!-- <p class="text-xs text-gray-800">{{ banners }}</p> -->
      <!-- <p class="text-xs text-gray-800">{{ brands }}</p> -->
      <!-- <p class="text-xs text-gray-800">{{ esab }}</p> -->
      <!-- <p class="text-xs text-gray-800">{{ latest }}</p> -->
      <!-- <p class="text-xs text-gray-800">{{ mpromobs }}</p> -->
      <!-- <p class="text-xs text-gray-800">{{ recommends }}</p> -->
      <!-- <p class="text-xs text-gray-800">{{ mweld }}</p> -->
      <!-- <p class="text-xs text-gray-800">{{ randomreviews }}</p> -->


  </div>
</template>