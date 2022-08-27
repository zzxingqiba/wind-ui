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

export const buttonSizes = ['mini', 'small', 'normal', 'large'] as const

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
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
  size: {
    type: String,
    values: buttonTypes,
    default: 'normal',
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
