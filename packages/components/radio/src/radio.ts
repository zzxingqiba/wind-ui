import { componentSizes } from '@wind/constants'
import type { ExtractPropTypes } from 'vue'
import { Event } from '@wind/constants'

export const radioProps = {
  size: {
    type: String,
    values: componentSizes,
    required: false,
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
}

export const radioEmits = {
  [Event.UPDATE_MODEL_EVENT]: <T>(value: T) => value,
  [Event.CHANGE_EVENT]: <T>(value: T) => value,
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
