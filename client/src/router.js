import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

import LayoutDefault from './layouts/LayoutDefault'
import Home from './views/Home'
import Equipment from './views/Equipment'
import Materials from './views/Materials'
import Ymap from './views/Ymap'
import About from './views/About'
import Cabinet from './views/Cabinet'
import Signup from './views/Signup'
import Settings from './views/Settings'
import Notifications from './views/Notifications'
import Partnership from './views/Partnership'
import Support from './views/Support'
import Share from './views/Share'

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
                await store.dispatch('equipment/getEquipmentCategories')
                next()
              } catch (error) {
                console.error(error)
                next('/home')
              }
            })()
          }
        },
        {
          path: '/materials',
          name: 'materials',
          component: Materials,
          beforeEnter: (to, from, next) => {
            (async () => {
              try {
                await store.dispatch('materials/getMaterialCategories')
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
        {
          path: '/about',
          name: 'about',
          component: About,
        },
        {
          path: '/cabinet',
          name: 'cabinet',
          component: Cabinet,
        },
        {
          path: '/signup',
          name: 'signup',
          component: Signup,
        },
        {
          path: '/settings',
          name: 'settings',
          component: Settings,
        },
        {
          path: '/notifications',
          name: 'notifications',
          component: Notifications,
        },
        {
          path: '/partnership',
          name: 'partnership',
          component: Partnership,
        },
        {
          path: '/support',
          name: 'support',
          component: Support,
        },
        {
          path: '/share',
          name: 'share',
          component: Share,
        },
      ]
    },
  ],
  mode: 'history',
})
