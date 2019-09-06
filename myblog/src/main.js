import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import axios from '../node_modules/axios'
import router from './router'

Vue.prototype.$axios = axios;

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  store,
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
