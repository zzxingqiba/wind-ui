import { createApp } from 'vue'
import APP from './app.vue'
import WdButton from '@wind/components/button'
import WdMessage from '@wind/components/message'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdButton).use(WdMessage)
app.mount('#app')
