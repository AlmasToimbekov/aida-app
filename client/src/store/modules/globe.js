import api from '../../api/globe'

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
    console.log(cities)
    commit('set', { type: 'cities', value: cities })
    return cities
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}