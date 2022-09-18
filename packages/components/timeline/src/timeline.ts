import type { ExtractPropTypes } from 'vue'

export const timelineProps = {
  horizontal: Boolean,
  mirror: Boolean,
}

export interface TimelineInjection {
  props: ExtractPropTypes<typeof timelineProps>
}

export type TimelineProps = ExtractPropTypes<typeof timelineProps>
