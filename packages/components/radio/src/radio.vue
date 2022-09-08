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
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@wind/hooks/use-namespace'
import { radioProps, radioEmits } from './radio'
import { useRadio } from './context'
export default defineComponent({
  name: 'WdRadio',
  props: radioProps,
  emits: radioEmits,
  setup(props, { emit }) {
    const ns = useNamespace('radio')

    const {
      focusRef,
      radioGroup,
      mergeDisabled,
      handleChange,
      handleRadioInputFocus,
      handleRadioInputBlur,
    } = useRadio(props, emit)

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

    const mergeSize = computed(() => {
      if (props.size) return props.size
      if (radioGroup) return radioGroup.mergedSizeRef.value
      return ''
    })

    const singleCheckedRef = computed(() => props.modelValue == props.label)

    const renderSafeChecked = computed(() => {
      // group
      if (radioGroup) return radioGroup.modelValueRef.value == props.label
      return singleCheckedRef.value
    })

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
