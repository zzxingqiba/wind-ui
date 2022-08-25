<template>
  <button :class="[ns.b(), ns.is('bold', bold)]">
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { buttonProps } from './button'
import { useNamespace } from '@wind/hooks/use-namespace'
export default defineComponent({
  name: 'WdButton',
  props: buttonProps,
  setup(props) {
    const _bold = computed(() => props.bold ?? '')
    const ns = useNamespace('button')
    return {
      ns,
      bold: _bold,
    }
  },
})
</script>
