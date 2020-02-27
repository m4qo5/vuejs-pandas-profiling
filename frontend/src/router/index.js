import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import SignInView from '@/views/SignInView'
import Projects from '@/views/Projects'
import ProjectFiles from '@/views/ProjectFiles'
import store from '../store/store'
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
      path: '/sign-in',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/projects/:id/project-files',
      name: 'projectFiles',
      component: ProjectFiles
    },

    { 
      path: '*',
      redirect: '/error/404'
    },

  ]
})

export default router