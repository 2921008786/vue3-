import { createApp } from 'vue'
import router from "./router/index"
import App from './App.vue'
import { Lazyload } from 'vant';
import { createPinia } from 'pinia' 
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(Lazyload);
app.mount('#app')
