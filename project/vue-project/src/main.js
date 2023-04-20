import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const URL = 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json'
//website url = https://data.cityofnewyork.us/Education/2012-SAT-Results/f9bf-2cp4
app.use(router)

app.mount('#app')
