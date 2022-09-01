export function isUndef(v: unknown) {
  return v === undefined || v === null
}

export function isDef(v: unknown) {
  return v !== undefined && v !== null
}

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isFunction = (val: unknown): val is () => void =>
  typeof val === 'function'
