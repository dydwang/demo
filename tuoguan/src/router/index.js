import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import user from './user'
import admin from './admin'
Vue.use(VueRouter)

const routes = [
  { path:'/' ,redirect:'/user_home' },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      ...user
    ]
  },
    ...admin


]

const router = new VueRouter({
  routes
})

export default router
