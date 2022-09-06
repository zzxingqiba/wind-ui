import type { ExtractPropTypes, Ref } from 'vue'
import { componentSizes, Event } from '@wind/constants'
import { definePropType } from '@wind/utils'

export const radioGroupProps = {
  modelValue: {
    type: definePropType<string | number | boolean>([String, Number, Boolean]),
    default: '',
  },
  size: {
    type: String,
    values: componentSizes,
    required: false,
  },
  disabled: Boolean,
}

export interface RadioGroupInjection {
  modelValueRef: Ref<string | number | boolean | null>
  mergedSizeRef: Ref<RadioGroupProps['size']>
  disabledRef: Ref<boolean>
  UpdateValue: (value: string | number | boolean) => void
}

export const radioGroupEmits = {
  [Event.UPDATE_MODEL_EVENT]: <T>(value: T) => value,
  [Event.CHANGE_EVENT]: <T>(value: T) => value,
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
