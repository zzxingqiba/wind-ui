<template>
  <div :class="timelineKls"><slot /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { timelineProps } from './timeline'
import { useNamespace } from '@wind/hooks/use-namespace'
import { useProvide } from './context'
export default defineComponent({
  name: 'WdTimeline',
  props: timelineProps,
  setup(props) {
    const ns = useNamespace('timeline')
    const timelineKls = [ns.b(), props.horizontal && ns.m('horizontal')]
    useProvide({ props })
    return {
      timelineKls,
    }
  },
})
</script>
