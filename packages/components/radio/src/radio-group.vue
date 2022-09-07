<template>
  <div :class="ns.b()"><slot /></div>
</template>

<script lang="ts">
import { defineComponent, provide, toRef } from 'vue'
import { useNamespace } from '@wind/hooks/use-namespace'
import { createInjectionKey } from '@wind/utils'
import { radioGroupApiInjectionKey } from './context'
import { radioGroupProps, radioGroupEmits } from './radio-group'
import type { RadioGroupInjection } from './radio-group'
import { Event } from '@wind/constants'
export default defineComponent({
  name: 'WdRadioGroup',
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(props, { emit }) {
    const ns = useNamespace('radio-group')
    provide(
      createInjectionKey<RadioGroupInjection>(radioGroupApiInjectionKey),
      {
        modelValueRef: toRef(props, 'modelValue'),
        mergedSizeRef: toRef(props, 'size'),
        disabledRef: toRef(props, 'disabled'),
        UpdateValue: (val) => {
          emit(Event.UPDATE_MODEL_EVENT, val)
          emit(Event.CHANGE_EVENT, val)
        },
      }
    )
    return {
      ns,
    }
  },
})
</script>
