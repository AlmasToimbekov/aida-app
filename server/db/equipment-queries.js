const { db } = require('./db')

const api = {
  async getEquipmentCategories() {
    return db.any(`
      SELECT * FROM categories
      WHERE type = 'equipment'
    `)
  },
  async getEquipment() {
    return db.any(`
      WITH _material_ids as (
        SELECT id
        FROM categories
        WHERE type = 'equipment'
      )
      SELECT *
      FROM products
      WHERE category_id = ANY (SELECT id FROM _material_ids)
    `)
  }
}

module.exports = api