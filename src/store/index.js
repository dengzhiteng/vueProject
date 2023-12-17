import Vue from "vue"
import Vuex from "vuex"
import persistedstate from 'vuex-persistedstate'
import user from './modules/user'
import app from './modules/app'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    app
  },
  plugins: [
    persistedstate({
      storage: window.sessionStorage
    })
  ]
})

export default store
