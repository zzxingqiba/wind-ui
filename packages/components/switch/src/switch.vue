<template>
  <div :class="switchKls" :style="style" @click="handleChange">
    <!-- Semantic -->
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
        <!-- inactive-text -->
        <div :class="ns.e('inactive-text')">{{ inactiveText }}</div>
        <!-- active-text -->
        <div :class="ns.e('active-text')">{{ activeText }}</div>
        <TransitionGroup
          :name="`${namespace}-switch-transition`"
          appear
          tag="div"
        >
          <span v-if="checked" key="active" :class="ns.e('icon')"
            ><slot name="active-icon"
          /></span>
          <span v-else key="inactive" :class="ns.e('icon')"
            ><slot name="inactive-icon"
          /></span>
        </TransitionGroup>
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
      ns.is('disabled', _disabled.value),
      ns.is('checked', checked.value),
      ns.is('round', _round.value),
    ])
    const namespace = computed(() => ns.namespace.value ?? '')

    const _inactiveText = computed(() => props.inactiveText ?? undefined)
    const _activeText = computed(() => props.activeText ?? undefined)
    const _round = computed(() => props.round ?? undefined)
    const activeColor = computed(() => props.activeColor ?? '')
    const inactiveColor = computed(() => props.inactiveColor ?? '')
    const _style = computed(() => ({
      [`--${namespace.value}-switch-on-color`]: activeColor.value,
      [`--${namespace.value}-switch-off-color`]: inactiveColor.value,
    }))
    const _disabled = computed(() => !!props.disabled ?? false)

    const selfRef = ref<HTMLInputElement>()
    const controlledRef = ref(props.modelValue !== false)
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
      emit('change')
    }

    watch(checked, (val) => {
      selfRef.value!.checked = val
    })

    const handleChange = () => {
      if (!!_disabled.value) return
      const val = checked.value ? props.inactiveValue : props.activeValue
      emit('update:modelValue', val)
      emit('update:value', val)
      emit('change', val)
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
      style: _style,
      checked,
      handleChange,
    }
  },
})
</script>
