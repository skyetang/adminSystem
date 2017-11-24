import Vue from 'vue'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from './App'
import router from './router'
import store from './store'

axios.interceptors.request.use((config) => {
  config.headers.access_token = localStorage.getItem('access_token') || ''
  return config
})

Vue.use(iView)

Vue.config.productionTip = false

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (store.state.user.token) {
    next()
  } else if (whiteList.indexOf(to.path) !== -1) {
    // 在免登录白名单，直接进入
    next()
  } else {
    // 否则全部重定向到登录页
    next({ path: '/login' })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app></app>',
  components: { App }
})
