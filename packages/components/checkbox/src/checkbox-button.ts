import type { ExtractPropTypes } from 'vue'
import { checkboxProps, checkboxEmits } from './checkbox'

export const checkboxButtonProps = {
  ...checkboxProps,
}

export const checkboxButtonEmits = {
  ...checkboxEmits,
}

export type CheckboxButtonProps = ExtractPropTypes<typeof checkboxButtonProps>
