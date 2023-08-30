<script setup>
  const config = useRuntimeConfig()
  const route = useRoute()

  const { data: orderinfo, pending: pendingorder, error: errorder } = await useFetch(`${ config.public.baseURL }o/orderinfo/${ route.hash.slice(1,) }`)
// const sendRequest = async () => {
//     if ( (clientStore.client.city) && (clientStore.client.contact) ) {
//       const { data: response } = await useFetch(`${ config.public.baseURL }o/request-price/`, {
//         method: 'POST',
//         body: {
//           city: clientStore.client.city,
//           contact: clientStore.client.contact,
//           product: `id: ${ productsStore.requestPrice.id } vc: ${ productsStore.requestPrice.vcode } name: ${ productsStore.requestPrice.name }`,
//         }
        
//       });

//       notificationsStore.pushToast({ id: 1, type: 'success', text: 'Запрос на стоимость товара успешно отправлен!' })
//       productsStore.clearRequestPrice()

//       // order.value = await response.value
//       // productsStore.clearCartProducts() 
//       // clientStore.saveClientData(clientData)

// o/orderinfo/PSK1156363/

//     } else {
//       errorMsg.value = 'Для отправки запроса заполните все поля.'
//     }
//   }
</script>


<template>
  <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
    <div v-if="orderinfo">
      <p class="my-2">{{ orderinfo.order_number }}</p>
      <p class="my-2">{{ orderinfo.status }}</p>
      <p class="my-2">{{ orderinfo.position_total }}</p>
      <p class="my-2">{{ orderinfo.delivery_summ }}</p>
      <p class="my-2">{{ orderinfo.total }}</p>
      <p class="my-2">{{ orderinfo.client_product }}</p>

      <p class="my-2">{{ route.hash.slice(1,) }}</p>
      <p class="my-2">{{ pendingorder }}</p>
      <p class="my-2">{{ errorder }}</p>    
    </div>
    <div v-else>
      <p>Заказ не найден</p>
    </div>



    <div class="my-8 flex gap-4">

      <div class="w-32 h-8">
        <nuxt-link :to="{ name: 'index' }" class="bg-blue-600 hover:bg-blue-700 flex items-center h-full w-full border dark:border-gray-100/10 rounded-lg transition-all duration-1000">
          <div class="flex items-center gap-2 text-gray-100 bg-gradient-to-br from-gray-100/20 to-gray-900/40 rounded-lg h-full w-full">
            <span class="px-2 mdi mdi-star border-r border-gray-100/50"></span>
            <p class="text-sm "> Избранное</p>
          </div>
        </nuxt-link>
      </div>

      <div class="w-32 h-8">
        <nuxt-link :to="{ name: 'index' }" class="bg-gray-300 hover:bg-white flex items-center h-full w-full border dark:border-gray-100/10 rounded-lg transition-all duration-1000">
          <div class="flex items-center gap-2 text-gray-700 bg-gradient-to-br from-gray-100/20 via-white to-gray-900/20 rounded-lg h-full w-full">
            <span class="px-2 mdi mdi-star border-r border-gray-700/50"></span>
            <p class="text-sm "> Избранное</p>
          </div>
        </nuxt-link>
      </div>

    </div>

  </div>
</template>