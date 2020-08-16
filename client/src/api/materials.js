import $baseHTTP from './http-common'

const materialsApi = {
  getMaterialCategories() {
    return $baseHTTP.get('/materials/getMaterialCategories')
  },
}

export default materialsApi
