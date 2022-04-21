import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { store } from './store/store.js'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
    