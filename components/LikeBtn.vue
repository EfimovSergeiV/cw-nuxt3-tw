<script setup>
  const props = defineProps(['product'])
  const productsStore = useProductsStore()
  
</script>


<template>
  <div>

    <div class="">
      <div class="w-5 h-5 flex items-center justify-center border-2 border-blue-600 rounded-md cursor-pointer">
        <transition name="fade">
          <div v-if="true" class="">
            <button @click="productsStore.addProduct('like', props.product) && addToast('Товар удалён из избранных')" class="mdi mdi-check-bold text-gray-700 dark:text-gray-300"></button>
          </div>
          <div v-else class="">
            <button @click="productsStore.addProduct('like', props.product) && addToast('Товар добавлен в избранные')" class="w-5 h-5"></button>
          </div>
        </transition>
      </div>      
    </div>

  </div>
</template>