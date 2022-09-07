<template>
  <label :class="radioButtonKls">
    <input
      ref="radio"
      type="radio"
      :value="label"
      :checked="renderSafeChecked"
      :class="ns.e('input')"
      :disabled="disabled"
      :name="name"
      @change="handleChange"
      @focus="handleRadioInputFocus"
      @blur="handleRadioInputBlur"
    />
    <div :class="innerKls">
      <slot>
        {{ label }}
      </slot>
    </div>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from 'vue'
import { useNamespace } from '@wind/hooks/use-namespace'
import { Event } from '@wind/constants'
import { radioGroupApiInjectionKey } from './context'
import type { RadioGroupInjection } from './radio-group'
import { createInjectionKey } from '@wind/utils'
import { radioButtonProps, radioButtonEmits } from './radio-button'
export default defineComponent({
  name: 'WdRadioButton',
  props: radioButtonProps,
  emits: radioButtonEmits,
  setup(props, { emit }) {
    const ns = useNamespace('radio-button')
    const focusRef = ref(false)
    const radioButtonKls = computed(() => [
      ns.b(),
      ns.m(mergeSize.value),

      ns.is('disabled', mergeDisabled.value),
    ])
    const innerKls = computed(() => [
      ns.e('inner'),
      ns.is('check', renderSafeChecked.value),
      ns.is('focus', focusRef.value),
    ])
    const radioGroup = inject(
      createInjectionKey<RadioGroupInjection>(radioGroupApiInjectionKey),
      null
    )

    const mergeDisabled = computed(() => {
      if (props.disabled) return props.disabled
      if (radioGroup) return radioGroup.disabledRef.value
      return false
    })

    const mergeSize = computed(() => {
      if (radioGroup) return radioGroup.mergedSizeRef.value
      return ''
    })

    const handleRadioInputBlur = () => {
      focusRef.value = false
    }
    const handleRadioInputFocus = () => {
      focusRef.value = true
    }

    const renderSafeChecked = computed(() => {
      // group
      if (radioGroup) return radioGroup.modelValueRef.value == props.label
      return false
    })

    const toggle = () => {
      if (mergeDisabled.value) return
      if (radioGroup) {
        radioGroup.UpdateValue(props.label)
        return
      }
      emit(Event.UPDATE_MODEL_EVENT, props.label)
      emit(Event.CHANGE_EVENT, props.label)
    }

    const handleChange = () => {
      toggle()
    }
    return {
      ns,
      radioButtonKls,
      innerKls,
      renderSafeChecked,
      radioGroup,
      handleChange,
      handleRadioInputBlur,
      handleRadioInputFocus,
    }
  },
})
</script>
