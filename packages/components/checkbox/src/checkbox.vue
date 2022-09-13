<template>
  <div ref="selfRef" role="checkbox" :class="checkboxKls" @click="handleClick">
    <div :class="boxWrapperKls"></div>
    <div :class="labelKls">
      <slot>
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<script>
import { Event } from '@wind/constants'
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@wind/hooks/use-namespace'
import { checkboxProps, checkEmits } from './checkbox'
export default defineComponent({
  name: 'WdCheckbox',
  props: checkboxProps,
  emit: checkEmits,
  setup(props, { emit }) {
    const ns = useNamespace('checkbox')

    const checkboxKls = computed(() => [
      ns.b(),
      ns.m(mergeSize.value),
      ns.m('checked', mergeChecked.value),
      ns.is('disabled', mergeDisabled.value),
    ])

    const labelKls = computed(() => [ns.e('label')])
    const boxWrapperKls = computed(() => [ns.e('box-wrapper')])

    const mergeChecked = computed(
      () => props.modelValue === props.trueLabel || props.modelValue === true
    )

    const mergeSize = computed(() => {
      if (props.size) return props.size
      // if (checkboxGroup) return checkboxGroup.mergedSizeRef.value
      return ''
    })

    const mergeDisabled = computed(() => {
      if (props.disabled) return props.disabled
      // if (checkboxGroup) return checkboxGroup.disabledRef.value
      return false
    })

    const toggle = () => {
      const nextChecked = mergeChecked.value
        ? props.falseLabel ?? false
        : props.trueLabel ?? true
      emit(Event.UPDATE_MODEL_EVENT, nextChecked)
      emit(Event.CHANGE_EVENT, nextChecked)
    }

    const handleClick = () => {
      toggle()
    }

    return {
      checkboxKls,
      boxWrapperKls,
      labelKls,
      handleClick,
    }
  },
})
</script>
