import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AppHost from '@/components/AppHost'
import Apps from '@/components/Apps'
import Activities from '@/components/Activities'
import Entities from '@/components/Entities'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/apps/:name',
      name: 'AppHost',
      component: AppHost
    },
    {
      path: '/apps',
      name: 'Apps',
      component: Apps
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/entities',
      name: 'Entities',
      component: Entities
    }
  ]
})
