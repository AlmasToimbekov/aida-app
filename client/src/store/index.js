import Vue from 'vue'
import Vuex from 'vuex'

import globe from './modules/globe'
import products from './modules/products'
import markers from './modules/markers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globe,
    products,
    markers,
  },
})