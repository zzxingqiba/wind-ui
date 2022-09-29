import { componentSizes, Event } from '@wind/constants'
import type { ExtractPropTypes } from 'vue'
import { definePropType } from '@wind/utils'
import { isString } from '@vue/shared'

export const inputProps = {
  modelValue: {
    type: definePropType<string | number | null | undefined>([
      String,
      Number,
      Object,
    ]),
    default: '',
  },
  size: {
    type: String,
    values: componentSizes,
    required: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  disabled: Boolean,
  readonly: Boolean,
}

export const inputEmits = {
  [Event.UPDATE_MODEL_EVENT]: <T>(value: T) => isString(value),
  [Event.INPUT_EVENT]: <T>(value: T) => isString(value),
  [Event.CHANGE_EVENT]: <T>(value: T) => isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}

export type InputEmits = typeof inputEmits
export type InputProps = ExtractPropTypes<typeof inputProps>

export type TargetElement = HTMLInputElement | HTMLTextAreaElement
