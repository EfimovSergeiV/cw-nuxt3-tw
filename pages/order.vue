<script setup>
  const config = useRuntimeConfig()
  const route = useRoute()

  const { data: orderinfo, pending: pendingorder, error: ordererr } = await useFetch(`${ config.public.baseURL }o/orderinfo/${ route.hash.slice(1,) }`)
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

    <p class="my-2">{{ orderinfo }}</p>
    <p class="my-2">{{ route.hash.slice(1,) }}</p>
    <p class="my-2">{{ pendingorder }}</p>
    <p class="my-2">{{ ordererr }}</p>

  </div>
</template>