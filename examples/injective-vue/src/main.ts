import { createApp } from 'vue'
import router from './router'
import './style.css'
import "@interchain-ui/vue/style.css";
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';
// import "@interchain-ui/vue/globalStyles";
import App from './App.vue'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

// @ts-ignore
BigInt.prototype['toJSON'] = function () {
  return this.toString()
}

const app = createApp(App);
app.use(VueQueryPlugin, { queryClient });
app.use(router)
app.mount('#app');
