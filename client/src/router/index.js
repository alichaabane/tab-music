import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import View from '@/components/View'

import CreateSong from '@/components/CreateSong'
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(vuetify)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs:Songid',
      name: 'song',
      component: View
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    }
  ]
})
