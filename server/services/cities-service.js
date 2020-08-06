const service = require('../db/cities-queries')

const api = {
  getCities() {
    return service.getAllCities()
  },
}

module.exports = api