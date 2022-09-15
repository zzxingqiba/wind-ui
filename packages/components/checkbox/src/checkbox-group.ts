import type { ExtractPropTypes, Ref, ComputedRef } from 'vue'
import { componentSizes, Event } from '@wind/constants'
import { definePropType } from '@wind/utils'

export const checkboxGroupProps = {
  modelValue: {
    type: definePropType<Array<string | number>>(Array),
    default: () => [],
  },
  size: {
    type: String,
    values: componentSizes,
    required: false,
  },
  disabled: Boolean,
}

export const checkboxGroupEmits = {
  [Event.UPDATE_MODEL_EVENT]: <T>(value: T) => value,
  [Event.CHANGE_EVENT]: <T>(value: T) => value,
}

export interface CheckboxGroupInjection {
  valueSetRef: ComputedRef<Set<string | number>>
  mergedSizeRef: Ref<CheckboxGroupProps['size']>
  disabledRef: Ref<boolean>
  toggleCheckbox: (checked: boolean, checkboxValue: string | number) => void
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
