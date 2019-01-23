import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import './assets/css/style.css'//02 公共资源 css本身会暴露
import './assets/js/auto'//自执行脚本

// import axios from 'axios';
// // Vue.use(axios)  不是所有的插件都能用use 安装
// window.axios = axios;   // 全局暴露

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
