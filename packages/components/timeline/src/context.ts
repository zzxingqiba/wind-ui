import type { TimelineInjection } from './timeline'
import { createInjectionKey } from '@wind/utils'
import { provide, inject } from 'vue'

export const timelineApiInjectionKey = Symbol('TimelineApiInjectionKey')

export const useProvide = <T>(target: T) => {
  provide(createInjectionKey<T>(timelineApiInjectionKey), target)
}

export const useInject = () => {
  return inject(
    createInjectionKey<TimelineInjection>(timelineApiInjectionKey),
    null
  )
}
