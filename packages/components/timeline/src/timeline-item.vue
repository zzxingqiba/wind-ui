<template>
  <div :class="timelineItemKls">
    <div :class="timelineItemNodeKls">
      <div
        :class="[ns.e('tail'), ns.is('dashed', lineType === 'dashed')]"
      ></div>
      <div :class="ns.e($slots.icon ? 'icon' : 'circle')">
        <slot name="icon" />
      </div>
    </div>
    <div :class="timelineItemWrapperKls">
      <div :class="ns.e('title')">
        <slot name="title">{{ title }}</slot>
      </div>
      <div :class="ns.e('content')">
        <slot>{{ content }}</slot>
      </div>
      <div :class="ns.e('time')">
        <slot name="time">{{ time }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { timelineItemProps } from './timeline-item'
import { useNamespace } from '@wind/hooks/use-namespace'
import { useInject } from './context'
import { throwError } from '@wind/utils'
export default defineComponent({
  name: 'WdTimelineItem',
  props: timelineItemProps,
  setup(props) {
    const ns = useNamespace('timeline-item')
    const _type = computed(() => props.type ?? '')
    const timeline = useInject()
    if (!timeline) {
      throwError(
        'timeline-item',
        '`wd-timeline-item` must be placed inside `wd-timeline`.'
      )
    }

    const timelineItemKls = [
      ns.b(),
      ns.m(_type.value),
      ns.is('mirror', timeline?.props.mirror),
    ]
    const timelineItemNodeKls = [ns.e('node')]
    const timelineItemWrapperKls = [ns.e('wrapper')]

    return {
      ns,
      timelineItemKls,
      timelineItemNodeKls,
      timelineItemWrapperKls,
    }
  },
})
</script>
