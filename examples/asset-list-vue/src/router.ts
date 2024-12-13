import { createRouter, createWebHistory } from 'vue-router'
import Index from './views/index.vue'
import UseChain from './views/use-chain.vue'
import SingleChain from './views/single-chain.vue'
import VueQueryTest from './views/vue-query-test.vue'
import Voting from './views/voting.vue'
import Authz from './views/authz.vue'

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/use-chain', name: 'useChain', component: UseChain },
  { path: '/single-chain', name: 'singleChain', component: SingleChain },
  { path: '/vue-query-test', name: 'vueQueryTest', component: VueQueryTest },
  { path: '/voting', name: 'voting', component: Voting },
  { path: '/authz', name: 'authz', component: Authz }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router