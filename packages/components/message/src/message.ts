import type { VNodeChild, ExtractPropTypes } from 'vue'
import { definePropType } from '@wind/utils'

export type MessageType = 'success' | 'info' | 'warning' | 'error'
export interface MessageOptions {
  type?: MessageType
  message?: string | (() => VNodeChild)
  duration?: number
  closable?: boolean
  showIcon?: boolean
  icon?: () => VNodeChild
  onClose?: () => void
  onLeave?: () => void
  onAfterLeave?: () => void
}

export interface MessageReactive {
  key: number
  type: MessageType
  onClose?: () => void
}

export interface PrivateMessageReactive extends MessageReactive {
  key: number
}

export interface MessageApiInjection {
  success: (options: MessageOptions) => MessageReactive
  info: (options: MessageOptions) => MessageReactive
  warning: (options: MessageOptions) => MessageReactive
  error: (options: MessageOptions) => MessageReactive
}

export const messageProps = {
  type: definePropType<MessageType>(String),
  message: definePropType<MessageType>(String),
  duration: {
    type: Number,
    default: 3000,
  },
  closable: Boolean,
  showIcon: Boolean,
  icon: definePropType<() => VNodeChild>(Function),
  onClose: Function,
  onLeave: Function,
  onAfterLeave: Function,
}

export type MessageProps = ExtractPropTypes<typeof messageProps>
