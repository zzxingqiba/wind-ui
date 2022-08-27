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
  },
  round: {
    type: Boolean,
  },
  circle: {
    type: Boolean,
  },
  icon: {
    type: String,
  },
  size: {
    type: String,
    values: buttonTypes,
    default: 'normal',
  },
  plain: {
    type: Boolean,
  },
  dashed: {
    type: Boolean,
  },
  text: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
} as const

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
