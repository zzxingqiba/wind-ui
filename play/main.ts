import { createApp } from 'vue'
import APP from './app.vue'
import WdTimeline, { WdTimelineItem } from '@wind/components/timeline'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdTimeline).use(WdTimelineItem)
app.mount('#app')
