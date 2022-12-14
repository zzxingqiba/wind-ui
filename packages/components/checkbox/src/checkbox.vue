<template>
  <div
    ref="selfRef"
    role="checkbox"
    :tabindex="mergeDisabled ? undefined : 0"
    :aria-checked="mergeChecked"
    :class="checkboxKls"
    @click="handleClick"
  >
    <div :class="boxWrapperKls">
      <svg v-if="indeterminate" viewBox="0 0 100 100" :class="checkIconKls">
        <path
          d="M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"
        />
      </svg>
      <svg v-else viewBox="0 0 64 64" :class="checkIconKls">
        <path
          d="M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"
        />
      </svg>
    </div>
    <div :class="labelKls">
      <slot>
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@wind/hooks/use-namespace'
import { checkboxProps, checkboxEmits } from './checkbox'
import {
  useInject,
  useDisabled,
  useSize,
  useChecked,
  useToggle,
} from './context'

export default defineComponent({
  name: 'WdCheckbox',
  props: checkboxProps,
  emit: checkboxEmits,
  setup(props) {
    const ns = useNamespace('checkbox')
    const checkboxKls = computed(() => [
      ns.b(),
      ns.m(mergeSize.value),
      ns.is('checked', mergeChecked.value),
      ns.is('disabled', mergeDisabled.value),
    ])
    const checkIconKls = computed(() => [ns.e('check-icon')])
    const labelKls = computed(() => [ns.e('label')])
    const boxWrapperKls = computed(() => [ns.e('box-wrapper')])

    const checkboxGroup = useInject()
    const mergeSize = useSize(props, checkboxGroup)
    const mergeChecked = useChecked(props, checkboxGroup)
    const mergeDisabled = useDisabled(props, { checkboxGroup, mergeChecked })

    return {
      checkboxKls,
      boxWrapperKls,
      checkIconKls,
      labelKls,
      mergeChecked,
      mergeDisabled,
      handleClick: useToggle(props, {
        mergeDisabled,
        checkboxGroup,
        mergeChecked,
      }),
    }
  },
})
</script>
