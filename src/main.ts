import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/app.css'
import { createPinia } from 'pinia'
import PhosphorVue from 'phosphor-vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PhosphorVue)
app.mount('#app')
