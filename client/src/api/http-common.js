import axios from "axios";
import store from '../store';

const $baseHTTP = axios.create({
  baseURL: "/api",
  headers: {
    "Content-type": "application/json"
  }
});

$baseHTTP.interceptors.response.use(
  (response) => response,
  (error) => {
    // handle error
    if (error.response) {
      store.dispatch('tools/setSnackbar', error.response.data.message || 'Произошла ошибка')
    }
    return Promise.reject(error)
  },
)

export default $baseHTTP