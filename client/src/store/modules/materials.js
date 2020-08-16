import api from '../../api/materials'

const namespaced = true

const state = {
  materialCategories: [],
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
  async getMaterialCategories({ commit }) {
    const materials = await api.getMaterialCategories()
    commit('set', { type: 'materialCategories', value: materials.data })
    return materials
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}