const service = require('../db/equipment-queries')

const api = {
  getEquipmentCategories() {
    return service.getEquipmentCategories()
  },
}

module.exports = api