import $baseHTTP from './http-common'

const equipmentApi = {
  getEquipment() {
    return $baseHTTP.get('/equipment/getEquipment')
  },
}

export default equipmentApi
