import {
  defineStore
} from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: null,
    total: 0,
    keyword: "",
    // error: null,
    cartItems: [],
    // productsAll: null,
  }),
  getters: {
    getDiscount: (state) => {
      return (product) => Math.ceil(product.price - (product.price / 100 * product.discountPercentage));;
    },
  },
  actions: {
    getProducts(item, total) {
      this.products = item
      this.total = total
    },
    getSearch(keyword = "") {
      this.keyword = keyword
    },
    addToCart(product) {
      const test = this.cartItems.find(item => item.id == product.id)
      if (test?.id == product.id) {
        const productIndex = this.cartItems.findIndex(item => item.id == product.id)
        this.cartItems[productIndex].count++
      } else {
        this.cartItems.push({ ...product, count: 1 })
      }
      // console.log(this.cartItems);

    },
    deleteProduct(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id)
    },
  },
});