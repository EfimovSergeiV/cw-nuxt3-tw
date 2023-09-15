<script setup>


  const config = useRuntimeConfig()
  const route = useRoute()

  // const { data: product } = await useFetch(`${ config.public.baseURL }c/prod/${route.params.id}`)
  const { data: product } = await useFetch(`https://api.glsvar.ru/c/prod/${route.params.id}`)

  useSeoMeta({
    title: `${ product.value.name } - ${ product.value.brand.brand }`,
    description: `${ product.value.description }`,
    keywords: `${ product.value.name }, ${ product.value.brand.brand }, сварочное оборудование, оборудование для сварки, купить электроды, купить проволоку, купить источник, купить сварочный инвертор`,
    ogTitle: `${ product.value.name }`,
    ogDescription: `${ product.value.description }`,
    ogImage: `${ product.value.preview_image }`,
    twitterCard: `${ product.value.preview_image }`,
  })

  let relCT = ''
  for ( let i in product.value.related ) {
    relCT += `ct=${product.value.related[i]}&`
  }

  const { data: analogue } =  await useFetch(`${ config.public.baseURL }c/related/?ct=${product.value.category.id}&ct=${product.value.category.id}`)
  // const { data: recommends } = await useFetch(`${ config.public.baseURL }c/prod/${route.params.id}`) ???
  const { data: related } =  await useFetch(`${ config.public.baseURL }c/related/?${relCT}`)
  const { data: recommends } = await useFetch(`${ config.public.baseURL }c/recommend/`)
  const { data: breadcrumbs } = await useFetch(`${ config.public.baseURL }c/breadcrumb/?ct=${product.value.category.id}`)
  
</script>


<template>
  <div class="">
    <p class="text-xs">{{ product }}</p>

    <AppHeader />
    <AppNavbar />
    <BreadCrumbs :breadcrumbs="breadcrumbs" />
    <ProductDetail :product="product" :related="related" :analogue="analogue.slice(0, 2)" />
    <Recommend :recommends="recommends" />

  </div>
</template>