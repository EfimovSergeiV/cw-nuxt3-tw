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

//          o/orderinfo/PSK1156363/

//     } else {
//       errorMsg.value = 'Для отправки запроса заполните все поля.'
//     }
//   }
</script>


<template>

  <div class="">
    <AppHeader />
    <AppNavbar />


    <div class="container mx-auto px-4 max-w-6xl lg:px-8">
      
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

    </div>

  </div>
</template>