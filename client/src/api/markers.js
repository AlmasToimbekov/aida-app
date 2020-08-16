import $baseHTTP from './http-common'

const materialsApi = {
  getMarkersByCategories() {
    return $baseHTTP.get('/markers/getMarkersByCategories')
  },
  setMarker(payload) {
    return $baseHTTP.post('/markers/setMarker', payload)
  }
}

export default materialsApi
