const { db } = require('./db')

const api = {
  async getProductsByCategory(categoryId) {
    return db.any('SELECT * FROM products WHERE category_id = $1', categoryId)
  },
  async createProduct(name, category_id) {
    return db.any('INSERT INTO products(name, category_id) VALUES ($1, $2)', [name, category_id])
  }
}

module.exports = api