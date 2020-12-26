import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bool:true,
  },
  mutations: {
    setShow(state,val){
      state.bool = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
