// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.config.debug = true
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   lazyComponent: true
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
