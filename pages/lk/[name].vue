<script setup>
  const { signIn, token, data, status, lastRefreshedAt } = useAuth()

</script>

<template>
  <div class="">
    <AppHeader />
    <AppNavbar />

    <div class="container mx-auto max-w-6xl px-4 lg:px-8">
      
      <div class=" min-h-[50vh]">

        <!-- <div v-if="status === 'authenticated'" class="">
          <pre>Status: {{ status }}</pre>
          <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
          <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
          <pre>JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
        </div>

        <div class="py-4">
          <p>Текущие заказы</p>
          <p>История заказов</p>
          <p></p>
          <p></p>
        </div> -->


        <!-- <div class="h-screen flex items-center justify-center">
          <blockquote class="text-6xl font-semibold italic text-center text-gray-700 dark:text-gray-300">
              
              <span class="px-4"></span>
              <span class="before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-blue-600 relative inline-block py-2 my-2 lg:my-0">
                <span class="relative text-white px-10"> ГЛАВНЫЙ СВАРЩИК </span>
              </span>
              <span class="px-4"></span>
              <p class="mt-1"><span class="text-2xl ml-24">интернет магазин</span> GLSVAR.RU</p>
              
            </blockquote>
        </div> -->

      </div>

    </div>
  </div>
</template>