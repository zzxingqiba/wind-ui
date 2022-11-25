import { createApp } from 'vue'
import APP from './app.vue'
import WdPopover from '@wind/components/popover'
import WdButton from '@wind/components/button'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdPopover).use(WdButton)
app.mount('#app')
