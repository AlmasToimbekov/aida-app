const db = require('../db/products-queries')

const api = {
  getProductsByCategory(categoryId) {
    return db.getProductsByCategory(categoryId)
  },
  createProduct(name, category_id) {
    return db.createProduct(name, category_id)
  },
}

module.exports = api