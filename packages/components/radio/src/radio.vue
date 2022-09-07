<template>
  <label :class="radioKls">
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
    <div :class="ns.e('dot-wrapper')">
      <div :class="dotKls" />
    </div>
    <div :class="labelKls">
      <slot>
        {{ label }}
      </slot>
    </div>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from 'vue'
import { useNamespace } from '@wind/hooks/use-namespace'
import { radioProps, radioEmits } from './radio'
import { Event } from '@wind/constants'
import { radioGroupApiInjectionKey } from './context'
import type { RadioGroupInjection } from './radio-group'
import { createInjectionKey } from '@wind/utils'
export default defineComponent({
  name: 'WdRadio',
  props: radioProps,
  emits: radioEmits,
  setup(props, { emit }) {
    const ns = useNamespace('radio')
    const focusRef = ref(false)
    const radioKls = computed(() => [
      ns.b(),
      ns.m(mergeSize.value),
      ns.is('focus', !mergeDisabled.value && focusRef.value),
      ns.is('disabled', mergeDisabled.value),
    ])
    const labelKls = computed(() => [ns.e('label')])
    const dotKls = computed(() => [
      ns.e('dot'),
      ns.is('check', renderSafeChecked.value),
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
      if (props.size) return props.size
      if (radioGroup) return radioGroup.mergedSizeRef.value
      return ''
    })

    const handleRadioInputBlur = () => {
      focusRef.value = false
    }
    const handleRadioInputFocus = () => {
      focusRef.value = true
    }
    const singleCheckedRef = computed(() => props.modelValue == props.label)

    const renderSafeChecked = computed(() => {
      // group
      if (radioGroup) return radioGroup.modelValueRef.value == props.label
      return singleCheckedRef.value
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
      radioKls,
      labelKls,
      dotKls,
      renderSafeChecked,
      radioGroup,
      handleChange,
      handleRadioInputBlur,
      handleRadioInputFocus,
    }
  },
})
</script>
