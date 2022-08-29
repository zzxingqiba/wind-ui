export const componentSizes = ['small', '', 'large'] as const
export type ComponentSize = typeof componentSizes[number]
