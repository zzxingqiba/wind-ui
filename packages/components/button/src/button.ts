import { ExtractPropTypes } from 'vue'

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
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
