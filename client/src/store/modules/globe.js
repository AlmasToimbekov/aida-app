import api from '../../api/globe'

const namespaced = true

const state = {
  cities: [],
}

const getters = {
  cities: (state) => state.cities,
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
  async getCities({ commit }) {
    const cities = await api.getCities()
    commit('set', { type: 'cities', value: cities.data })
    return cities
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}