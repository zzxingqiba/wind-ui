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
    type: definePropType<string | number | boolean | object>([
      String,
      Number,
      Boolean,
      Object,
    ]),
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

export const checkEmits = {
  [Event.UPDATE_MODEL_EVENT]: <T>(value: T) => value,
  [Event.CHANGE_EVENT]: <T>(value: T) => value,
}

export type CheckBoxEmits = typeof checkEmits

export type CheckBoxProps = ExtractPropTypes<typeof checkboxProps>
