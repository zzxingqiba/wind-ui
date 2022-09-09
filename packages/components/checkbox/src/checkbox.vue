<template>
  <div :class="checkboxKls">22</div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@wind/hooks/use-namespace'
export default defineComponent({
  name: 'WdCheckbox',
  setup(props, { emit }) {
    const ns = useNamespace('radio')

    const checkboxKls = computed(() => [
      ns.b(),
      ns.m(mergeSize.value),
      ns.is('disabled', mergeDisabled.value),
    ])

    const mergeSize = computed(() => {
      if (props.size) return props.size
      if (checkboxGroup) return checkboxGroup.mergedSizeRef.value
      return ''
    })

    const mergeDisabled = computed(() => {
      if (props.disabled) return props.disabled
      if (checkboxGroup) return checkboxGroup.disabledRef.value
      return false
    })

    return {
      checkboxKls,
    }
  },
})
</script>
