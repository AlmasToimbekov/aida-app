import api from '../../api/equipment'

const namespaced = true

const state = {
  equipmentCategories: [],
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
  async getEquipmentCategories({ commit }) {
    const equipmentCategories = await api.getEquipmentCategories()
    commit('set', { type: 'equipmentCategories', value: equipmentCategories.data })
    return equipmentCategories
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}