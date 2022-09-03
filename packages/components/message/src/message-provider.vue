<template>
  <slot />
  <Teleport :to="to || 'body'">
    <div :class="messageContainerKls">
      <Transition
        v-for="message in messageList"
        :key="message.key"
        :name="transitionName"
        appear
        @leave="message.onLeave"
        @after-leave="message.onAfterLeave"
      >
        <MdMessage
          v-bind="{ ...message }"
          :duration="!!message.duration ? message.duration : duration"
          :closable="!!message.closable ? message.closable : closable"
        />
      </Transition>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { useNamespace } from '@wind/hooks/use-namespace'
import { computed, defineComponent, provide, ref, reactive, toRefs } from 'vue'
import {
  messageApiInjectionKey,
  messageProviderInjectionKey,
  increaseSeedKey,
} from './context'
import type {
  MessageOptions,
  MessageApiInjection,
  MessageType,
  PrivateMessageReactive,
} from './message'
import MdMessage from './message.vue'
import { messageProviderProps } from './message-provider'
export default defineComponent({
  name: 'WdMessageProvider',
  components: {
    MdMessage,
  },
  props: messageProviderProps,
  setup(props) {
    const ns = useNamespace('message-container')
    const transitionName = `${ns.namespace.value}-message-transition`
    const appear = computed(() => props.appear ?? 'top')
    const messageContainerKls = computed(() => [ns.b(), ns.m(appear.value)])

    const messageListRef = ref<PrivateMessageReactive[]>([])

    const api: MessageApiInjection = {
      success: (options: MessageOptions) =>
        create({ ...options, type: 'success' }),
      info: (options: MessageOptions) => create({ ...options, type: 'info' }),
      warning: (options: MessageOptions) =>
        create({ ...options, type: 'warning' }),
      error: (options: MessageOptions) => create({ ...options, type: 'error' }),
    }

    const create = (options: MessageOptions & { type: MessageType }) => {
      const key = increaseSeedKey()
      const messageReactive: PrivateMessageReactive = reactive({
        ...options,
        key,
        onAfterLeave: () => {
          hide(key)
          options?.onAfterLeave?.()
        },
      })
      const { max } = props
      if (!!max && messageListRef.value.length >= max) {
        messageListRef.value.shift()
      }
      messageListRef.value.push(messageReactive)
      return messageReactive
    }
    provide(messageProviderInjectionKey, { props })
    provide(messageApiInjectionKey, api)

    const hide = (key: string) => {
      messageListRef.value.splice(
        messageListRef.value.findIndex((message) => message.key === key),
        1
      )
    }
    return {
      ...toRefs(props),
      transitionName,
      messageContainerKls,
      messageList: messageListRef,
      hide,
    }
  },
})
</script>
