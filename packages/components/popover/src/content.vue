<script lang="ts">
import { defineComponent, h, Transition } from 'vue'
import { WdFollower } from '@wind/components/magic'
import { popoverContentProps } from './popover'

export default defineComponent({
  name: 'WdPopoverContent',
  components: {
    WdFollower,
  },
  props: popoverContentProps,
  setup() {
    return {}
  },
  render() {
    return h(
      WdFollower,
      { to: this.appendTo, placement: this.placement },
      {
        default: () => [
          h(
            Transition,
            { name: this.transition },
            {
              default: () => this.$slots.default?.(),
            }
          ),
        ],
      }
    )
  },
})
</script>
