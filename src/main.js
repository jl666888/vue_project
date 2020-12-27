import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/axios/http'
Vue.config.productionTip = false
Vue.prototype.$http = axios
let grid = JSON.parse(window.localStorage.getItem('grid')) || ''
if(grid){
  store.commit('setGrid',grid)
}
let Buy = JSON.parse(localStorage.getItem('BuyData')) || ''
if(Buy){
  store.commit('setBuyData',Buy);
}
let defalt = JSON.parse(window.localStorage.getItem('defaltArr')) || ''
if(defalt){
  store.commit('setDefalt',defalt)
}
let User = JSON.parse(localStorage.getItem('User')) || ''
if(User){
  store.commit('setName1',User);
}
let Res = JSON.parse(localStorage.getItem('StuRes')) || []
if(Res){
  store.commit('setRes',Res);
}
let title = JSON.parse(window.localStorage.getItem('titleArr')) || ''
if(title){
  store.commit('setTitle',title)
}

let token = window.localStorage.getItem('token') || ''
if(token){
  store.commit('setToken',token)
}

let user =  window.localStorage.getItem('users') == undefined ? '' : JSON.parse(window.localStorage.getItem('users')) 
if(user){
  store.commit('setUsers',user)
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
