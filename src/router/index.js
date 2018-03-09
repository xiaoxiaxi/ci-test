import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import About from '@/components/about'
import List from '@/components/list'

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
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
