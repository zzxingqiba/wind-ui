import { createApp } from 'vue'
import APP from './app.vue'
import WdRadio from '@wind/components/radio'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdRadio)
app.mount('#app')
