const { db } = require('./db')

const api = {
  async getMaterialsWithCategory() {
    return db.any(`
      SELECT m.*, mc.name as category_name FROM materials m
      LEFT JOIN material_categories mc ON m.category_id = mc.id
    `)
  }
}

module.exports = api