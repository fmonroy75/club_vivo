import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import './assets/styles/glass.css'

import router from './router'
import { createStore } from 'vuex'

import { vuetify } from './plugins/vuetify'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
