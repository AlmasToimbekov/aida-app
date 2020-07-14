import Vue from 'vue'
import Vuex from 'vuex'

import globe from './modules/globe'

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
  },
})