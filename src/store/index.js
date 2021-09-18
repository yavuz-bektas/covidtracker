import { createStore } from 'vuex'

export default createStore({
  state: {
    stats: {},
    countries:{}
  },
  mutations: {
    setStatsData(state, payload) {
      state.stats = payload
    },
    setCountriesData(state, payload) {
      state.countries = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
