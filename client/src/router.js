import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

import LayoutDefault from './layouts/LayoutDefault'
import Home from './views/Home'
import Equipment from './views/Equipment'

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
          component: Home,
          beforeEnter: (to, from, next) => {
            (async () => {
              try {
                await store.dispatch('globe/getCities')
                next()
              } catch (error) {
                console.error(error)
                next('/home')
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
      ]
    },
  ],
  mode: 'history',
})
