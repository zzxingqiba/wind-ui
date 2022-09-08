import { componentSizes, Event } from '@wind/constants'
import type { ExtractPropTypes } from 'vue'
import { definePropType } from '@wind/utils'

export const baseRadioProps = {
  label: {
    type: definePropType<string | number | boolean>([String, Number, Boolean]),
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  disabled: Boolean,
}

export const radioProps = {
  size: {
    type: String,
    values: componentSizes,
    required: false,
  },
  modelValue: {
    type: definePropType<string | number | boolean>([String, Number, Boolean]),
    default: '',
  },
  ...baseRadioProps,
}

export const radioEmits = {
  [Event.UPDATE_MODEL_EVENT]: <T>(value: T) => value,
  [Event.CHANGE_EVENT]: <T>(value: T) => value,
}

export type RadioEmits = typeof radioEmits
export type BaseRadioProps = ExtractPropTypes<typeof baseRadioProps>
export type RadioProps = ExtractPropTypes<typeof radioProps>
