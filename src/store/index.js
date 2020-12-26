import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    grid:[],
    defaltArr:[],
    titleArr:[],
    bool:true,
    token:''
  },
  mutations: {
    setGrid:function(state,val){
      state.grid = val;
      localStorage.setItem('grid',JSON.stringify(val))
    },
    setDefalt:function(state,val){
      state.defaltArr = val;
      localStorage.setItem('defaltArr',JSON.stringify(val))
    },
    setTitle:function(state,val){
      state.titleArr = val;
      localStorage.setItem('titleArr',JSON.stringify(val))
    },
    setShow:function(state,val){
      state.bool = val;
    },
    setToken:function(state,val){
      state.token = val;
      window.localStorage.setItem('token',val)
    }
  },
  actions: {
  },
  modules: {
  }
})
