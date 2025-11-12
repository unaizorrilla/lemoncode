import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/scenes/Home.vue'
import Favourites from '@/scenes/Favourites.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        // {
        //   path: 'list/:id',
        //   name: 'list',
        //   component: () => import('@/scenes/List.vue'),
        //   props: true
        // }
      ]
    },
    {
      path: '/',
      name: 'favourites',
      component: Favourites
    }
  ],
})

export default router
