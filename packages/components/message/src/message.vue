<script lang="ts">
import { useNamespace } from '@wind/hooks/use-namespace'
import { computed, defineComponent, Text, h, onMounted, ref } from 'vue'
import { messageProps } from './message'
export default defineComponent({
  name: 'WdMessage',
  props: messageProps,
  setup(props) {
    let timerId: number | null = null
    const showRef = ref<boolean>(true)
    onMounted(() => {
      setHideTimeout()
    })
    const setHideTimeout = (): void => {
      const { duration } = props
      if (duration) {
        timerId = window.setTimeout(hide, duration)
      }
    }
    const hide = () => {
      showRef.value = false
      if (timerId) {
        window.clearTimeout(timerId)
        timerId = null
      }
    }
    const ns = useNamespace('message')

    const iconVNode = computed(() => props.icon?.() || h(Text, ''))

    const messageKls = computed(() => [ns.b()])
    const onClose = () => {
      const { onClose } = props
      if (onClose) onClose()
      hide()
    }
    return {
      ns,
      messageKls,
      iconVNode,
      show: showRef,
      onClose,
    }
  },
  render() {
    const {
      ns,
      type,
      icon,
      show,
      showIcon,
      closable,
      messageKls,
      iconVNode,
      message,
      onClose,
    } = this
    if (!show) return null
    const iconVNodeSlot =
      showIcon &&
      (icon
        ? h('div', { class: ns.e('icon') }, [iconVNode])
        : h('i', { class: `w-icon-${type}` }))
    const messageVNodeSlot = message
      ? h('div', { class: ns.e('message') }, message)
      : h(Text, '')
    const closeVNodeSlot =
      closable &&
      h(
        'div',
        { class: ns.e('close'), onClick: () => onClose() },
        h('i', { class: 'w-icon-close' })
      )

    return h('div', { class: [ns.b('wrapper'), ns.bm('wrapper', type)] }, [
      h('div', { class: messageKls }, [
        // icon
        iconVNodeSlot,
        // message
        messageVNodeSlot,
        // close
        closeVNodeSlot,
      ]),
    ])
  },
})
</script>
