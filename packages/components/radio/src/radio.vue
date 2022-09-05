<template>
  <label :class="radioKls">
    <input
      ref="radio"
      :value="label"
      :class="ns.e('input')"
      type="radio"
      @change="hanleChange"
      @focus="handleRadioInputFocus"
      @blur="handleRadioInputBlur"
    />
    <div :class="ns.e('dot-wrapper')">
      <span :class="dotKls" />
    </div>
    <div :class="labelKls">
      <slot>
        {{ label }}
      </slot>
    </div>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useNamespace } from '@wind/hooks/use-namespace'
import { radioProps, radioEmits } from './radio'
import { Event } from '@wind/constants'
export default defineComponent({
  name: 'WdRadio',
  props: radioProps,
  emits: radioEmits,
  setup(props, { emit }) {
    const ns = useNamespace('radio')
    const focusRef = ref(false)
    const radioKls = computed(() => [ns.b(), ns.is('focus', focusRef.value)])
    const labelKls = computed(() => [ns.e('label')])
    const dotKls = computed(() => [
      ns.e('dot'),
      ns.is('check', props.modelValue == props.label),
    ])

    const radioRef = ref<HTMLInputElement>()
    const value = ref()

    const handleRadioInputBlur = () => {
      focusRef.value = false
    }
    const handleRadioInputFocus = () => {
      focusRef.value = true
    }

    const hanleChange = () => {
      if (props.modelValue != props.label) {
        emit(Event.UPDATE_MODEL_EVENT, props.label)
        radioRef.value!.checked = props.modelValue == props.label
      }
    }

    return {
      ns,
      radioKls,
      labelKls,
      dotKls,
      radio: radioRef,
      value,
      hanleChange,
      handleRadioInputBlur,
      handleRadioInputFocus,
    }
  },
})
</script>
