import $baseHTTP from './http-common'

const equipmentApi = {
  getEquipmentCategories() {
    return $baseHTTP.get('/equipment/getEquipmentCategories')
  },
}

export default equipmentApi
