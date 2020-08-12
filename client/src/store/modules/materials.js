import api from '../../api/materials'

const namespaced = true

const state = {
  materialsWithCategory: [],
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
  async getMaterialsWithCategory({ commit }) {
    const materials = await api.getMaterialsWithCategory()
    commit('set', { type: 'materialsWithCategory', value: materials.data })
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