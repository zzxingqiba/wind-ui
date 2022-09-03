import type { VNodeChild, ExtractPropTypes, VNode } from 'vue'
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
  type?: MessageType
  message?: string | VNode | (() => VNodeChild)
  duration?: number
  closable?: boolean
  showIcon?: boolean
  icon?: () => VNodeChild
  onLeave?: () => void
  onAfterLeave?: () => void
}

export interface PrivateMessageReactive extends MessageReactive {
  key: string
}

export interface MessageApiInjection {
  success: (options: MessageOptions) => MessageReactive
  info: (options: MessageOptions) => MessageReactive
  warning: (options: MessageOptions) => MessageReactive
  error: (options: MessageOptions) => MessageReactive
}

export const messageProps = {
  type: definePropType<MessageType>(String),
  message: definePropType<string | VNode | (() => VNodeChild)>([
    String,
    Object,
  ]),
  duration: {
    type: Number,
    default: 3000,
  },
  closable: Boolean,
  showIcon: {
    type: Boolean,
    default: true,
  },
  icon: definePropType<() => VNodeChild>(Function),
  onClose: Function,
}
export type MessageProps = ExtractPropTypes<typeof messageProps>
