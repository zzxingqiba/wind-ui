<template>
  <button
    :class="[
      ns.b(),
      ns.m(type),
      ns.is('bold', bold),
      ns.is('round', round),
      ns.is('plain', plain),
      ns.is('circle', circle),
      ns.is('dashed', dashed),
      ns.is('text', text),
      ns.is('disabled', disabled),
      ns.m(size),
    ]"
    @click="play"
  >
    <WdWave ref="waveElRef" :cls-prefix="ns.b()" />
    <span v-if="$slots.default"><slot /></span>
    <template v-if="$slots.icon || icon">
      <i v-if="icon" :class="`${namespace}-icon-${icon}`" />
      <slot v-else name="icon" />
    </template>
  </button>
</template>

<script lang="ts">
import WdWave from '@wind/components/wave'
import type { BaseWaveRef } from '@wind/components/wave'
import { computed, defineComponent, ref } from 'vue'
import { buttonProps, buttonEmits } from './button'
import { useNamespace } from '@wind/hooks/use-namespace'
export default defineComponent({
  name: 'WdButton',
  components: {
    WdWave,
  },
  props: buttonProps,
  emits: buttonEmits,
  setup(props, { emit }) {
    const ns = useNamespace('button')

    const namespace = computed(() => ns.namespace.value ?? '')
    const waveElRef = ref<BaseWaveRef | null>()
    const _active = ref(false)

    const _bold = computed(() => props.bold ?? '')
    const _type = computed(() => props.type ?? '')
    const _round = computed(() => props.round ?? '')
    const _circle = computed(() => props.circle ?? '')
    const _icon = computed(() => props.icon ?? '')
    const _size = computed(() => props.size ?? '')
    const _plain = computed(() => props.plain ?? '')
    const _dashed = computed(() => props.dashed ?? '')
    const _disabled = computed(() => props.disabled ?? '')
    const _text = computed(() => props.text ?? '')

    const play = (e: MouseEvent) => {
      if (props.disabled) return
      emit('click', e)
      if (props.text) return
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
      plain: _plain,
      dashed: _dashed,
      text: _text,
      disabled: _disabled,
      waveElRef,
      play,
    }
  },
})
</script>
