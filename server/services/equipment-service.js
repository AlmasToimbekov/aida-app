const service = require('../db/equipment-queries')

const api = {
  getEquipmentCategories() {
    return service.getEquipmentCategories()
  },
  getEquipment() {
    return service.getEquipment()
  },
}

module.exports = api