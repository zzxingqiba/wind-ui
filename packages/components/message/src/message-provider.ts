import { definePropType } from '@wind/utils'
import type { PropType, ExtractPropTypes } from 'vue'

export const messageProviderProps = {
  to: definePropType<string | HTMLElement>([String, Object]),
  max: definePropType<number | string>([Number, String]),
  appear: {
    type: String as PropType<
      | 'top'
      | 'top-left'
      | 'top-right'
      | 'bottom'
      | 'bottom-left'
      | 'bottom-right'
    >,
    default: 'top',
  },
  duration: {
    type: Number,
    default: 3000,
  },
  closable: Boolean,
}

export type MessageProviderProps = ExtractPropTypes<typeof messageProviderProps>
