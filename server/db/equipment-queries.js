const { db } = require('./db')

const api = {
  async getEquipmentCategories() {
    return db.any(`
      SELECT * FROM categories
      WHERE type = 'equipment'
    `)
  }
}

module.exports = api