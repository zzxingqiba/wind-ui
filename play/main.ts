import { createApp } from 'vue'
import APP from './app.vue'
import WdInput from '@wind/components/input'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdInput)
app.mount('#app')
