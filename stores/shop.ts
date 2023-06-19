import { defineStore } from 'pinia'


export const useShopStore = defineStore('ShopStore', {
  state: () => ({
    shop: 3,
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
    async sendCoordinates(coordinates: any) {
      const config = useRuntimeConfig()
      const { data }: any = await useFetch(`${ config.public.baseURL }coordinates/`, {
        method: 'POST',
        body: coordinates
      });
      if (data.value) {
        this.adress = data.value
        this.region = data.value.at(-1)
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