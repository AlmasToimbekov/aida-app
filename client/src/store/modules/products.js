import api from '../../api/products'

const namespaced = true

const state = {
  equipmentCategories: [],
  equipment: [],
  materialCategories: [],
  materials: [],
  selectedProducts: [],
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
  },

  async getMaterialCategories({ commit }) {
    const materials = await api.getMaterialCategories()
    commit('set', { type: 'materialCategories', value: materials.data })
    return materials
  },
  async getMaterials({ commit }) {
    const materials = await api.getMaterials()
    commit('set', { type: 'materials', value: materials.data })
    return materials
  },
  async getProductsByCategory({ commit }, categoryId) {
    const selectedProducts = await api.getProductsByCategory(categoryId)
    commit('set', { type: 'selectedProducts', value: selectedProducts.data })
    return selectedProducts
  },
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}