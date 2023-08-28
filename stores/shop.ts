import { defineStore } from 'pinia'


interface Product {
  id: number
  vcode: string
  name: string
  rating: any
  only_price: any
  status: string
  preview_image: string
  description: string,
  propstrmodel: any
  quantity: number
}

interface Client {
  shop_id: number
  region_code: string
  person:string
  phone: string
  email: string
  comment: any
  delivery:string
  adress: string

  entity: string
  company: string
  legaladress: string
  inn: string
  kpp: string
  okpo: string
  bankname: string
  currentacc: string
  corresponding: string
  bic: string
}

interface ProductImages {
  id: number,
  image: string,
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
    cart: [] as Product[],  /// Товары в корзине
    comp: [] as Product[],  /// Товары в сравнении
    like: [] as Product[],  /// Товары в избраннном
    requestPrice: null as Product | null, /// Модальное на запрос стоимости товара
    cartAlert: false, /// Уведомление о добавленном товаре (модальное окно)
    cartAlertBlock: false,  /// Уведомление о добавленном товаре (модальное окно)
    productImages: null as ProductImages[] | null, /// Отображение изображений товаров
  }),
  getters: {
    productInCart: (state) => (id: number) => {
      return state.cart.find((item) => item.id === id);
    },
    productInComp: (state) => (id: number) => {
      return state.comp.find((item) => item.id === id);
    },
    productInLike: (state) => (id: number) => {
      return state.like.find((item) => item.id === id);
    },
  },
  actions: {
    /// Добавление или удаление товаров
    addProduct(target: string, payload: Product) {
      const product: Product = { ...payload}
      
      /// Добавление или удаление товара в корзину
      if (target === 'cart') {
        product.quantity = 1
        const index = this.cart.findIndex((item) => item.id === product.id)
        if (index === -1){

          this.cart.push(product)

          if (!this.cartAlertBlock) {
            setTimeout(() => {
              this.cartAlert = !this.cartAlert
            }, 800);
          }

        } else {
          this.cart.splice(index, 1)
        }
      }
      /// Добавление или удаление товара в сравнение
      if (target === 'comp') {
        const index = this.comp.findIndex((item) => item.id === product.id)
        if (index === -1){
          this.comp.push(product)
        } else {
          this.comp.splice(index, 1)
        }
      }
      /// Добавление или удаление товара в избранные
      if (target === 'like') {
        const index = this.like.findIndex((item) => item.id === product.id)
        if (index === -1){
          this.like.push(product)
        } else {
          this.like.splice(index, 1)
        }
      }
    },
    /// Изменение кол-ва товаров в корзине
    changeQuantity( product: any, action: string ) {
      const cartProduct = this.cart.find((item) => item.id === product.id)
      if ( cartProduct &&  cartProduct.quantity > 1 && action === 'del' ) {
        cartProduct.quantity--
      } else if ( cartProduct && action === 'add') {
        cartProduct.quantity++
      }
    },
    clearCartProducts() {
      this.cart = []
    },
    showCartModal() {
      this.cartAlert = !this.cartAlert
    },
    addRequestPrice(product: any) {
      this.requestPrice = product
    },
    clearRequestPrice() {
      this.requestPrice = null
    },
    showProductImages(images: any) {
      this.productImages = images
      
    },
    clearProductImages() {
      this.productImages = null
    }
  },
})


export const useClientStore = defineStore('ClientStore', {
  /// Данные клиента 
  state: () => ({
    client: {} as Client,
  }),
  actions: {
    saveClientData(data: any) {
      this.client = data
      this.client.comment = null
    },
  },
})


export const useNotificationsStore = defineStore('NotificationsStore', {
  /// Уведомления и всплывающие окна 
  state: () => ({
    filterComponent: false,
    toasts: [
      { id: 1, type: 'success', text: 'Товар был добавлен в сравнение'},
      { id: 2, type: 'warning', text: 'Товар был добавлен в сравнение'},
      { id: 3, type: 'danger', text: 'Товар не был добавлен в сравнение'},
      { id: 4, type: 'info', text: 'Товар был добавлен в сравнение'},
    ]
  }),
  actions: {
    statusFilterComponent() {
      this.filterComponent = !this.filterComponent
    },
    addToast() {
      console.log('ADD TOAST')
    }
  },
})