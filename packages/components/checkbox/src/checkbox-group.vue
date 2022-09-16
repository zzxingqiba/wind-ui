<template>
  <div :class="ns.b()"><slot /></div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, toRef } from 'vue'
import { checkboxGroupProps, checkboxGroupEmits } from './checkbox-group'
import { useNamespace } from '@wind/hooks/use-namespace'
import { createInjectionKey } from '@wind/utils'
import type { CheckboxGroupInjection } from './checkbox-group'
import { checkboxGroupApiInjectionKey } from './context'
import { Event } from '@wind/constants'
export default defineComponent({
  name: 'WdCheckboxGroup',
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,

  setup(props, { emit }) {
    const ns = useNamespace('checkbox-group')
    const valueSetRef = computed<Set<string | number>>(() => {
      if (Array.isArray(props.modelValue)) {
        return new Set(props.modelValue)
      }
      return new Set()
    })
    provide(
      createInjectionKey<CheckboxGroupInjection>(checkboxGroupApiInjectionKey),
      {
        valueSetRef,
        max: toRef(props, 'max'),
        min: toRef(props, 'min'),
        mergedSizeRef: toRef(props, 'size'),
        disabledRef: toRef(props, 'disabled'),
        toggleCheckbox: (checked, checkboxValue) => {
          const groupValue = Array.from(props.modelValue)
          const index = groupValue.findIndex((value) => value === checkboxValue)
          checked ? groupValue.splice(index, 1) : groupValue.push(checkboxValue)
          emit(Event.UPDATE_MODEL_EVENT, groupValue)
          emit(Event.CHANGE_EVENT, groupValue)
        },
      }
    )
    return {
      ns,
    }
  },
})
</script>
