const { db } = require('./db')

const api = {
  async getAllCities() {
    return db.any('select * from cities')
  }
}

module.exports = api