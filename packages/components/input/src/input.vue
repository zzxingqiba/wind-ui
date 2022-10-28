<template>
  <div
    :class="inputKls"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
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
      <div v-if="suffixVisible" :class="inputSuffixKls">
        <!-- clearable -->
        <template v-if="clearable">
          <div :class="inputIconKls" @click="handleClear">
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="currentColor" fill-rule="nonzero">
                  <path
                    d="M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </template>
        <!-- showPassword -->
        <template v-else-if="showPassword">
          <div :class="inputIconKls" @click="handlePasswordVisible">
            <svg
              v-if="passwordVisible"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <circle
                cx="256"
                cy="256"
                r="80"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z"
                fill="currentColor"
              />
              <path
                d="M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z"
                fill="currentColor"
              />
              <path
                d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z"
                fill="currentColor"
              />
              <path
                d="M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z"
                fill="currentColor"
              />
              <path
                d="M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z"
                fill="currentColor"
              />
            </svg>
          </div>
        </template>
        <template v-else>
          <slot name="suffix" />
        </template>
      </div>
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
    const hovering = ref(false)

    const inputKls = [
      ns.b(),
      ns.m(props.size),
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
    const inputIconKls = [ns.e('icon')]

    const showClear = computed(
      () =>
        props.clearable &&
        !props.disabled &&
        !props.readonly &&
        !!nativeInputValue.value &&
        (focused.value || hovering.value)
    )

    const suffixVisible = computed(
      () => !!slots.suffix || showClear.value || props.showPassword
    )

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

    const handleClear = () => {
      emit(EnumEvent.UPDATE_MODEL_EVENT, '')
      emit(EnumEvent.CHANGE_EVENT, '')
      emit('clear')
      emit(EnumEvent.INPUT_EVENT, '')
    }

    const handleMouseLeave = (evt: MouseEvent) => {
      hovering.value = false
      emit('mouseleave', evt)
    }

    const handleMouseEnter = (evt: MouseEvent) => {
      hovering.value = true
      emit('mouseenter', evt)
    }

    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value
      focus()
    }

    return {
      selfRef,

      inputKls,
      inputPrependKls,
      inputWrapperKls,
      inputPrefixKls,
      inputInnerKls,
      inputSuffixKls,
      inputAppendKls,
      inputIconKls,

      suffixVisible,
      passwordVisible,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handleInput,
      handleFocus,
      handleBlur,
      handleChange,
      handleClear,
      handleMouseLeave,
      handleMouseEnter,
      handlePasswordVisible,

      blur,
      focus,
    }
  },
})
</script>
