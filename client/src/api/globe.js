import axios from 'axios'

const $baseHTTP = axios.create({
  baseURL: `${process.env.BACKEND_URL}`,
})

const globeApi = {
  getCities(payload) {
    return $baseHTTP.get('/cities', payload)
  },
}

export default globeApi
