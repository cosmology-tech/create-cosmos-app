import { createApp } from 'vue'
import router from './router'
import './style.css'
import "@interchain-ui/vue/style.css";
// import "@interchain-ui/vue/globalStyles";
// import '@interchain-ui/react/globalStyles';
// import '@interchain-ui/react/styles';
import App from './App.vue'

const app = createApp(App);

app.use(router)
app.mount('#app');
