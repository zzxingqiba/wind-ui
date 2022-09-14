<template>
  <div :class="ns.b()"><slot /></div>
</template>

<script lang="ts">
import { defineComponent, provide, toRef } from 'vue'
import { checkboxGroupProps, radioGroupEmits } from './checkbox-group'
import { useNamespace } from '@wind/hooks/use-namespace'
import { createInjectionKey } from '@wind/utils'
import type { CheckboxGroupInjection } from './checkbox-group'
import { checkboxGroupApiInjectionKey } from './context'
import { Event } from '@wind/constants'
export default defineComponent({
  name: 'WdCheckboxGroup',
  props: checkboxGroupProps,
  emits: radioGroupEmits,

  setup(props, { emit }) {
    const ns = useNamespace('checkbox-group')
    provide(
      createInjectionKey<CheckboxGroupInjection>(checkboxGroupApiInjectionKey),
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
