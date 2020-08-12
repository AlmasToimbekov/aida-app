import $baseHTTP from './http-common'

const materialsApi = {
  getMaterialsWithCategory() {
    return $baseHTTP.get('/materials/getMaterialsWithCategory')
  },
}

export default materialsApi
