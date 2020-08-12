import api from '../../api/equipment'

const namespaced = true

const state = {
  equipment: [],
}

const getters = {
  equipment: (state) => state.equipment,
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