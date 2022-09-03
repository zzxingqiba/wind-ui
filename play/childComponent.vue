<script lang="ts">
import { defineComponent, Fragment, h } from 'vue'
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
