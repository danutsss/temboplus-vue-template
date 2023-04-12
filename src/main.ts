import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

// Import Dashforge CSS.
import './assets/css/dashforge/dashforge.css'
import './assets/css/dashforge/dashforge.auth.css'

// Import Bootstrap 5 and Popper.js.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
