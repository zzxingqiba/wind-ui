<template>
  <button :class="type">
    <slot name="default"></slot>
    <slot name="right-icon"></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { buttonProps } from './button'
export default defineComponent({
  name: 'WdButton',
  props: buttonProps,
  setup(props) {
    const _type = computed(() => props.type ?? '')
    return {
      type: _type,
    }
  },
})
</script>
