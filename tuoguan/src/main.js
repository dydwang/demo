import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import "@/assets/iconfont.css"//使用在线iconfont第三方图标库
import {api} from './assets/util/util'
Vue.prototype.$api=api

//公共组件
import publicTitle from '../src/components/index'
Vue.use(publicTitle)

let userInfo=localStorage.getItem('userInfoZFGZ')!==null?JSON.parse(localStorage.getItem('userInfoZFGZ')):
    ( sessionStorage.getItem('userInfoZFGZ')!==null? JSON.parse(sessionStorage.getItem('userInfoZFGZ')):null)
Vue.prototype.$userInfo =userInfo

import GetTime from './assets/getTime'
Vue.prototype.$Time=function(date){
  return new GetTime(date)
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
import App from './App.vue';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
