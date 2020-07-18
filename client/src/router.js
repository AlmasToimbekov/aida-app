import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import LayoutDefault from './layouts/LayoutDefault'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: LayoutDefault,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        }
      ]
    },
  ],
  mode: 'history',
})
