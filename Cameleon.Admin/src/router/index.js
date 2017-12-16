import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/components/Home'
import Apps from '@/components/Apps/Apps'
import AddApp from '@/components/Apps/Add'
import Entities from '@/components/Entities/Entities'
import AddEntity from '@/components/Entities/Add'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/apps',
      name: 'Apps',
      component: Apps
    },
    {
      path: '/apps/add',
      name: 'AddApp',
      component: AddApp
    },
    {
      path: '/entities',
      name: 'Entities',
      component: Entities
    },
    {
      path: '/entities/add',
      name: 'AddEntity',
      component: AddEntity
    }
  ]
})
