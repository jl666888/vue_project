import Vue from 'vue'
import VueRouter from 'vue-router'
import CenterRouter from './Center'
import ClassroomRouter from './Classroom'
import MessageRouter from './Message'
import DetailsRouter from './Details'
import BuyRouter from './Buy'
import Login from './Login'
import register from './register'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: '/',
    // component: Classroom
    redirect:'/login'
  },
  {path:'/login2',component:()=>import('@/components/Login/Login')},
  Login,
  ...BuyRouter,
  ...CenterRouter,
  ...ClassroomRouter,
  MessageRouter,
  ...DetailsRouter,
  register
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  let arr = [
    '/login',
    // '/buy/buy1'
  ]
  arr.forEach((v,k)=>{
    if(to.path == '/buy/buy1'){
      if(!window.localStorage.getItem('token')){
        router.push('/login')
      }
    }
    if(to.path=='/login'){
      if(window.localStorage.getItem('token')){
        router.push('/classroom')
      }
    }
  })
  next()
})

export default router
