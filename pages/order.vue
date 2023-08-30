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


    <div class="antialiased text-gray-900 px-6">
      <div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
        <div class="py-8">
          <h1 class="text-4xl font-bold">@tailwindcss/forms examples</h1>
          <p class="mt-2 text-lg text-gray-600">
            An opinionated form reset designed to make form elements easy to style with utility
            classes.
          </p>
          <div class="mt-4 flex space-x-4">
            <a class="text-lg underline" href="https://github.com/tailwindlabs/tailwindcss-forms"
              >Documentation</a
            >
            <a class="text-lg underline" href="/kitchen-sink.html">Kitchen Sink</a>
          </div>
        </div>
        <div class="py-12">
          <h2 class="text-2xl font-bold">Unstyled</h2>
          <p class="mt-2 text-lg text-gray-600">This is how form elements look out of the box.</p>
          <div class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input type="text" class="mt-1 block w-full" placeholder="" />
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input type="email" class="mt-1 block w-full" placeholder="john@example.com" />
              </label>
              <label class="block">
                <span class="text-gray-700">When is your event?</span>
                <input type="date" class="mt-1 block w-full" />
              </label>
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select class="block w-full mt-1">
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-700">Additional details</span>
                <textarea class="mt-1 block w-full" rows="3"></textarea>
              </label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input type="checkbox" checked />
                      <span class="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-12">
          <h2 class="text-2xl font-bold">Simple</h2>
          <div class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input
                  type="text"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder=""
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input
                  type="email"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">When is your event?</span>
                <input
                  type="date"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select
                  class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-700">Additional details</span>
                <textarea
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="3"
                ></textarea>
              </label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                        checked
                      />
                      <span class="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-12">
          <h2 class="text-2xl font-bold">Underline</h2>
          <div class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input
                  type="text"
                  class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  placeholder=""
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input
                  type="email"
                  class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">When is your event?</span>
                <input
                  type="date"
                  class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select
                  class="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                >
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-700">Additional details</span>
                <textarea
                  class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  rows="2"
                ></textarea>
              </label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black"
                      />
                      <span class="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-12">
          <h2 class="text-2xl font-bold">Solid</h2>
          <div class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input
                  type="text"
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder=""
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input
                  type="email"
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">When is your event?</span>
                <input
                  type="date"
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select
                  class="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                >
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-700">Additional details</span>
                <textarea
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  rows="3"
                ></textarea>
              </label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                      />
                      <span class="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>