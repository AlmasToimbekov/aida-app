const { db } = require('./db')

const api = {
  async getMarkersByCategories() {
    return db.any(`
      SELECT markers.*, p.name as name, c.code as category FROM markers
      LEFT JOIN products p on markers.product_id = p.id
      LEFT JOIN categories c on p.category_id = c.id
    `)
  },

  async setMarker(markerInfo) {
    console.log(markerInfo)
    return db.none('INSERT INTO markers(user_id, coordinates, product_id) ' +
      'VALUES (${user_id}, ${coordinates}, ${product_id})',
    markerInfo)
  }
}

module.exports = api