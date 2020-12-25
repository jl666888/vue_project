import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bool:true,
    username:'',
    stuNumber:0,
    teach:{name:'XXX',city:'XX校区'},
  },
  mutations: {
    setShow(state,val){
      state.bool = val;
    },
    setName(state,val){
      state.username = val;
    },
    setStuNum(state,val){
      state.stuNumber = val;
    },
    setTeach:function(state,val){
      state.teach = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
