import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Apps from '@/components/Apps'

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
      name: 'Apps',
      component: Apps
    }
  ]
})
