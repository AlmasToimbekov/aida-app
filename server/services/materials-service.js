const service = require('../db/materials-queries')

const api = {
  getMaterialCategories() {
    return service.getMaterialCategories()
  },
  getMaterials() {
    return service.getMaterials()
  },
}

module.exports = api