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
        :class="inputInnerKls"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :readonly="readonly"
        :placeholder="placeholder"
        :disabled="disabled"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
      <!-- suffix slot -->
      <!--  -->
      <span v-if="suffixVisible" :class="inputSuffixKls">
        <template v-if="clearable">
          <i class="w-icon-xiasanjiao" style="color: #7a69eb" />
        </template>
        <template v-else>
          <slot name="suffix" />
        </template>
      </span>
    </div>
    <!-- append slot -->
    <div v-if="$slots.append" :class="inputAppendKls">
      <slot name="append" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, computed, watch, onMounted } from 'vue'
import { useNamespace } from '@wind/hooks/use-namespace'
import { inputProps, inputEmits } from './input'
import type { TargetElement } from './input'
import { Event as EnumEvent } from '@wind/constants'
export default defineComponent({
  name: 'WdInput',
  props: inputProps,
  emits: inputEmits,
  setup(props, { emit, slots }) {
    const ns = useNamespace('input')

    const selfRef = ref<HTMLInputElement>()
    const passwordVisible = ref(false)
    const isComposing = ref(false)
    const focused = ref(false)

    const inputKls = [
      ns.b(),
      {
        [ns.b('group')]: slots.prepend || slots.append,
        [ns.bm('group', 'prepend')]: slots.prepend,
        [ns.bm('group', 'append')]: slots.append,
      },
      ns.is('disabled', props.disabled),
    ]
    const inputPrependKls = [ns.e('prepend')]
    const inputWrapperKls = computed(() => [
      ns.e('wrapper'),
      ns.is('focus', focused.value),
    ])
    const inputPrefixKls = [ns.e('prefix')]
    const inputInnerKls = [ns.e('inner')]
    const inputSuffixKls = [ns.e('suffix')]
    const inputAppendKls = [ns.e('append')]

    const showClear = computed(
      () =>
        props.clearable &&
        !props.disabled &&
        !props.readonly &&
        !!nativeInputValue.value &&
        focused.value
    )

    const suffixVisible = computed(() => !!slots.suffix || showClear.value)

    const nativeInputValue = computed(() =>
      props.modelValue === (undefined || null) ? '' : String(props.modelValue)
    )
    const setNativeInputValue = () => {
      const input = selfRef.value
      if (!input || input.value === nativeInputValue.value) return
      input.value = nativeInputValue.value
    }
    watch(nativeInputValue, () => setNativeInputValue())

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

    const handleInput = async (event: Event) => {
      const { value } = event.target as TargetElement
      if (isComposing.value) return
      if (value === nativeInputValue.value) return
      emit(EnumEvent.UPDATE_MODEL_EVENT, value)
      emit(EnumEvent.INPUT_EVENT, value)

      await nextTick()
      setNativeInputValue()
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

    onMounted(() => {
      setNativeInputValue()
    })

    return {
      selfRef,

      inputKls,
      inputPrependKls,
      inputWrapperKls,
      inputPrefixKls,
      inputInnerKls,
      inputSuffixKls,
      inputAppendKls,

      suffixVisible,
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
