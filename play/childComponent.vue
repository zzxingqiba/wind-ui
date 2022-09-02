<script lang="ts">
import { defineComponent, Fragment, h } from 'vue'
import { useMessage } from '@wind/components/message'
import WdButton from '@wind/components/button'
export default defineComponent({
  emits: ['change'],
  setup() {
    const message = useMessage()
    return {
      message,
    }
  },
  render() {
    const { message, $emit } = this
    return h(Fragment, [
      h(
        WdButton,
        {
          type: 'primary',
          onClick: () => {
            $emit('change', 'hh')
            message!.info({
              message: 'How many roads must a man walk down',
              icon: () => h('div', '22'),
            })
          },
        },
        {
          default: () => '点我',
        }
      ),
    ])
  },
})
</script>
