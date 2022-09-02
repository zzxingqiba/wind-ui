import type { InjectionKey } from 'vue'

export const createInjectionKey = <T>(val: symbol): InjectionKey<T> => {
  return val
}
