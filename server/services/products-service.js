const db = require('../db/products-queries')

const api = {
  getProductsByCategory(categoryId) {
    return db.getProductsByCategory(categoryId)
  },
}

module.exports = api