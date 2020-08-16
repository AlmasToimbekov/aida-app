const service = require('../db/materials-queries')

const api = {
  getMaterialCategories() {
    return service.getMaterialCategories()
  },
}

module.exports = api