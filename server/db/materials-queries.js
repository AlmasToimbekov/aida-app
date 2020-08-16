const { db } = require('./db')

const api = {
  async getMaterialCategories() {
    return db.any(`
      SELECT * FROM categories
      WHERE type = 'materials'
    `)
  },
  async getMaterials() {
    return db.any(`
      WITH _material_ids as (
        SELECT id
        FROM categories
        WHERE type = 'materials'
      )
      SELECT *
      FROM products
      WHERE category_id = ANY (SELECT id FROM _material_ids)
    `)
  }
}

module.exports = api