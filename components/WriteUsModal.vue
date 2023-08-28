<script setup>
  const config = useRuntimeConfig()
  // const router = useRouter()

  const productsStore = useProductsStore()
  const shopStore = useShopStore()
  const clientStore = useClientStore()
  // const notificationsStore = useNotificationsStore()

  // const props = defineProps(['product'])


</script>



<template>

  <div class="fixed z-50 w-full h-full bg-gray-500/50 backdrop-blur-sm">
    <div class="flex items-center justify-center h-full">
      <div class="h-full w-full flex items-center justify-center">
        

        <div class="container mx-auto px-4 lg:max-w-4xl lg:px-8">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="">

              <div class="flex justify-between items-start px-4 py-2 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white">
                  Сообщение нам
                </h3>
                <button @click="shopStore.showWriteUsModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Закрыть окно</span>
                </button>
              </div>


              <div class="px-4 py-4">
                <div class="grid grid-cols-2 gap-4">
                  <div class="">
                    <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Имя (необязательно)</label>
                    <div class="relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <p class="mdi mdi-account dark:text-gray-300"></p>
                      </div>
                      <input v-model="clientStore.client.person" type="text" id="person" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Иван Иванов">
                    </div>
                  </div>
                  <div class="">
                    <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Электронная почта (необязательно)</label>
                    <div class="relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <p class="mdi mdi-email dark:text-gray-300"></p>
                      </div>
                      <input v-model="clientStore.client.email" type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@domen.com">
                    </div>
                  </div>
                </div>

                <div class="">
                  <label for="message" class="block mt-2 mb-1 text-xs font-medium text-gray-900 dark:text-gray-400">Комментарий к заказу (необязательно)</label>
                  <textarea v-model="clientStore.client.comment" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Напишите что-нибудь..."></textarea>
                </div>
              </div>


              <div class="grid grid-cols-1 items-end justify-between px-6 py-2 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <div class="flex justify-center gap-2 w-full md:justify-end">             
                  
                  <button @click="productsStore.showCartModal">
                    <div class=" text-sm text-gray-100 rounded-lg bg-blue-600 hover:bg-blue-700 border border-gray-300/50 dark:border-gray-500/50 transition-all duration-1000">
                      <div class=" bg-gradient-to-br from-gray-100/20 to-gray-900/40 rounded-lg">
                        <p class="px-5 py-2.5">Отправить сообщение</p>
                      </div>
                    </div>
                  </button>
                  
                  <button @click="shopStore.showWriteUsModal" data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Закрыть окно</button>
                </div>
              </div>


            </div>


          </div>
        </div>


      </div>        
    </div>
  </div>
</template>