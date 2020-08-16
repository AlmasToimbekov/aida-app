import $baseHTTP from './http-common'

const materialsApi = {
  getMaterialCategories() {
    return $baseHTTP.get('/materials/getMaterialCategories')
  },
  getMaterials() {
    return $baseHTTP.get('/materials/getMaterials')
  },
}

export default materialsApi
