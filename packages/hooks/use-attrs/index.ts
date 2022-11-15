import type { ComputedRef } from 'vue'
import { getCurrentInstance, computed } from 'vue'
import { fromPairs } from '@wind/utils'

interface Params {
  excludeKeys?: ComputedRef<string[]>
}

const DEFAULT_EXCLUDE_KEYS = ['class', 'style']

export const useAttrs = (
  params?: Params
): ComputedRef<Record<string, unknown>> => {
  const { excludeKeys } = params || {}
  const allExcludeKeys = computed<string[]>(() =>
    (excludeKeys?.value || []).concat(DEFAULT_EXCLUDE_KEYS)
  )
  const instance = getCurrentInstance()
  if (!instance) {
    console.warn('useAttrs() must be called at the top of a setup function')
    return computed(() => ({}))
  }
  return computed(() =>
    fromPairs(
      Object.entries(instance.proxy?.$attrs!).filter(
        ([key]) => !allExcludeKeys.value.includes(key)
      )
    )
  )
}
