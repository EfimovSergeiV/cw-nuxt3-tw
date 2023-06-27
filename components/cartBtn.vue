<script setup>
  const props = defineProps(['product'])
  const productsStore = useProductsStore()
  const notificationsStore = useNotificationsStore()
</script>



<template>
  <div class="">
    <div v-if="productsStore.productInCart(props.product.id)">
      <button @click="productsStore.addProduct('cart', props.product)" class="">
        <div class=" text-sm text-gray-100 rounded-lg bg-blue-600 hover:bg-blue-700 border border-gray-300/50 dark:border-gray-500/50 transition-all duration-1000">
          <div class=" bg-gradient-to-br from-gray-100/20 to-gray-900/40 rounded-lg">
            <p class="text-white text-base w-32 md:w-52 py-2.5">В корзине</p>
          </div>
        </div>
      </button>
    </div>
    <div v-else>
      <button @click="productsStore.addProduct('cart', props.product)" class="">
        <div class=" text-sm text-gray-100 rounded-lg bg-blue-600 hover:bg-blue-700 border border-gray-300/50 dark:border-gray-500/50 transition-all duration-1000">
          <div class=" bg-gradient-to-br from-gray-100/20 to-gray-900/40 rounded-lg">
            <p class="text-white text-base w-32 md:w-52 py-2.5">Купить</p>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>