import { createApp } from 'vue'
import APP from './app.vue'
import WdSwitch from '@wind/components/switch'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdSwitch)
app.mount('#app')
