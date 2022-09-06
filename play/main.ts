import { createApp } from 'vue'
import APP from './app.vue'
import WdRadio, { WdRadioGroup } from '@wind/components/radio'
import WdSwitch from '@wind/components/switch'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdRadio).use(WdSwitch).use(WdRadioGroup)
app.mount('#app')
