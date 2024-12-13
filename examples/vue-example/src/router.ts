import { createRouter, createWebHistory } from 'vue-router'
import Index from './views/index.vue'
import VueQueryTest from './views/vue-query-test.vue'
import Voting from './views/voting.vue'
import Authz from './views/authz.vue'
import AssetListSection from './views/asset-list.vue'

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/asset-list', name: 'assetList', component: AssetListSection },
  { path: '/vue-query-test', name: 'vueQueryTest', component: VueQueryTest },
  { path: '/voting', name: 'voting', component: Voting },
  { path: '/authz', name: 'authz', component: Authz }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router