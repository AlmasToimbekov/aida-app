import axios from 'axios'

const $baseHTTP = axios.create({
  baseURL: `${process.env.BACKEND_URL || 'http://localhost:3000/api'}` ,
})

const equipmentApi = {
  getEquipment() {
    return $baseHTTP.get('/equipment/getEquipment')
  },
}

export default equipmentApi
