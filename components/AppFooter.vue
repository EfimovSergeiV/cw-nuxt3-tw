<script setup>

  const { data: brands } = await useFetch('https://api.glsvar.ru/c/brands/')

</script>


<template>
  <div class="mx-auto px-4 max-w-6xl lg:px-8">
    <div class="bg-white dark:bg-gray-800 rounded-t-md border-t border-x border-gray-200 dark:border-gray-700 px-4 mt-2">

      <div class="md:flex md:justify-between items-center py-4">
        <div class="flex py-4">
          <img src="/images/vk-logo.svg" alt="vk-logo" width="20px" height="20px"/>
          <a href="https://vk.com/glsvar" target="_blank" class="font-bold text-base mx-2">МЫ ВКОНТАКТЕ</a>
        </div>
        <div class="w-full md:w-1/2">
          <p class="text-[10px] md:text-xs text-right my-3 select-none">
            Все цены и материаллы, указанные на сайте www.glsvar.ru, приведены как справочная информация и не являются публичной офертой, определяемой положениями ст. 437 ГК РФ, и могут быть изменены в любое время без предупреждения. 
            Для получения подробной информации о стоимости, сроках и условиях поставки просьба обращаться по указанным на сайте телефонам.
          </p>          
        </div>
      </div>


      <div class="">
        <div class="md:flex md:justify-between">
          <ul class="flex flex-wrap items-center justify-center text-xs mt-3 md:text-sm sm:mt-0 md:order-last py-2 relative">
            <li>
              <nuxt-link :to="{ name: 'policy'}" class="mr-4 md:mr-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Политика обработки данных</nuxt-link>
            </li>

            <li>

              <div class="group">
                <nuxt-link :to="{ name: 'about' }" class="mr-4 md:mr-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Производители</nuxt-link>
                
                <div class="absolute bottom-0 left-0 translate-y-0 group-hover:-translate-y-4 py-4 w-full transition invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50">
                  <div class="bg-white border border-gray-500/50 rounded-md">
                    <div class="grid grid-cols-4 gap-2 px-4 py-2">
                      <div v-for="brand in brands" :key="brand.id" class="py-1">
                        <nuxt-link class="text-gray-700 :hover:text-gray-900 text-xs" :to="{ name: 'prods', query: { brnd: brand.id, page: 1 }}">{{ brand.brand }}</nuxt-link>
                      </div>                      
                    </div>
                  </div>
                </div>

              </div>

            </li>

            <li>
              <nuxt-link :to="{ name: 'about' }" class="mr-4 md:mr-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Сертификаты</nuxt-link>
            </li>

            <li>
              <button @click="showAllert()" class="mr-4 md:mr-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Способы оплаты</button>
            </li>
            <li>
              <button @click="showAllert()" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Доставка</button>
            </li>
          </ul>
          <span class="text-xs text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 flex items-end justify-center md:justify-start py-2">© 2023 <p class="mx-1">Главный сварщик</p></span>
        </div>
      </div>

    </div>
  </div>
</template>