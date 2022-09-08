import { ref, inject, computed } from 'vue'
import type { SetupContext } from 'vue'
import { Event } from '@wind/constants'
import { createInjectionKey } from '@wind/utils'
import type { RadioGroupInjection } from './radio-group'
import type { BaseRadioProps, RadioEmits } from './radio'

export const radioGroupApiInjectionKey = Symbol('RadioGroupApiInjectionKey')

export const useRadio = (
  props: BaseRadioProps,
  emit?: SetupContext<RadioEmits>['emit']
) => {
  const focusRef = ref(false)
  const radioGroup = inject(
    createInjectionKey<RadioGroupInjection>(radioGroupApiInjectionKey),
    null
  )

  const handleRadioInputBlur = () => {
    focusRef.value = false
  }
  const handleRadioInputFocus = () => {
    focusRef.value = true
  }

  const toggle = () => {
    if (mergeDisabled.value) return
    if (radioGroup) {
      radioGroup.UpdateValue(props.label)
      return
    }
    emit && emit(Event.UPDATE_MODEL_EVENT, props.label)
    emit && emit(Event.CHANGE_EVENT, props.label)
  }

  const handleChange = () => {
    toggle()
  }

  const mergeDisabled = computed(() => {
    if (props.disabled) return props.disabled
    if (radioGroup) return radioGroup.disabledRef.value
    return false
  })

  return {
    focusRef,
    radioGroup,
    mergeDisabled,
    handleChange,
    handleRadioInputFocus,
    handleRadioInputBlur,
  }
}
