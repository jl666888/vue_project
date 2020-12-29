import Vue from 'vue'
import VueRouter from 'vue-router'
import CenterRouter from './Center'
import ClassroomRouter from './Classroom'
import MessageRouter from './Message'
import DetailsRouter from './Details'
import BuyRouter from './Buy'
import Login from './Login'
import register from './register'
import Login2 from '@/components/Login/Login'
import Forget from '@/components/Login/forget'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: '/',
    component: ClassroomRouter,
    redirect: '/classroom'
  },
  {path:'/login2',component:Login2},
  {path:'/login2/forget',component:Forget},
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

router.beforeEach((to, from, next) => {
  let arr = [
    '/buy/buy1',
    '/center/await',
    '/center/going',
    '/center/success',
    '/center/all',
  ]
  let token = document.cookie.split('; ')
  let obj = {}
  token.forEach(v => {
    let arr = v.split('=')
    obj[arr[0]] = arr[1]
  })
  arr.forEach((v, k) => {
    if (to.path == v) {
      if (!obj.token) {
        router.push('/login')
      }
    }
  })
  next()
})

export default router
