<script setup>
  const props = defineProps(['product'])
  const productsStore = useProductsStore()
  const notificationsStore = useNotificationsStore()
  
</script>


<template>
  <div>

    <div class="">
      <div class="w-5 h-5 flex items-center justify-center border-2 border-blue-600 rounded-md cursor-pointer">

        <div v-if="productsStore.productInLike(props.product.id)" class="">
          <button @click="productsStore.addProduct('like', props.product); notificationsStore.pushToast({id: props.product.id, type: 'success', text:'Товар удалён из избранных'})" class="mdi mdi-check-bold text-gray-700 dark:text-gray-300"></button>
        </div>
        <div v-else class="">
          <button @click="productsStore.addProduct('like', props.product); notificationsStore.pushToast({id: props.product.id, type: 'success', text:'Товар добавлен в избранные'})" class="w-5 h-5"></button>
        </div>

      </div>      
    </div>

  </div>
</template>