const namespaced = true

const state = {
  message: '',
  confirm: {
    show: false,
    title: null,
    text: null,
    resolveText: null,
    rejectText: null,
    persistent: false,
    promise: null,
    deferred: null,
  },
}

const getters = {
}

const mutations = {
  set(state, { type, value }) {
    state[type] = value
  },
}

const actions = {
  setSnackbar({ commit }, payload) {
    commit('set', { type: 'message', value: payload })
  },
  showConfirm({ commit, state }, payload) {
    let deferred = null
    const promise = new Promise(((resolve, reject) => {
      deferred = { resolve: resolve, reject: reject }
    }))
    commit('set', {
      type: 'confirm',
      value: {
        show: true,
        title: payload.title,
        text: payload.text,
        resolveText: payload.resolveText,
        rejectText: payload.rejectText,
        persistent: payload.persistent,
        promise: promise,
        deferred: deferred,
      },
    })
    return state.confirm.promise
  },
  hideConfirm({ commit }) {
    commit('set', {
      type: 'confirm',
      value: {
        show: false,
        title: null,
        text: null,
        resolveText: null,
        rejectText: null,
        persistent: false,
        promise: null,
        deferred: null,
      },
    })
  },

  async confirm({ dispatch }, payload) {
    return dispatch('showConfirm', ({
      title: payload.title,
      text: payload.text,
      persistent: payload.persistent,
      resolveText: payload.resolveText ? payload.resolveText : 'Да',
      rejectText: payload.rejectText ? payload.rejectText : 'Нет',
    }))
  },
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}
