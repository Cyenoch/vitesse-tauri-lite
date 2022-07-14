import { createRouter, createWebHistory } from 'vue-router'
import HeyVue from './views/Hey.vue'
import IndexVue from './views/Index.vue'

export const RouteMap = {
  index: 'Index',
  hey: 'Hey',
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      children: [{
        path: '',
        name: RouteMap.index,
        component: IndexVue,
      }, {
        path: 'hey',
        name: RouteMap.hey,
        component: HeyVue,
      }],
    },
  ],
})

export default router
