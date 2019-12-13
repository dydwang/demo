import Vue from 'vue'

Vue.config.productionTip = false
import "@/assets/iconfont.css"//使用在线iconfont第三方图标库

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
// Vue.component(CollapseTransition.name, CollapseTransition)
//用户信息
Vue.prototype.$userInfo =
      localStorage.getItem('userInfoZFGZ')!==null?JSON.parse(localStorage.getItem('userInfoZFGZ')):
    ( sessionStorage.getItem('userInfoZFGZ')!==null? JSON.parse(sessionStorage.getItem('userInfoZFGZ')):null)

//公共组件
import publicTitle from '../src/components/index'
Vue.use(publicTitle)

import axios from 'axios'
Vue.prototype.$axios=axios

import api from './assets/api/index'  //接口中间层
Vue.prototype.$api=api

Vue.prototype.$login = function(){
    QC.Login.showPopup({
        appId: "101831906",
        redirectURI: "http://gzzfgz.com/#/company"
    })
}

// 保存整站vuex本地储存初始状态  监听sessionStorage
Vue.prototype.$resetSetItem = function (key, newVal) { //监听sessionStorage

    // 创建一个StorageEvent事件
    var newStorageEvent = document.createEvent('StorageEvent');
    const storage = {
      setItem: function (k, val) {
        sessionStorage.setItem(k, val);

        // 初始化创建的事件
        newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);

        // 派发对象
        window.dispatchEvent(newStorageEvent)
      }
    }
    return storage.setItem(key, newVal);
}

import allFun from '@/assets/fun/index'
Vue.prototype.$allFun=allFun

import {nodeUrl} from '@/assets/api/url'
Vue.prototype.$nodeUrl=nodeUrl

import App from './App.vue'
import router from './router'
import store from './store'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
