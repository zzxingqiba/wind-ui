<template>
  <div
    ref="selfRef"
    role="checkbox"
    :tabindex="mergeDisabled ? undefined : 0"
    :aria-checked="mergeChecked"
    :class="checkboxButtonKls"
    @click="handleClick"
  >
    <div :class="innerKls">
      <slot> {{ label }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useNamespace } from '@wind/hooks/use-namespace'
import {
  useInject,
  useDisabled,
  useSize,
  useChecked,
  useToggle,
} from './context'
import { checkboxButtonProps, checkboxButtonEmits } from './checkbox-button'
export default defineComponent({
  name: 'WdCheckboxButton',
  props: checkboxButtonProps,
  emits: checkboxButtonEmits,
  setup(props) {
    const ns = useNamespace('checkbox-button')
    const checkboxButtonKls = computed(() => [
      ns.b(),
      ns.m(mergeSize.value),
      ns.is('checked', mergeChecked.value),
      ns.is('disabled', mergeDisabled.value),
    ])
    const innerKls = computed(() => [ns.e('inner')])

    const checkboxGroup = useInject()
    const mergeSize = useSize(props, checkboxGroup)
    const mergeDisabled = useDisabled(props, checkboxGroup)
    const mergeChecked = useChecked(props, checkboxGroup)
    return {
      checkboxButtonKls,
      innerKls,
      mergeChecked,
      mergeDisabled,
      handleClick: useToggle(props, {
        mergeDisabled,
        checkboxGroup,
        mergeChecked,
      }),
    }
  },
})
</script>
