import Vue from 'vue'
import Vuex from 'vuex'

import globe from './modules/globe'
import equipment from './modules/equipment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globe: {
      namespaced: true,
      state: globe.state,
      mutations: globe.mutations,
      actions: globe.actions,
      getters: globe.getters,
    },
    equipment: {
      namespaced: true,
      state: equipment.state,
      mutations: equipment.mutations,
      actions: equipment.actions,
      getters: equipment.getters,
    },
  },
})