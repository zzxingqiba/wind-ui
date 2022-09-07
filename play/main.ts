import { createApp } from 'vue'
import APP from './app.vue'
import WdRadio, { WdRadioGroup, WdRadioButton } from '@wind/components/radio'
import WdSwitch from '@wind/components/switch'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdRadio).use(WdSwitch).use(WdRadioGroup).use(WdRadioButton)
app.mount('#app')
