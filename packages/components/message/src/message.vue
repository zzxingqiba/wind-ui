<script lang="ts">
import { useNamespace } from '@wind/hooks/use-namespace'
import { computed, defineComponent, Text, h } from 'vue'
import { messageProps } from './message'
export default defineComponent({
  name: 'WdMessage',
  props: messageProps,
  setup(props, { emit }) {
    const ns = useNamespace('message')
    const namespace = computed(() => ns.namespace.value ?? '')

    const iconVNode = computed(() => props.icon?.() || h(Text, ''))

    const messageKls = computed(() => [ns.b()])
    const onClose = () => {}
    return {
      ns,
      namespace,
      messageKls,
      iconVNode,
      onClose,
    }
  },
  render() {
    const { ns, namespace, messageKls, iconVNode, message, onClose } = this
    return h('div', { class: messageKls }, [
      // icon
      h('div', { class: ns.e('icon') }, [iconVNode]),
      // message
      h('div', { class: ns.e('message') }, message),
      // close
      h(
        'div',
        { class: ns.e('close'), onClick: () => onClose() },
        h('i', { class: 'w-icon-xiasanjiao' })
      ),
    ])
  },
})
</script>
