import type { ExtractPropTypes, VNode } from 'vue'
import { definePropType } from '@wind/utils'

export const appearTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  '',
] as const

export const messageProps = {
  message: {
    type: definePropType<string | VNode | (() => VNode)>([
      String,
      Object,
      Function,
    ]),
  },
  appear: {
    type: String,
    default: 'top',
  },
}

export type MessageProps = ExtractPropTypes<typeof messageProps>
