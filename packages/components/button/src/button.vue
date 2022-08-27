<template>
  <button
    :class="[
      ns.b(),
      ns.m(type),

      ns.is('bold', bold),
      ns.is('round', round),
      ns.is('circle', circle),
      ns.m(size),
    ]"
    @click="play"
  >
    <WdWave ref="waveElRef" :cls-prefix="ns.b()" />
    <span v-if="$slots.default"><slot /></span>
    <span v-if="$slots.icon || icon">
      <i v-if="icon" :class="`${namespace}-icon-${icon}`" />
      <slot v-else name="icon" />
    </span>
  </button>
</template>

<script lang="ts">
import WdWave from '@wind/components/wave'
import type { BaseWaveRef } from '@wind/components/wave'
import { computed, defineComponent, ref } from 'vue'
import { buttonProps } from './button'
import { useNamespace } from '@wind/hooks/use-namespace'
export default defineComponent({
  name: 'WdButton',
  components: {
    WdWave,
  },
  props: buttonProps,
  setup(props) {
    const _active = ref(false)
    const _bold = computed(() => props.bold ?? '')
    const _type = computed(() => props.type ?? '')
    const _round = computed(() => props.round ?? '')
    const _circle = computed(() => props.circle ?? '')
    const _icon = computed(() => props.icon ?? '')
    const _size = computed(() => props.size ?? '')
    const ns = useNamespace('button')
    const namespace = computed(() => ns.namespace.value ?? '')
    const waveElRef = ref<BaseWaveRef | null>()
    const play = () => {
      waveElRef.value?.play()
    }
    return {
      namespace,
      ns,
      bold: _bold,
      type: _type,
      round: _round,
      circle: _circle,
      active: _active,
      icon: _icon,
      size: _size,
      waveElRef,
      play,
    }
  },
})
</script>
