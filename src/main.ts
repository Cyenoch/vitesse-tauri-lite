import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'uno.css'
import './main.css'
import routes from './routes'
// import './samples/node-api'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(routes)

app.mount('#app')
  .$nextTick(() => {})
