import type { ExtractPropTypes } from 'vue'
import { componentTypes } from '@wind/constants'

export const timelineItemProps = {
  lineType: {
    values: ['solid', 'dashed'],
    default: 'solid',
  },
  title: String,
  content: String,
  time: String,
  type: {
    type: String,
    values: componentTypes,
  },
}

export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>
