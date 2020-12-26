import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const teach1 = localStorage.getItem('Buy');
export default new Vuex.Store({
  state: {
    bool:true,
    username:'',
    stuNumber:0,
    teach:teach1 ? teach1 : {name:'',city:''},
    buyData:{},
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
    },
    setBuyData:function(state,val){
      state.buyData = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
