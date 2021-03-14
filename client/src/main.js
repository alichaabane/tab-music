import Vue from 'vue'
import router from './router'
import App from './App'
import Vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import VueYoutubeEmbed from 'vue-youtube-embed'

Vue.use(VueYoutubeEmbed)

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
