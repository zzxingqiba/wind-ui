<template>
  <div :class="switchKls" @click="handleChange">
    <input
      ref="selfRef"
      type="checkbox"
      role="switch"
      :class="ns.e('input')"
      @change="handleChange"
    />
    <div :class="ns.e('rail')">
      <!-- is only placeholder -->
      <div v-if="inactiveText || activeText" :class="ns.e('placeholder')">
        <span>{{ inactiveText }}</span>
        <span>{{ activeText }}</span>
      </div>
      <div :class="ns.e('ball')">
        <div :class="ns.e('inactive-text')">{{ inactiveText }}</div>
        <div :class="ns.e('active-text')">{{ activeText }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { switchProps } from './switch'
import { useNamespace } from '@wind/hooks/use-namespace'
import { useSize } from '@wind/hooks/use-size'
export default defineComponent({
  name: 'WdSwitch',
  props: switchProps,
  setup(props, { emit }) {
    const ns = useNamespace('switch')
    const switchSize = useSize()
    const switchKls = computed(() => [
      ns.b(),
      ns.m(switchSize.value),
      ns.is('disabled', props.disabled),
      ns.is('checked', checked.value),
    ])
    const namespace = computed(() => ns.namespace.value ?? '')

    const _inactiveText = computed(() => props.inactiveText ?? undefined)
    const _activeText = computed(() => props.activeText ?? undefined)

    const selfRef = ref<HTMLInputElement>()
    const controlledRef = ref(props.modelValue != false)
    watch(
      () => props.modelValue,
      () => {
        controlledRef.value = true
      }
    )
    watch(
      () => props.value,
      () => {
        controlledRef.value = false
      }
    )
    const actualValue = computed(() =>
      controlledRef.value ? props.modelValue : props.value
    )
    const checked = computed(() => actualValue.value === props.activeValue)
    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit('update:modelValue', props.inactiveValue)
      emit('update:value', props.inactiveValue)
    }

    watch(checked, (val) => {
      selfRef.value!.checked = val
    })

    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue
      emit('update:modelValue', val)
      emit('update:value', val)
    }

    onMounted(() => {
      selfRef.value!.checked = checked.value
    })
    return {
      namespace,
      ns,
      switchKls,
      selfRef,
      inactiveText: _inactiveText,
      activeText: _activeText,
      handleChange,
    }
  },
})
</script>
