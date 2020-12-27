import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const teach1 = localStorage.getItem('Buy');
export default new Vuex.Store({
  state: {
    bool: true,
    username: '',
    stuNumber: 0,
    teach: teach1 ? teach1 : { name: '', city: '' },
    buyData: {},
    grid: [],
    defaltArr: [],
    titleArr: [],
    token: '',
    users: {}
  },
  mutations: {
    setShow(state, val) {
      state.bool = val;
    },
    setName(state, val) {
      state.username = val;
    },
    setStuNum(state, val) {
      state.stuNumber = val;
    },
    setTeach: function (state, val) {
      state.teach = val;
    },
    setBuyData: function (state, val) {
      state.buyData = val;
    },
    setGrid: function (state, val) {
      state.grid = val;
      localStorage.setItem('grid', JSON.stringify(val))
    },
    setDefalt: function (state, val) {
     
        state.defaltArr = val;
        localStorage.setItem('defaltArr', JSON.stringify(val))

    },
    setTitle: function (state, val) {
      state.titleArr = val;
      localStorage.setItem('titleArr', JSON.stringify(val))
    },
    setToken: function (state, val) {
      state.token = val;
      window.localStorage.setItem('token', val)
    },
    setUsers: function (state, val) {
      state.users = val
      window.localStorage.setItem('users', JSON.stringify(val))
    }
  },
  actions: {
  },
  modules: {
  }
})
