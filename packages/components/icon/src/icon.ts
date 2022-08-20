export const iconTypes = ['large', 'normal', 'small', 'mini'] as const

export const buttonProps = {
  size: {
    type: String,
    values: iconTypes,
    default: 'normal',
  },
} as const
