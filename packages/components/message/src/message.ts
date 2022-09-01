import type { ExtractPropTypes, VNode, PropType } from 'vue'
import { definePropType } from '@wind/utils'

export const appearTypes = [
  'top',
  'top-left',
  'top-right',
  'bottom',
  'bottom-left',
  'bottom-right',
] as const

export const messageTypes = ['success', 'info', 'warning', 'error'] as const

export const messageProps = {
  message: {
    type: definePropType<string | VNode | (() => VNode)>([
      String,
      Object,
      Function,
    ]),
  },
  appear: {
    type: String as PropType<
      | 'top'
      | 'top-left'
      | 'top-right'
      | 'bottom'
      | 'bottom-left'
      | 'bottom-right'
    >,
    values: appearTypes,
    default: 'top',
  },
}

export type MessageProps = ExtractPropTypes<typeof messageProps>
