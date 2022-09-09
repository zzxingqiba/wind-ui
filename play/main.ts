import { createApp } from 'vue'
import APP from './app.vue'
import WdCheckbox from '@wind/components/checkbox'
import WdSwitch from '@wind/components/switch'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdCheckbox).use(WdSwitch)
app.mount('#app')
