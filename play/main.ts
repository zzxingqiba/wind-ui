import { createApp } from 'vue'
import APP from './app.vue'
import WdButton from '@wind/components/button'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdButton)
app.mount('#app')
