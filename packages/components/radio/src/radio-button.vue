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
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@wind/hooks/use-namespace'
import { useRadio } from './context'
import { radioButtonProps, radioButtonEmits } from './radio-button'
import { Event } from '@wind/constants'
export default defineComponent({
  name: 'WdRadioButton',
  props: radioButtonProps,
  emits: radioButtonEmits,
  setup(props, { emit }) {
    const ns = useNamespace('radio-button')

    const {
      focusRef,
      radioGroup,
      mergeDisabled,
      handleRadioInputFocus,
      handleRadioInputBlur,
    } = useRadio(props)

    const radioButtonKls = computed(() => [
      ns.b(),
      ns.m(mergeSize.value),
      ns.is('disabled', mergeDisabled.value),
    ])

    const innerKls = computed(() => [
      ns.e('inner'),
      ns.is('check', renderSafeChecked.value),
      ns.is('focus', !mergeDisabled.value && focusRef.value),
    ])

    const mergeSize = computed(() => {
      if (radioGroup) return radioGroup.mergedSizeRef.value
      return ''
    })

    const renderSafeChecked = computed(() => {
      // group
      if (radioGroup) return radioGroup.modelValueRef.value == props.label
      // button cannot be used alone
      return false
    })

    const toggle = () => {
      if (mergeDisabled.value) return
      if (radioGroup) {
        radioGroup.UpdateValue(props.label)
        return
      }
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
