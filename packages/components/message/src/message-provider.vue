<template>
  <div :class="messageContainerKls">
    <slot />
    <Teleport :to="to || 'body'">
      <MdMessage
        v-for="message in messageList"
        :key="message.key"
        :duration="!!message.duration ? message.duration : duration"
        :closable="!!message.closable ? message.closable : closable"
        :type="message.type"
        :icon="message.icon"
        :message="message.message"
      />
    </Teleport>
  </div>
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
  MessageReactive,
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
    const messageContainerKls = computed(() => [ns.b()])

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
      const messageReactive: MessageReactive = reactive({
        ...options,
        key,
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
    return {
      ...toRefs(props),
      messageContainerKls,
      messageList: messageListRef,
    }
  },
})
</script>
