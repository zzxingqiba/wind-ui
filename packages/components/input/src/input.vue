<template>
  <div :class="inputKls">
    <!-- prepend slot -->
    <div v-if="$slots.prepend" :class="inputPrependKls">
      <slot name="prepend" />
    </div>
    <div :class="inputWrapperKls">
      <!-- prefix slot -->
      <span :class="inputPrefixKls">
        <slot name="prefix" />
      </span>
      <input
        ref="selfRef"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :readonly="readonly"
        :placeholder="placeholder"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
      <!-- suffix slot -->
      <span :class="inputSuffixKls">
        <slot name="suffix" />
      </span>
    </div>
    <!-- append slot -->
    <div :class="inputAppendKls">
      <slot name="append" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'
import { useNamespace } from '@wind/hooks/use-namespace'
import { inputProps, inputEmits } from './input'
import type { TargetElement } from './input'
import { Event as EnumEvent } from '@wind/constants'
export default defineComponent({
  name: 'WdInput',
  props: inputProps,
  emits: inputEmits,
  setup(props, { emit }) {
    const ns = useNamespace('input')
    const inputKls = [ns.b()]
    const inputPrependKls = [ns.e('prepend')]
    const inputWrapperKls = [ns.e('wrapper')]
    const inputPrefixKls = [ns.e('prefix')]
    const inputSuffixKls = [ns.e('suffix')]
    const inputAppendKls = [ns.e('append')]

    const selfRef = ref<HTMLInputElement>()
    const passwordVisible = ref(false)
    const isComposing = ref(false)
    const focused = ref(false)

    const handleCompositionStart = (event: CompositionEvent) => {
      emit('compositionstart', event)
      isComposing.value = true
    }

    const handleCompositionUpdate = (event: CompositionEvent) => {
      emit('compositionupdate', event)
      isComposing.value = true
    }

    const handleCompositionEnd = (event: CompositionEvent) => {
      emit('compositionend', event)
      if (isComposing.value) {
        isComposing.value = false
        handleInput(event)
      }
    }

    const handleChange = (event: Event) => {
      emit(EnumEvent.CHANGE_EVENT, (event.target as TargetElement).value)
    }

    const handleInput = (event: Event) => {
      const { value } = event.target as TargetElement
      if (isComposing.value) return
      emit(EnumEvent.UPDATE_MODEL_EVENT, value)
      emit(EnumEvent.INPUT_EVENT, value)
    }

    const handleFocus = (event: FocusEvent) => {
      focused.value = true
      emit('focus', event)
    }

    const focus = async () => {
      await nextTick()
      selfRef.value?.focus()
    }

    const handleBlur = (event: FocusEvent) => {
      focused.value = false
      emit('blur', event)
    }

    const blur = () => selfRef.value?.blur()

    return {
      selfRef,

      inputKls,
      inputPrependKls,
      inputWrapperKls,
      inputPrefixKls,
      inputSuffixKls,
      inputAppendKls,

      passwordVisible,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handleInput,
      handleFocus,
      handleBlur,
      handleChange,

      blur,
      focus,
    }
  },
})
</script>
