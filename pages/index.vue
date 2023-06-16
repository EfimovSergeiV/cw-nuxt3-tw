<script setup>
  // const colorMode = useColorMode()
  // const route = useRoute()

  const { data: widebanner } = await useFetch('https://api.glsvar.ru/c/widebanners/')
  const { data: banners } = await useFetch('https://api.glsvar.ru/c/mainbanner/')
  const { data: brands } = await useFetch('https://api.glsvar.ru/c/brands/')
  const { data: esab } = await useFetch('https://api.glsvar.ru/c/prods/?brnd=3')
  const { data: latest } = await useFetch('https://api.glsvar.ru/c/neues/')
  const { data: mpromobs } = await useFetch('https://api.glsvar.ru/c/mpromob/')
  const { data: recommends } = await useFetch('https://api.glsvar.ru/c/recommend/')
  const { data: mweld } = await useFetch('https://api.glsvar.ru/c/prod/1835/')
  const { data: randomreviews } = await useFetch('https://api.glsvar.ru/c/random-reviews/')
  // console.log(route.params.id)
</script>

<template>

  <div class="">
    <TopSlider />
    <AppNavbar />
  


      <MainSection :latest="latest" :banners="banners" />
      <MainWelder />
      <Reviews :reviews="randomreviews" />


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