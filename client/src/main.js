import Vue from 'vue'
import router from './router'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
Vue.use(Vuetify)
sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  vuetify: new Vuetify(),
  template: '<App/>'
})
