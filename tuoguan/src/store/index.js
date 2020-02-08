import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /**
     * shopCar
     * @param name
     * @param price
     * @param num
     * */
    shopCar:JSON.parse(localStorage.getItem('shopCar'))||[]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
