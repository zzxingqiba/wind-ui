import type { ComponentSize } from '@wind/constants'
import type { ExtractPropTypes, PropType } from 'vue'

const valueType = [Boolean, String, Number]
type ValuePropType = PropType<string | number | boolean | undefined>

export const switchProps = {
  modelValue: {
    type: valueType as ValuePropType,
    default: false,
  },
  value: {
    type: valueType as ValuePropType,
    default: false,
  },
  activeValue: {
    type: valueType as ValuePropType,
    default: true,
  },
  inactiveValue: {
    type: valueType as ValuePropType,
    default: false,
  },
  size: {
    type: String as PropType<ComponentSize>,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export type SwitchProps = ExtractPropTypes<typeof switchProps>
