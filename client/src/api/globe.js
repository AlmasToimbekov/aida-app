import $baseHTTP from './http-common'

const globeApi = {
  getCities() {
    return $baseHTTP.get('/globe/getCities')
  },
}

export default globeApi
