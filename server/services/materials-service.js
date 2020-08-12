const service = require('../db/materials-queries')

const api = {
  getMaterialsWithCategory() {
    return service.getMaterialsWithCategory()
  },
}

module.exports = api