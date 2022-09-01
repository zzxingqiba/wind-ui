import MessageComponent from './message.vue'
import type { VNode } from 'vue'
import { createVNode, render, isVNode, Text, Fragment, h } from 'vue'
import type { MessageProps } from './message'
import { isUndef, isFunction, isString } from '@wind/utils'

const messageList = []

const useWdMessage = (options: MessageProps) => {
  const { message } = options
  const messageVNode = isUndef(message)
    ? isVNode(message)
      ? h(Fragment, [message])
      : isFunction(message)
      ? h(Fragment, [(message as () => VNode)()])
      : isString(message)
      ? h(Text, message)
      : h(Text, '')
    : h(Text, '')

  createVNode(MessageComponent, options, {
    default: () => messageVNode,
  })
}

export default useWdMessage
