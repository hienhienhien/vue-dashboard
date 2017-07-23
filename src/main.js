// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import  SocialSharing from 'vue-social-sharing';
import * as VueGoogleMaps from 'vue2-google-maps';
import Firebase from './api/firebase'
//import filter file
import * as filters from './filters'
import Toast from 'vue-easy-toast'
import VueResource from 'vue-resource'
Vue.use(VueResource);

import VueSimplemde from 'vue-simplemde'
import 'ratchet-npm/dist/css/ratchet.css'; // get ratchet

import { sync } from 'vuex-router-sync'
import store from './vuex'
import VueProgressBar from 'vue-progressbar'; // get vue-progressbar


import InfiniteScroll from 'vue-infinite-scroll'; // get vue-infinite-scroll

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import DataTables from 'vue-data-tables'
import Carousel3d from 'vue-carousel-3d';
Vue.use(ElementUI)
Vue.use(DataTables)
const options = {
  color: '#fff',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};
Vue.use(VueProgressBar, options);
Vue.use(InfiniteScroll);
import vueKanban from 'vue-kanban'

Vue.use(vueKanban)
// import VueQriously from 'vue-qriously'
// Vue.use(VueQriously)

import 'simplemde-theme-base/dist/simplemde-theme-base.min.css'
Vue.use(Carousel3d);

Vue.use(VueSimplemde)
Vue.use(Toast)
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);


  Vue.use(VueGoogleMaps, {
    load: {
      key: 'google_api_key',
    libraries: 'places'
      // libraries: 'places', //// If you need to use place input
    }
  });

Vue.use(SocialSharing);

Vue.config.productionTip = true
sync(store, router)
Firebase.initFirebase()
Vue.use(VueFire)

//filter
// json filter is now not bundled with vue
//NEN TACH RA CHO VAO 1 FILE FILTER RIENG DRY
// Vue.filter('json', x => JSON.stringify(x));
// Vue.filter('formatDate', function (value, format) {
//   return moment(value).format('YYYY.MM.DD hh:mm:ss')
// })
//register filter
Object.keys(filters).forEach(key => {
  Vue.filter(key,filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})



//set global objects in Vue
global._App = app
