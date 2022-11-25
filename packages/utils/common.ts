export function isUndef(v: unknown) {
  return v === undefined || v === null
}

export function isDef(v: unknown) {
  return v !== undefined && v !== null
}

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isFunction = (val: unknown): val is () => void =>
  typeof val === 'function'

export interface ArrayLike<T> {
  readonly length: number
  readonly [index: number]: T
}
type List<T> = ArrayLike<T>

export const fromPairs = (pairs: List<any[]>) => {
  let index = -1
  const length = pairs == null ? 0 : pairs.length
  const result: Record<string, any> = {}
  while (++index < length) {
    const pair = pairs[index]
    result[pair[0]] = pair[1]
  }
  return result
}

export const generateId = (): number => Math.floor(Math.random() * 10000)
