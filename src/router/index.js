import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login'
import BDMap from '@/views/BDMap'
Vue.use(Router)
var constantRouterMap=[]

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/map/baidu/',
      name: 'BDMap',
      component: BDMap
    }
  ]

  
  //constantRouterMap
 
})
