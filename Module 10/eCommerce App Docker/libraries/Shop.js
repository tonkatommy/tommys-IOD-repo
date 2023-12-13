class Shop {
  constructor() {
    this.axios = require("axios");
    this.id = Math.random().toString(36).substring(2, 8);
  }

  #log(value) {
    console.log(`Shop :${this.id}: Value: ${value}`);
  }

  getProducts() {
    this.#log("Getting products...");
    return this.axios.get("https://fakestoreapi.com/products");
  }

  getCategories() {
    this.#log("Getting categories...");
    return this.axios.get("https://fakestoreapi.com/products/categories");
  }
}

module.exports = Shop;
