import type { ExtractPropTypes } from 'vue'
import { definePropType } from '@wind/utils'
import { POPPER_CONTAINER_SELECTOR, useNamespace } from '@wind/hooks'

const triggers = ['click', 'hover', 'focus'] as const
const effects = ['light', 'dark'] as const
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
const ns = useNamespace('popover')

export type PopperEffect = typeof effects[number]
export type PopperTrigger = typeof triggers[number]
export type PopperPlacement = typeof placements[number]

export const popoverContentProps = {
  appendTo: {
    type: definePropType<string | HTMLElement>([String, Object]),
    default: POPPER_CONTAINER_SELECTOR,
  },
  transition: {
    type: String,
    default: `${ns.namespace.value}-transition`,
  },
  placement: {
    type: definePropType<PopperPlacement>([String, Object]),
    values: placements,
  },
}

export const popoverProps = {
  trigger: {
    type: definePropType<PopperTrigger>(String),
    default: 'hover',
    values: triggers,
  },
  effect: {
    type: definePropType<PopperEffect>(String),
    default: 'light',
    values: effects,
  },

  ...popoverContentProps,
}

export type PopoverProps = ExtractPropTypes<typeof popoverProps>
export type PopoverContentProps = ExtractPropTypes<typeof popoverContentProps>
