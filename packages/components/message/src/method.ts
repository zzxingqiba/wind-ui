import MessageComponent from './message.vue'
import type { VNode, ComponentInternalInstance } from 'vue'
import { createVNode, render, isVNode, Text, Fragment, h } from 'vue'
import type { MessageProps } from './message'
import { messageTypes } from './message'
import { isDef, isFunction, isString } from '@wind/utils'

export type MessageFn = {
  (options: MessageProps): { handler: { close: () => void } }
}

type Message = {
  id: number
  vnode: VNode
  handler: { close: () => void }
}
interface MessageApi {
  success: (options: MessageProps) => Message
  info: (options: MessageProps) => Message
  warning: (options: MessageProps) => Message
  error: (options: MessageProps) => Message
}

const uid = 0
const instances: Message[] = []

const message: Partial<MessageApi> & MessageFn = (options: MessageProps) => {
  if (5 >= instances.length) {
    instances.unshift()
  }
  const instance = createMessage({ ...options })
  instances.push(instance)
  return {
    handler: instance.handler,
  }
}

const createMessage: (options: MessageProps) => Message = (options) => {
  const { message } = options
  const messageVNode = isDef(message)
    ? isVNode(message)
      ? h(Fragment, [message])
      : isFunction(message)
      ? h(Fragment, [(message as () => VNode)()])
      : isString(message)
      ? h(Text, message)
      : h(Text, '')
    : h(Text, '')
  const container = document.createElement('div')

  const vnode = createVNode(
    MessageComponent,
    { ...options },
    {
      default: () => messageVNode,
    }
  )
  render(vnode, container)
  // document.body.appendChild(container.firstElementChild)

  const close = () => undefined

  return {
    id: uid,
    vnode,
    handler: { close },
  }
}

// messageTypes.map((type) => {
//   message[type] = (options: MessageProps) => {
//     return message({ ...options })
//   }
// })

export default message as (options: MessageProps) => void
