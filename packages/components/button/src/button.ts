import type { ExtractPropTypes } from 'vue'

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  '',
] as const

export const buttonProps = {
  type: {
    type: String,
    values: buttonTypes,
    default: '',
  },
  bold: {
    type: Boolean,
    default: false,
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
