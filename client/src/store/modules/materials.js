import api from '../../api/materials'

const namespaced = true

const state = {
  materialCategories: [],
  materials: [],
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
  },
  async getMaterials({ commit }) {
    const materials = await api.getMaterials()
    commit('set', { type: 'materials', value: materials.data })
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