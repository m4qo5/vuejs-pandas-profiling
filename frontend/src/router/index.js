import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import store from '../store/index.js'
Vue.use(Router)


const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    { 
      path: '*',
      redirect: '/error/404'
    },

  ]
})

export default router