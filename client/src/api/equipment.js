import $baseHTTP from './http-common'

const equipmentApi = {
  getEquipmentCategories() {
    return $baseHTTP.get('/equipment/getEquipmentCategories')
  },
  getEquipment() {
    return $baseHTTP.get('/equipment/getEquipment')
  },
}

export default equipmentApi
