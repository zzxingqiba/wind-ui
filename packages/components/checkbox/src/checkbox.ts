import { componentSizes, Event } from '@wind/constants'
import type { ExtractPropTypes } from 'vue'
import { definePropType } from '@wind/utils'

export const checkboxProps = {
  size: {
    type: String,
    values: componentSizes,
    required: false,
  },
  modelValue: {
    type: definePropType<string | number | boolean>([String, Number, Boolean]),
    default: undefined,
  },
  label: {
    type: definePropType<string | number>([String, Number]),
    default: '',
  },
  trueLabel: {
    type: definePropType<string | number>([String, Number]),
    default: undefined,
  },
  falseLabel: {
    type: definePropType<string | number>([String, Number]),
    default: undefined,
  },
  name: {
    type: String,
    default: undefined,
  },
  disabled: Boolean,
}

export const checkboxEmits = {
  [Event.UPDATE_MODEL_EVENT]: <T>(value: T) => value,
  [Event.CHANGE_EVENT]: <T>(value: T) => value,
}

export type CheckBoxEmits = typeof checkboxEmits

export type CheckBoxProps = ExtractPropTypes<typeof checkboxProps>
