import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI, { size: 'small' });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
