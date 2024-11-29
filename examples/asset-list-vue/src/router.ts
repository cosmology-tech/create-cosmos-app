import { createRouter, createWebHistory } from 'vue-router'
import Index from './views/index.vue'
import UseChain from './views/use-chain.vue'
import SingleChain from './views/single-chain.vue'

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/use-chain', name: 'useChain', component: UseChain },
  { path: '/single-chain', name: 'singleChain', component: SingleChain }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router