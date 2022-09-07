## Play Message

## entry main.ts

import { createApp } from 'vue'
import APP from './app.vue'
import WdButton from '@wind/components/button'
import WdMessageProvider from '@wind/components/message'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdButton).use(WdMessageProvider)
app.mount('#app')

## test app.vue

<template>
  <wd-message-provider :appear="appear">
    <wd-button-group @click="onClick" />
  </wd-message-provider>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import WdButtonGroup from './childComponent.vue'

export default defineComponent({
components: {
WdButtonGroup,
},
setup() {
const appear = ref()
const onClick = (value: string) => {
appear.value = value
}
return {
appear,
onClick,
}
},
})
</script>

## test childComponent.vue

<script lang="ts">
import { defineComponent, h } from 'vue'
import { useMessage } from '@wind/components/message'
import WdButton from '@wind/components/button'
export default defineComponent({
  emits: ['click'],
  setup() {
    const message = useMessage()
    return {
      message,
    }
  },
  render() {
    const { message } = this
    const children = [
      'top',
      'top-left',
      'top-right',
      'bottom',
      'bottom-left',
      'bottom-right',
    ].map((item) =>
      h(
        WdButton,
        {
          type: 'primary',
          style: { 'margin-right': '10px' },
          onClick: () => {
            this.$emit('click', item)
            item == 'top' &&
              message!.info({
                message:
                  'May you walk all over the mountains and seas and feel that the world is worth it.',
                closable: true,
              })
            item == 'top-left' &&
              message!.success({
                message:
                  'May you walk all over the mountains and seas and feel that the world is worth it.',
                closable: true,
              })
            item == 'top-right' &&
              message!.error({
                message:
                  'May you walk all over the mountains and seas and feel that the world is worth it.',
                closable: true,
              })
            item == 'bottom' &&
              message!.warning({
                message:
                  'May you walk all over the mountains and seas and feel that the world is worth it.',
                closable: true,
              })
            item == 'bottom-left' &&
              message!.info({
                message:
                  'May you walk all over the mountains and seas and feel that the world is worth it.',
                icon: () => h('i', { class: 'w-icon-caomei' }),
                closable: true,
                duration: 5000,
                onClose: () => {
                  console.log('onClose')
                },
                onLeave: () => {
                  console.log('onLeave')
                },
                onAfterLeave: () => {
                  console.log('onAfterLeave')
                },
              })
            item == 'bottom-right' &&
              message!.info({
                message:
                  'May you walk all over the mountains and seas and feel that the world is worth it.',
                showIcon: false,
              })
          },
        },
        {
          default: () => item,
        }
      )
    )
    return h(
      'div',
      {
        style: {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
          height: '60vh',
        },
      },
      [children]
    )
  },
})
</script>
