import api from '../../api/equipment'

const namespaced = true

const state = {
  equipmentCategories: [],
  equipment: [],
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
  },
  async getEquipment({ commit }) {
    const equipment = await api.getEquipment()
    commit('set', { type: 'equipment', value: equipment.data })
    return equipment
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}