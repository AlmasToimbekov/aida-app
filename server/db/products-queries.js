const { db } = require('./db')

const api = {
  async getProductsByCategory(categoryId) {
    console.log(categoryId)
    return db.any('SELECT * FROM products WHERE category_id = $1', categoryId)
  }
}

module.exports = api