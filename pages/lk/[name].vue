<script setup>
  const { signIn, token, data, status, lastRefreshedAt } = useAuth()

</script>

<template>
  <div class="">
    <AppHeader />
    <AppNavbar />

    <div class="container mx-auto max-w-6xl px-4 lg:px-8">
      
      <div class=" min-h-[50vh]">

        <div v-if="status === 'authenticated'" class="">
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
        </div>

      </div>

    </div>
  </div>
</template>