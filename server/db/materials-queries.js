const { db } = require('./db')

const api = {
  async getMaterialCategories() {
    return db.any(`
      SELECT * FROM categories
      WHERE type = 'materials'
    `)
  }
}

module.exports = api