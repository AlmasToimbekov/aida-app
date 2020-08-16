import api from '../../api/markers'

const namespaced = true

const state = {
  markersByCategories: [],
}

const getters = {
}

const mutations = {
  set(state, { type, value }) {
    state[type] = value
  },
  push(state, { type, value }) {
    state[type].push(value)
  },
}

const actions = {
  async getMarkersByCategories({ commit }) {
    const markers = await api.getMarkersByCategories()
    commit('set', { type: 'markersByCategories', value: markers.data })
    return markers
  },
  async setMarker({ dispatch }, payload) {
    const markers = await api.setMarker(payload)
    await dispatch('getMarkersByCategories')
    return markers
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}