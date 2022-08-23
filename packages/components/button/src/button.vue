<template>
  <button :class="[]">
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { buttonProps } from './button'
import { useNamespace } from '@wind/hooks'
export default defineComponent({
  name: 'WdButton',
  props: buttonProps,
  setup(props) {
    const _type = computed(() => props.type ?? '')
    const ns = useNamespace('button')
    return {
      ns,
      type: _type,
    }
  },
})
</script>
