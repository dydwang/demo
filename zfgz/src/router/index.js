import Vue from 'vue'
import VueRouter from 'vue-router'
//import login from '../views/sign/in/login'
const login  = ()=>import('../views/sign/in/login')
import home from "../views/Home"
import refresh from "../components/refresh"
Vue.use(VueRouter)
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
import user from '../views/user/router'
import admin from '../views/admin/router'
const routes = [
  {path: '/', redirect: '/company'},
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/refresh',
    name: '刷新',
    component: refresh
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children:[
        ...user
    ]
  },
    ...admin
]

const router = new VueRouter({
  routes
})
let adminInfo =sessionStorage.getItem('adminInfo');
router.beforeEach((to, from, next) => {
  if (!adminInfo||adminInfo==="" ) {
    if (to.meta.admin  ) {
      next({path: '/adminView_login'})
    } else {
      next()
    }
  }else{
    next()
  }
})

export default router
