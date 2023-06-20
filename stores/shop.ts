import { defineStore } from 'pinia'


interface Product {
  id: number
  vcode: string
  name: string
  rating: any
  only_price: any
  status: string
  preview_image: string
  propstrmodel: any
  quantity: number
}


export const useShopStore = defineStore('ShopStore', {
  /// Определение локации и магазина пользователя
  state: () => ({
    shop: null,
    shops: [],
    city: 'Псков',
  }),
  actions: {
    selectShop(shop: any) {
      this.shop = shop
    },
    selectCityMaps(city: any) {
      this.city = city
    },
    writeShops(shops: any) {
      this.shops = shops
      this.shop = shops.value[0]
    },
    async sendCoordinates(coordinates: any) {
      const config = useRuntimeConfig()
      const { data }: any = await useFetch(`${ config.public.baseURL }coordinates/`, {
        method: 'POST',
        body: coordinates
      });
      if (data.value) {
        this.city = data.value.at(-1)
        this.shops.forEach((el: any) => {
          if (el.city.toLowerCase() === this.city.toLowerCase()) {
            this.shop = el
          }
        })
      }
    }
  },
})

export const useProductsStore = defineStore('ProductsStore', {
  /// Манипуляции с товарами. Сравнение, корзина, избранное Notifications
  state: () => ({
    cart: [] as Product[],
    comp: [] as Product[],
    like: [] as Product[],
  }),
  actions: {
    addProduct(target: string, payload: Product) {
      const product: Product = { ...payload}
      
      if (target === 'cart') {
        product.quantity = 1 
        this.cart.push(product)

      } 
      if (target === 'comp') {
        this.comp.push(product)

      }
      if (target === 'like') {
        this.like.push(product)
        
      }
    }

  },
})

export const useNotificationsStore = defineStore('NotificationsStore', {
  /// Уведомления и всплывающие окна 
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
})