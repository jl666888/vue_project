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
    Name1:[],
    grid:[],
    defaltArr:[],
    titleArr:[],
    token:'',
    users:{},
    Suc:'',
    Res:'',
    BuySuccess:'',
    Buydefeat:'',
  },
  mutations: {
    setSuccess(state,val){
      state.BuySuccess = val;
    },
    setDefeat(state,val){
      state.Buydefeat = val;
    },
    setRes(state,val){
      state.Res = val;
    },
    setName1(state,val){
      state.Name1 = val;
    },
    setShow(state,val){
      state.bool = val;
    },
    setName(state, val) {
      state.username = val;
    },
    setStuNum(state, val) {
      state.stuNumber = val;
    },
    setSuc(state,val){
      state.Suc = val;
    },
    setTeach:function(state,val){
      state.teach = val;
    },
    setBuyData: function (state, val) {
      state.buyData = val;
      localStorage.setItem('BuyData',JSON.stringify(val))
    },
    setGrid: function (state, val) {
      state.grid = val;
      localStorage.setItem('grid', JSON.stringify(val))
    },
    setDefalt: function (state, val) {
     
        state.defaltArr = val;
        localStorage.setItem('defaltArr', JSON.stringify(state.defaltArr))

    },
    setTitle: function (state, val) {
      state.titleArr = val;
      localStorage.setItem('titleArr', JSON.stringify(val))
    },
    setToken: function (state, val) {
      state.token = val;
      document.cookie=`${val.name}=${val.val};expires=${val.time};path=/`
      
    },
    setUsers: function (state, val) {
      state.users = val
      window.localStorage.setItem('users', JSON.stringify(val))
    },
   
  },
  actions: {
  },
  modules: {
  }
})
