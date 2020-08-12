import Vue from 'vue'
import Vuex from 'vuex'

import globe from './modules/globe'
import equipment from './modules/equipment'
import materials from './modules/materials'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globe,
    equipment,
    materials,
  },
})