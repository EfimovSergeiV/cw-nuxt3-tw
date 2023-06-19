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
  const { data: mweld } = await useFetch('https://api.glsvar.ru/c/prod/1835/`')
  const { data: randomreviews } = await useFetch('https://api.glsvar.ru/c/random-reviews/`')
  // console.log(route.params.id)
</script>

<template>
  <div class="">
    <TopSlider />
    <AppNavbar />
    <ShopMaps />
  </div>
</template>