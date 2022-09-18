export const componentTypes = [
  'success',
  'success',
  'warning',
  'error',
  'info',
] as const
export type ComponentTypes = typeof componentTypes[number]
