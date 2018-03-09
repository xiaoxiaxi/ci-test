import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import About from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
