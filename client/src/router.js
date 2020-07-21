import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

import LayoutDefault from './layouts/LayoutDefault'
import Home from './views/Home'
import Equipment from './views/Equipment'
import Ymap from './views/Ymap'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: LayoutDefault,
      children: [
        {
          path: '/',
          alias: 'home',
          name: 'home',
          component: Home,
          beforeEnter: (to, from, next) => {
            (async () => {
              try {
                await store.dispatch('globe/getCities')
                next()
              } catch (error) {
                console.error(error)
              }
            })()
          }
        },
        {
          path: '/equipment',
          name: 'equipment',
          component: Equipment,
          beforeEnter: (to, from, next) => {
            (async () => {
              try {
                await store.dispatch('equipment/getEquipment')
                next()
              } catch (error) {
                console.error(error)
                next('/home')
              }
            })()
          }
        },
        {
          path: '/map',
          name: 'map',
          component: Ymap,
        },
      ]
    },
  ],
  mode: 'history',
})
