import type { ExtractPropTypes } from 'vue'
import { Event } from '@wind/constants'
import { definePropType } from '@wind/utils'

export const radioButtonProps = {
  label: {
    type: definePropType<string | number | boolean>([String, Number, Boolean]),
    default: '',
  },
  disabled: Boolean,
  name: {
    type: String,
    default: '',
  },
}

export const radioButtonEmits = {
  [Event.UPDATE_MODEL_EVENT]: <T>(value: T) => value,
  [Event.CHANGE_EVENT]: <T>(value: T) => value,
}

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>
