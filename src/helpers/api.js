import axiosProducts from "@/helpers/axiosClient";

const apiProducts = {
  getProducts(start, search, limit) {
    const url = `products/search?q=${search}&limit=${limit}&skip=${start}`;
    return axiosProducts.get(url);
  },
  getInfo(id) {
    const url = `products/${id}/`;
    return axiosProducts.get(url);

  },
  getCategories() {
    const url = `products/categories`;
    return axiosProducts.get(url);
  },
  getCategoryTitle(title) {
    const url = `products/category/${title}`
    return axiosProducts.get(url);
  },

};

export default apiProducts;