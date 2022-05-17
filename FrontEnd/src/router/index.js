import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ThanksView from '../views/ThanksView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/thanks',
    name: 'thanks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ThanksView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
