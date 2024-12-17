import { createRouter, createWebHistory } from 'vue-router'
import Index from './views/index.vue'
import Injective from './views/injective.vue'

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/injective', name: 'injective', component: Injective },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router