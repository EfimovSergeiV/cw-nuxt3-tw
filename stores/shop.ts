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
    // cart: [] as Product[],
    cart: [ { "id": 170, "vcode": "0460300880", "name": "Сварочный инвертор ESAB Caddy Arc 251i, A32", "description": "Аппарат Caddy оснащен большими разъемами ОКС 50 дпя выдерживания больших нагрузок. Благодаря компактной конструкции и поглощающему удары полимерному корпусу он отличается легкостью и удобством транспортировки. Большой блок охлаждения и тщательно выполненная конструкция обеспечивают длительный срок службы и позволяют работать даже в самых сложных условиях. Новый контроллер ArcPlus дополнительно оптимизирует процесс сварки, уменьшает разбрызгивание и улучшает повторное возбуждение дуги.", "promo": false, "discount": null, "rating": "1.9", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/251i.webp", "only_price_status": true, "only_price": 280790, "currency": "RUB", "status": "order", "product_comp": [], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_logo.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 9898, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "418x188x208" }, { "id": 855, "name": "Максимальный сварочный ток, А", "qname": "jnzs", "value": "250" }, { "id": 9899, "name": "Напряжение холостого хода, В", "qname": "n3wd", "value": "65" }, { "id": 854, "name": "Основной режим работы", "qname": "pa0s", "value": "MMA" }, { "id": 853, "name": "Электропитание, В", "qname": "s7n4", "value": "трехфазная сеть 380 В 50 Гц" }, { "id": 9900, "name": "Частота питающей сети, Гц", "qname": null, "value": "50/60" }, { "id": 9901, "name": "Потребляемая мощность, В", "qname": null, "value": "400" } ], "quantity": 1 }, { "id": 161, "vcode": "0460100880", "name": "Сварочный инвертор ESAB Origo Tig 4300iw AC/DC, TA24 AC/DC", "description": "Origo Tig 4300i AC/DC представляет собой источник питания для дуговой сварки вольфрамовым электродом в защитном газе (TIG), который можно также использовать для ручной дуговой сварки металлическим плавящимся электродом (ММА). Источник питания для дуговой сварки предусматривает возможность эксплуатации как с переменным (АС), так и с постоянным (DC) током.", "promo": false, "discount": null, "rating": "4.3", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/4300iw.webp", "only_price_status": true, "only_price": 1265770, "currency": "RUB", "status": "order", "product_comp": [], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_logo.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 820, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "776x625x394" }, { "id": 819, "name": "Диапазон регулирования сварочного тока, А", "qname": "56np", "value": "4-430" }, { "id": 818, "name": "Вес, кг", "qname": "7z26", "value": "95" }, { "id": 821, "name": "Электропитание, В", "qname": "s7n4", "value": "трехфазная сеть 380 В 50 Гц" } ], "quantity": 1 }, { "id": 1705, "vcode": "0700500079", "name": "ROGUE ES 200I PRO с НАКС", "description": "Rogue—это надежный и долговечный источник питания для профессионального сварщика. Аппарат обеспечивает превосходныеи стабильные сварочные характеристики благодаря использованию новейшей высокопроизводительной силовой электроники и цифрового управления, обеспечивая точную, устойчивую дугу.\r\n\r\nRogue идеален для сварки легированных и нелегированных сталей, нержавеющих сталей и чугуна. Настройки форсирования дуги (Arc Force) и горячего старта (Hot Start) регулируются и помогают сварщику точно задать характеристики, соответствующие конкретной производственной задаче. Цифровой микропроцессор служит для точного управления всеми функциями и обеспечивает лучшие в своем классе показатели сварки во всем диапазоне тока аппарата. Аппарат Rogue можно использовать с электродами диаметром до 4,0 мм.", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/1_GHQMXJ1.webp", "only_price_status": true, "only_price": 36560, "currency": "RUB", "status": "order", "product_comp": [], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_logo.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 10051, "name": "Габаритные размеры, мм", "qname": null, "value": "403x153x264" }, { "id": 10052, "name": "Вес, кг", "qname": null, "value": "8,4" }, { "id": 10053, "name": "Максимальный сварочный ток, А", "qname": null, "value": "200" }, { "id": 10054, "name": "Напряжение холостого хода, В", "qname": null, "value": "78" }, { "id": 10055, "name": "Диапазон сварочного тока, А", "qname": null, "value": "10-200" }, { "id": 10056, "name": "Частота питающей сети, Гц", "qname": null, "value": "50/60" }, { "id": 10057, "name": "Фазы", "qname": null, "value": "1" }, { "id": 10058, "name": "Рабочая температура, °C", "qname": null, "value": "от -10 до +40" } ], "quantity": 1 } ] as Product[],
    comp: [] as Product[],
    like: [] as Product[],
    cartAlert: false,
    cartAlertBlock: false,
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
            }, 600);
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