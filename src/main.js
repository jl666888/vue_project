import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/axios/http'
Vue.config.productionTip = false
Vue.prototype.$http = axios
let grid = JSON.parse(window.localStorage.getItem('grid'))
if(grid){
  store.commit('setGrid',grid)
}

let defalt = JSON.parse(window.localStorage.getItem('defaltArr'))
if(defalt){
  store.commit('setDefalt',defalt)
}

let title = JSON.parse(window.localStorage.getItem('titleArr'))
if(title){
  store.commit('setTitle',title)
}

let token = window.localStorage.getItem('token')
if(token){
  store.commit('setToken',token)
}

let users = JSON.parse(window.localStorage.getItem('users'))
if(users){
  store.commit('setUsers',users)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
