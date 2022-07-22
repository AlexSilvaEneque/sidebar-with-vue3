import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import icons from './utils/fontawesome'


createApp(App)
    .component(icons[0], icons[1])
    .use(router)
    .mount('#app')
