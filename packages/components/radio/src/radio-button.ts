import type { ExtractPropTypes } from 'vue'
import { Event } from '@wind/constants'
import { baseRadioProps } from './radio'

export const radioButtonProps = {
  ...baseRadioProps,
}

export const radioButtonEmits = {
  [Event.CHANGE_EVENT]: <T>(value: T) => value,
}

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>
