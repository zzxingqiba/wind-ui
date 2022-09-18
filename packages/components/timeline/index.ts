import Timeline from './src/timeline.vue'
import TimelineItem from './src/timeline-item.vue'
import { withInstall } from '@wind/utils/index'

const WdTimeline = withInstall(Timeline)
export const WdTimelineItem = withInstall(TimelineItem)
export default WdTimeline
