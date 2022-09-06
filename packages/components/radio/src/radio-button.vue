<template>
  <div :class="ns.b()"><slot /></div>
</template>

<script>
import { useNamespace } from '@wind/hooks/use-namespace'
export default {
  name: 'WdRadioButton',
  setup(props, { emit }) {
    const ns = useNamespace('radio-button')
    return {
      ns,
    }
  },
}
</script>
