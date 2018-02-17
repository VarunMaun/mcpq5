import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/scenes/home/Landing'
import Leads from '@/scenes/leads/Landing'
import Opportunities from '@/scenes/opportunities/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/leads',
      name: 'Leads',
      component: Leads
    },
    {
      path: '/opportunities',
      name: 'Opportunities',
      component: Opportunities
    }
  ]
})
