<script setup>
  const colorMode = useColorMode()
  // const route = useRoute()

  // const { data: widebanners } = await useFetch('http://127.0.0.1:8000/c/widebanners/')
  // console.log(route.params.id)
</script>


<template>
  <div class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8">

    <p class="p-4 pb-2">
        <select
          v-model="colorMode.preference"
          class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </p>


  </div>
</template>