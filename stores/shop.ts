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
    cart: [ { "id": 1335, "vcode": "0700020002", "name": "Сварочный источник Fabricator EM500i", "description": "Fabricator это серия инверторных источников питания для тяжелых условий работы, для сварки MIG/MAG и MMA (ручная дуговая сварка покрытым электродом). Его конструкция рассчитана на то, чтобы выдерживать эксплуатацию в сложных условиях, что делает его идеальным решением для промышленного использования. Идеально подходит для тяжелой промышленности, для использования сплошной и порошковой проволоки совместно с устройством подачи FabricatorFeed.", "promo": false, "discount": null, "rating": "1.9", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/13978-en_ww-mainview-01.webp", "only_price_status": true, "only_price": 280570, "currency": "RUB", "status": "order", "product_comp": [], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_logo.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 8119, "name": "Дополнительные режимы работы", "qname": "1jwq", "value": "MIG/MAG" }, { "id": 8122, "name": "КПД", "qname": "3n8e", "value": "87%" }, { "id": 8121, "name": "Степень защиты", "qname": "ahev", "value": "IP23S" }, { "id": 8120, "name": "Диаметр электрода, мм", "qname": "likf", "value": "0.8 - 1.2" }, { "id": 8118, "name": "Основной режим работы", "qname": "pa0s", "value": "MMA" }, { "id": 8117, "name": "Электропитание, В", "qname": "s7n4", "value": "342-484" } ], "quantity": 1 }, { "id": 721, "vcode": "733921", "name": "СВАРОЧНЫЙ ИНВЕРТОР ESAB LHN 250I PLUS", "description": "Конструкция аппарата LHN 250i Plus имеет высокую прочность, мощность, надежность и другие характеристики, которые облегчат вашу повседневную работу - например, цифровую панель индикации, длинные сварочные кабели и несколько ручек для переноса аппарата. И самый важный момент: большая мощность при сохранении компактности и малого веса. Модель LHN 250i Plus имеет большой рабочий цикл при 250 A с эффективностью до 60%, что дает вам возможность работать целый день.", "promo": false, "discount": null, "rating": "4.3", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/screenshot_19.webp", "only_price_status": true, "only_price": 38052, "currency": "RUB", "status": "order", "product_comp": [], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_logo.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 3941, "name": "Дополнительные режимы работы", "qname": "1jwq", "value": "TIG" }, { "id": 3936, "name": "Габаритные размеры, мм", "qname": "3b0e", "value": "170х446х330" }, { "id": 3939, "name": "Диапазон регулирования сварочного тока, А", "qname": "56np", "value": "30-250" }, { "id": 3937, "name": "Вес, кг", "qname": "7z26", "value": "11" }, { "id": 3940, "name": "Диаметр электрода, мм", "qname": "likf", "value": "1.6-4.0" }, { "id": 3938, "name": "Напряжение холостого хода, В", "qname": "n3wd", "value": "77" }, { "id": 3942, "name": "Основной режим работы", "qname": "pa0s", "value": "MMA" }, { "id": 3935, "name": "Электропитание, В", "qname": "s7n4", "value": "однофазная сеть 220 В 50 Гц" } ], "quantity": 1 }, { "id": 1855, "vcode": "0000001", "name": "ROGUE ES 200I PRO + Маска АСФ 605 + Краги сварщика", "description": "Комплект из сварочного аппарата ESAB ROGUE ES 200I PRO и МАСКИ СВАРЩИКА ХАМЕЛЕОН АСФ 605 + краги сварщика. Rogue—это надежный и долговечный источник питания для профессионального сварщика. Аппарат обеспечивает превосходныеи стабильные сварочные характеристики благодаря использованию новейшей высокопроизводительной силовой электроники и цифрового управления, обеспечивая точную, устойчивую дугу. Rogue идеален для сварки легированных и нелегированных сталей, нержавеющих сталей и чугуна.", "promo": false, "discount": null, "rating": "5.0", "preview_image": "http://127.0.0.1:8000/files/img/c/preview/1_GHQMXJ1_uH7n3CZ.webp", "only_price_status": true, "only_price": 36000, "currency": "RUB", "status": "stock", "product_comp": [], "brand": { "id": 3, "brand": "ESAB", "image": "http://127.0.0.1:8000/files/img/c/brand/esab_logo.png", "carousel": true, "description": "" }, "propstrmodel": [ { "id": 11856, "name": "Габаритные размеры, мм", "qname": null, "value": "403x153x264" }, { "id": 11857, "name": "Вес, кг", "qname": null, "value": "8,4" }, { "id": 11858, "name": "Максимальный сварочный ток, А", "qname": null, "value": "200" }, { "id": 11859, "name": "Напряжение холостого хода, В", "qname": null, "value": "78" }, { "id": 11860, "name": "Диапазон сварочного тока, А", "qname": null, "value": "10-200" }, { "id": 11861, "name": "Частота питающей сети, Гц", "qname": null, "value": "50/60" }, { "id": 11862, "name": "Фазы", "qname": null, "value": "1" }, { "id": 11863, "name": "Рабочая температура, °C", "qname": null, "value": "от -10 до +40" }, { "id": 11864, "name": "* При отсутствии маски или крагов ,последние будут заменены на аналогичные им", "qname": null, "value": "." } ], "quantity": 1 } ] as Product[],
    comp: [] as Product[],
    like: [] as Product[],
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
    count: 0,
  }),
  actions: {
    addToast(msg: any) {
      console.log('addToast')
    },
  },
})