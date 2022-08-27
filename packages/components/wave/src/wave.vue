<script lang="ts">
import {
  h,
  defineComponent,
  computed,
  onBeforeUnmount,
  nextTick,
  ref,
} from 'vue'
import { waveProps } from '@wind/components/wave/src/wave'
export default defineComponent({
  name: 'WdWave',
  props: waveProps,
  setup(props) {
    const clsPrefix = computed(() => props.clsPrefix || '')
    let animationTimerId: number | null

    const selfRef = ref<HTMLElement | null>()
    const activeRef = ref(false)
    const play = () => {
      if (animationTimerId !== null) {
        window.clearTimeout(animationTimerId)
        activeRef.value = false
        animationTimerId = null
      }
      void nextTick(() => {
        void selfRef.value?.offsetHeight
        activeRef.value = true
        animationTimerId = window.setTimeout(() => {
          activeRef.value = false
          animationTimerId = null
        }, 1000)
      })
    }

    onBeforeUnmount(() => {
      if (animationTimerId !== null) {
        window.clearTimeout(animationTimerId)
      }
    })
    return {
      active: activeRef,
      clsPrefix,
      selfRef,
      play,
    }
  },
  render() {
    const { clsPrefix, active } = this
    return h('div', {
      ref: 'selfRef',
      class: [
        `${clsPrefix}-base-wave`,
        active && `${clsPrefix}-base-wave--active`,
      ],
    })
  },
})
</script>
