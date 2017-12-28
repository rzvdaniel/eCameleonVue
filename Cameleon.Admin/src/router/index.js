import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/components/Home'

import AppsHome from '@/components/Apps/Home'
import Apps from '@/components/Apps/Apps'
import AddApp from '@/components/Apps/Add'
import EditApp from '@/components/Apps/Edit'

import EntitiesHome from '@/components/Entities/Home'
import Entities from '@/components/Entities/Entities'
import AddEntity from '@/components/Entities/Add'
import EditEntity from '@/components/Entities/Edit'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/apps',
      component: AppsHome,
      children: [
        { path: '', component: Apps },
        { path: 'add', component: AddApp },
        { path: ':id', component: EditApp }
      ]
    },
    {
      path: '/entities',
      component: EntitiesHome,
      children: [
        { path: '', component: Entities },
        { path: 'add', component: AddEntity },
        { path: ':id', component: EditEntity }
      ]
    }
  ]
})
