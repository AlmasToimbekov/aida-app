import $baseHTTP from './http-common'

const productsApi = {
  getEquipmentCategories() {
    return $baseHTTP.get('/equipment/getEquipmentCategories')
  },
  getEquipment() {
    return $baseHTTP.get('/equipment/getEquipment')
  },

  getMaterialCategories() {
    return $baseHTTP.get('/materials/getMaterialCategories')
  },
  getMaterials() {
    return $baseHTTP.get('/materials/getMaterials')
  },

  getProductsByCategory(categoryId) {
    return $baseHTTP.get(`/products/getProductsByCategory/${categoryId}`)
  },
}

export default productsApi
