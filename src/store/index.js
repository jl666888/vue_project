import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否显示底部导航
    isShowFooter: true,
  },
  mutations: {
    isShowFooterNav(state, val) {
      state.isShowFooter = val;
    },
  },
  actions: {
  },
  modules: {
  }
})
