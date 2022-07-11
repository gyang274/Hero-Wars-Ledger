import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Dialog } from 'quasar'

// quasar icon libraries
import '@quasar/extras/mdi-v6/mdi-v6.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

// quasar css stylesheet
import 'quasar/src/css/index.sass'

// App
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(
  createPinia()
)
app.use(
  Quasar, {
    plugins: {
      Dialog
    },
  }
)
app.use(
  router
)

// app mount
app.mount('#app')
