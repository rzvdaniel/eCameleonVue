import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import AppHost from '@/components/AppHost'
import Home from '@/components/Home'

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
      path: '/app/:name',
      name: 'AppHost',
      component: AppHost
    }
  ]
})
