<script setup>
import { onMounted } from 'vue'
const shopStore = useShopStore()

onMounted(() => {
  if ("geolocation" in navigator) {
    /* местоположение доступно */
    navigator.geolocation.getCurrentPosition(position => {
      let location = {
        "latitude": position.coords.latitude, 
        "longitude": position.coords.longitude 
      }

      shopStore.sendCoordinates(location)

      // this.sendCoordinates(location)
    });
  } else {
    /* местоположение НЕ доступно */
  }

})

</script>

<template>
  <div class="bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300">
    <div id="background-page" class="bg-fixed bg-no-repeat bg-[center_100px] bg-cover bg-[url('images/footer-bg.webp')] dark:bg-[url('images/footer-dark-bg.webp')] min-h-screen">
      <div class="container mx-auto">
        <AppHeader />
        <!-- <TopSlider />
        <AppNavbar /> -->
        <slot />
        <AppFooter />
      </div>
    </div>
  </div>
</template>