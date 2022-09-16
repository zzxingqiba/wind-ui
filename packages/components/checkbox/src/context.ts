import { computed, inject, getCurrentInstance } from 'vue'
import type { ComputedRef } from 'vue'
import type { CheckboxGroupInjection } from './checkbox-group'
import { createInjectionKey } from '@wind/utils'
import type { CheckBoxProps } from './checkbox'
import { Event } from '@wind/constants'

export const checkboxGroupApiInjectionKey = Symbol(
  'CheckboxGroupApiInjectionKey'
)

export const useInject = () => {
  return inject(
    createInjectionKey<CheckboxGroupInjection>(checkboxGroupApiInjectionKey),
    null
  )
}

export const useDisabled = (
  props: CheckBoxProps,
  {
    checkboxGroup,
    mergeChecked,
  }: {
    checkboxGroup: CheckboxGroupInjection | null
    mergeChecked: ComputedRef<boolean>
  }
) => {
  return computed(() => {
    if (props.disabled) return props.disabled
    if (checkboxGroup) {
      return (
        checkboxGroup.disabledRef.value ||
        (!!checkboxGroup.max.value &&
          checkboxGroup.max.value <= checkboxGroup.valueSetRef.value.size &&
          !mergeChecked.value) ||
        (!!checkboxGroup.min.value &&
          checkboxGroup.min.value >= checkboxGroup.valueSetRef.value.size &&
          mergeChecked.value)
      )
    }
    return false
  })
}

export const useSize = (
  props: CheckBoxProps,
  checkboxGroup: CheckboxGroupInjection | null
) =>
  computed(() => {
    if (props.size) return props.size
    if (checkboxGroup) return checkboxGroup.mergedSizeRef.value
    return ''
  })

export const useChecked = (
  props: CheckBoxProps,
  checkboxGroup: CheckboxGroupInjection | null
) =>
  computed(() => {
    if (checkboxGroup) {
      return checkboxGroup.valueSetRef.value.has(props.label)
    }
    return props.modelValue === (props.trueLabel ?? true)
  })

export const useToggle = (
  props: CheckBoxProps,
  {
    mergeDisabled,
    checkboxGroup,
    mergeChecked,
  }: {
    mergeDisabled: ComputedRef<boolean>
    checkboxGroup: CheckboxGroupInjection | null
    mergeChecked: ComputedRef<boolean>
  }
) => {
  const { emit } = getCurrentInstance()!
  return () => {
    if (mergeDisabled.value) return
    if (checkboxGroup) {
      return checkboxGroup.toggleCheckbox(mergeChecked.value, props.label)
    }
    const nextChecked = mergeChecked.value
      ? props.falseLabel ?? false
      : props.trueLabel ?? true
    emit(Event.UPDATE_MODEL_EVENT, nextChecked)
    emit(Event.CHANGE_EVENT, nextChecked)
  }
}
