import Vue from 'vue'
import VueRouter from 'vue-router'
import CenterRouter from './Center'
import ClassroomRouter from './Classroom'
import MessageRouter from './Message'
import DetailsRouter from './Details'
import BuyRouter from './Buy'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: '/',
    // component: Classroom
    redirect:'/classroom'
  },
  ...BuyRouter,
  ...CenterRouter,
  ...ClassroomRouter,
  MessageRouter,
  ...DetailsRouter,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
