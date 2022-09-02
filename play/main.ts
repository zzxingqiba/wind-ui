import { createApp } from 'vue'
import APP from './app.vue'
import WdButton from '@wind/components/button'
import WdMessageProvider from '@wind/components/message'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdButton).use(WdMessageProvider)
app.mount('#app')
