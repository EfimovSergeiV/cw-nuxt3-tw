import { defineStore } from 'pinia'


export const useShopStore = defineStore('ShopStore', {
  state: () => ({
    shop: 3,
    shops: [],
    city: 'Псков',
    adress: [],
    region: [],
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    // increment() {
    //   this.count++
    // },
    // randomizeCounter() {
    //   this.count = Math.round(100 * Math.random())
    // },
    selectShop(shop: any) {
      this.shop = shop
    },
    selectCityMaps(city: any) {
      this.city = city
    },
    writeShops(shops: any) {
      this.shops = shops
    },
    async sendCoordinates(coordinates: any) {
      const config = useRuntimeConfig()
      const { data }: any = await useFetch(`${ config.public.baseURL }coordinates/`, {
        method: 'POST',
        body: coordinates
      });
      if (data.value) {
        this.adress = data.value
        this.region = data.value.at(-1)

        this.shops.forEach((el: any) => {
          if (el.city.toLowerCase() === data.value(-1).toLowerCase()) {
            this.shop = el
          }
        })

        // state.shops.forEach((element) => {
        //   if (element.city.toLowerCase() === adress.at(-1).toLowerCase()) {
        //     state.shop = element
        //   }
      }
    }
  },
})

// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 0,
//   }),
//   actions: {
//     // since we rely on `this`, we cannot use an arrow function
//     increment() {
//       this.count++
//     },
//     randomizeCounter() {
//       this.count = Math.round(100 * Math.random())
//     },
//   },
// })