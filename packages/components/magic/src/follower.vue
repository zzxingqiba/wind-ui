<script lang="ts">
import {
  computed,
  defineComponent,
  h,
  Teleport,
  inject,
  ref,
  onMounted,
  nextTick,
} from 'vue'
import { definePropType } from '@wind/utils'
import { useNamespace, POPPER_CONTAINER_SELECTOR } from '@wind/hooks'
import type { BinderInstance } from './binder.vue'
import { BINDER_INJECTION_KEY } from './binder.vue'

export const placements = [
  'top',
  'bottom',
  'left',
  'right',
  'top-start',
  'top-end',
  'left-start',
  'left-end',
  'right-start',
  'right-end',
  'bottom-start',
  'bottom-end',
] as const
export type PopperPlacement = typeof placements[number]

export interface Rect {
  width: number
  height: number
  left: number
  right: number
  top: number
  bottom: number
}

export type Align = 'start' | 'end' | 'center'

export const positionToAlign: Record<Position, Align> = {
  top: 'end',
  bottom: 'start',
  left: 'end',
  right: 'start',
}

export type Position = 'left' | 'right' | 'top' | 'bottom'

export default defineComponent({
  name: 'WdFollower',
  props: {
    to: {
      type: definePropType<string | HTMLElement>([String, Object]),
      default: 'body',
    },
    placement: {
      type: definePropType<PopperPlacement>([String]),
      default: 'bottom',
      values: placements,
    },
  },
  setup(props) {
    const ns = useNamespace('follower-container')
    const followerRef = ref<HTMLElement | null>(null)
    const followerContainerKls = computed(() => ns.b())
    const binder = inject<BinderInstance>(BINDER_INJECTION_KEY)!

    onMounted(async () => {
      await nextTick()
      updatePosition()
    })

    // get postion message
    const getRect = (el: HTMLElement): Rect => {
      const elRect = el.getBoundingClientRect()
      return {
        width: elRect.width,
        height: elRect.height,
        left: elRect.left,
        right: elRect.right,
        top: elRect.top,
        bottom: elRect.bottom,
      }
    }

    // const calcPlacementAndOffsetOfFollower = (
    //   placement: PopperPlacement,
    //   targetRect: Rect,
    //   followerRect: Rect
    // ) => {
    //   const [position, align] = placement.split('-') as [Position, Align]
    //   let properAlign = align ?? 'center'

    //   if (['center'].includes(properAlign)) {
    //     const possibleAlignPostion = ['top', 'bottom'].includes(position)
    //       ? 'left'
    //       : 'top'
    //     const possibleAlignPostionMirror =
    //       postionMirrorMap[possibleAlignPostion]
    //     const possibleWidthOrHeight = ['top', 'bottom'].includes(position)
    //       ? 'width'
    //       : 'height'
    //     const followerOverTargetSize =
    //       (followerRect[possibleWidthOrHeight] -
    //         targetRect[possibleWidthOrHeight]) /
    //       2

    //     if (
    //       targetRect[possibleAlignPostion] < followerOverTargetSize ||
    //       targetRect[possibleAlignPostionMirror] < followerOverTargetSize
    //     ) {
    //       if (
    //         targetRect[possibleAlignPostion] >
    //         targetRect[possibleAlignPostionMirror]
    //       ) {
    //         properAlign = positionToAlign[possibleAlignPostion]
    //       } else {
    //         properAlign = positionToAlign[possibleAlignPostionMirror]
    //       }
    //     }
    //   }

    //   const properPosition = position
    //   return {
    //     placement:
    //       properAlign !== 'center'
    //         ? (`${properPosition}-${properAlign}` as PopperPlacement)
    //         : properPosition,
    //   }
    // }

    const getOffset = (
      placement: PopperPlacement,
      offsetRect: Rect,
      targetRect: Rect
    ) => {
      switch (placement) {
        case 'bottom-start':
          return {
            top: `${Math.round(
              targetRect.top - offsetRect.top + targetRect.height
            )}px`,
            left: `${Math.round(targetRect.left - offsetRect.left)}px`,
            transform: '',
          }
        case 'bottom-end':
          return {
            top: `${Math.round(
              targetRect.top - offsetRect.top + targetRect.height
            )}px`,
            left: `${Math.round(
              targetRect.left - offsetRect.left + targetRect.width
            )}px`,
            transform: 'translateX(-100%)',
          }
        case 'top-start':
          return {
            top: `${Math.round(targetRect.top - offsetRect.top)}px`,
            left: `${Math.round(targetRect.left - offsetRect.left)}px`,
            transform: 'translateY(-100%)',
          }
        case 'top-end':
          return {
            top: `${Math.round(targetRect.top - offsetRect.top)}px`,
            left: `${Math.round(
              targetRect.left - offsetRect.left + targetRect.width
            )}px`,
            transform: 'translateX(-100%) translateY(-100%)',
          }
        case 'right-start':
          return {
            top: `${Math.round(targetRect.top - offsetRect.top)}px`,
            left: `${Math.round(
              targetRect.left - offsetRect.left + targetRect.width
            )}px`,
            transform: '',
          }
        case 'right-end':
          return {
            top: `${Math.round(
              targetRect.top - offsetRect.top + targetRect.height
            )}px`,
            left: `${Math.round(
              targetRect.left - offsetRect.left + targetRect.width
            )}px`,
            transform: 'translateY(-100%)',
          }
        case 'left-start':
          return {
            top: `${Math.round(targetRect.top - offsetRect.top)}px`,
            left: `${Math.round(targetRect.left - offsetRect.left)}px`,
            transform: 'translateX(-100%)',
          }
        case 'left-end':
          return {
            top: `${Math.round(
              targetRect.top - offsetRect.top + targetRect.height
            )}px`,
            left: `${Math.round(targetRect.left - offsetRect.left)}px`,
            transform: 'translateX(-100%) translateY(-100%)',
          }
        case 'top':
          return {
            top: `${Math.round(targetRect.top - offsetRect.top)}px`,
            left: `${Math.round(
              targetRect.left - offsetRect.left + targetRect.width / 2
            )}px`,
            transform: 'translateY(-100%) translateX(-50%)',
          }
        case 'left':
          return {
            top: `${Math.round(
              targetRect.top - offsetRect.top + targetRect.height / 2
            )}px`,
            left: `${Math.round(targetRect.left - offsetRect.left)}px`,
            transform: 'translateY(-50%) translateX(-100%)',
          }
        case 'right':
          return {
            top: `${Math.round(
              targetRect.top - offsetRect.top + targetRect.height / 2
            )}px`,
            left: `${Math.round(
              targetRect.left - offsetRect.left + targetRect.width
            )}px`,
            transform: 'translateY(-50%)',
          }
        case 'bottom':
        default:
          return {
            top: `${Math.round(
              targetRect.top - offsetRect.top + targetRect.height
            )}px`,
            left: `${Math.round(
              targetRect.left - offsetRect.left + targetRect.width / 2
            )}px`,
            transform: 'translateX(-50%)',
          }
      }
    }

    const updatePosition = (): void => {
      const follower = followerRef.value
      if (follower === null) return
      const target = binder.targetRef!
      const targetRect = getRect(target)
      // const followerRect = getRect(follower)
      const containerRect = getRect(
        document.body.querySelector(POPPER_CONTAINER_SELECTOR)!
      )

      const { placement } = props

      // const { placement: properPlacement } = calcPlacementAndOffsetOfFollower(
      //   placement,
      //   targetRect,
      //   followerRect
      // )

      // Transform method reserved
      const { left, top, transform } = getOffset(
        placement,
        containerRect,
        targetRect
      )
      follower.style.transform = `translateX(${left}) translateY(${top}) ${transform}`
    }
    return {
      followerRef,
      followerContainerKls,
    }
  },
  render() {
    const {
      // data
      followerContainerKls,

      //props
      to,
    } = this
    return h(Teleport, { to }, [
      h(
        'div',
        { class: followerContainerKls, ref: 'followerRef' },
        this.$slots?.default?.()
      ),
    ])
  },
})
</script>
