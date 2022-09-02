import { inject } from 'vue'
import { messageApiInjectionKey } from './context'
import { createInjectionKey } from '@wind/utils'
import type { MessageApiInjection } from './message'

export const useMessage = () => {
  const MessageFn = inject(
    createInjectionKey<MessageApiInjection>(messageApiInjectionKey),
    null
  )
  if (!MessageFn) {
    new Error(
      `[wind/${'useMessage'}]: please use wd-message-provider in the outer`
    )
  }
  return MessageFn
}
