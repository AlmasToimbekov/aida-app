import axios from 'axios'

const $baseHTTP = axios.create({
  baseURL: `${process.env.BACKEND_URL || 'http://localhost:3000/api'}` ,
})

const globeApi = {
  getCities() {
    return $baseHTTP.get('/globe/getCities')
  },
}

export default globeApi
