<script lang="ts">
import { defineComponent, getCurrentInstance, provide, ref } from 'vue'
import { createInjectionKey } from '@wind/utils'
export interface ExposedBinderInstance {
  targetRef: HTMLElement | null
}
export interface BinderInstance extends ExposedBinderInstance {
  setTargetRef: (el: HTMLElement | null) => void
}
export const BINDER_INJECTION_KEY = createInjectionKey<BinderInstance | null>(
  Symbol('BINDER_INJECTION_KEY')
)

export default defineComponent({
  name: 'WdBinder',
  setup() {
    provide(
      BINDER_INJECTION_KEY,
      getCurrentInstance()?.proxy as BinderInstance | null
    )
    const targetRef = ref<HTMLElement | null>(null)
    const setTargetRef = (el: HTMLElement | null): void => {
      targetRef.value = el
    }

    return {
      targetRef,
      setTargetRef,
    }
  },
  render() {
    return this.$slots?.default?.()
  },
})
</script>
