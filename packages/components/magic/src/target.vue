<script lang="ts">
import { defineComponent, inject, withDirectives } from 'vue'
import type { BinderInstance } from './binder.vue'
import { BINDER_INJECTION_KEY } from './binder.vue'
export default defineComponent({
  name: 'WdTarget',
  setup() {
    const { setTargetRef } = inject<BinderInstance>(BINDER_INJECTION_KEY)!
    const setTargetDirective = {
      mounted: setTargetRef,
      updated: setTargetRef,
    }
    return {
      setTargetDirective,
    }
  },
  render() {
    const defaultSlotVNode = this.$slots?.default?.()
    if (!defaultSlotVNode) {
      throw new Error(`[component/wd-target]: slot[default] must exist.`)
    }
    if (defaultSlotVNode.length != 1) {
      throw new Error(
        `[component/wd-target]: slot[default] should have exactly one child`
      )
    }
    const [firstDefaultSlotVNode] = defaultSlotVNode
    return withDirectives(firstDefaultSlotVNode, [[this.setTargetDirective]])
  },
})
</script>
