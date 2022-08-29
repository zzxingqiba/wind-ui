import { computed, ref, unref } from 'vue'
import { useProp } from '../use-prop'
import type { ComponentSize } from '@wind/constants'

export const useSize = (
  fallback?: ComponentSize | undefined,
  ignore: Partial<Record<'prop', boolean>> = {}
) => {
  const emptyRef = ref(undefined)
  const size = ignore.prop ? emptyRef : useProp<ComponentSize>('size')
  return computed((): ComponentSize => size.value || unref(fallback) || '')
}
