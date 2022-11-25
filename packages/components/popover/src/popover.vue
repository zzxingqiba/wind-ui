<script lang="ts">
import { defineComponent, h } from 'vue'
import { useNamespace, usePopperContainer } from '@wind/hooks'
import type { PopoverProps } from './popover'
import { popoverProps } from './popover'
import { WdBinder, WdTarget } from '@wind/components/magic'
import WdPopoverContent from './content.vue'

export type PopoverInjection = PopoverProps

export default defineComponent({
  name: 'WdPopover',
  components: {
    WdBinder,
    WdTarget,
    WdPopoverContent,
  },
  props: popoverProps,
  setup(props) {
    const ns = useNamespace('popover')
    usePopperContainer()
    return {
      ns,
    }
  },
  render() {
    return h(
      WdBinder,
      {},
      {
        default: () => [
          h(WdTarget, null, { default: () => this.$slots.trigger?.() }),
          h(
            WdPopoverContent,
            {
              appendTo: this.appendTo,
              transition: this.transition,
              placement: this.placement,
            },
            { default: () => this.$slots.default?.() }
          ),
        ],
      }
    )
  },
})
</script>
