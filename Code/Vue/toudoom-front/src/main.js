import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios'

import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


const app = createApp(App)

const instance = axios.create({
    withCredentials: true
  })

app.use(VueAxios, instance)

app.use(router)

app.mount('#app')
