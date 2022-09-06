import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'
import RadioButton from './src/radio-button.vue'
import { withInstall } from '@wind/utils/index'

const WdRadio = withInstall(Radio)

export const WdRadioGroup = withInstall(RadioGroup)
export const WdRadioButton = withInstall(RadioButton)
export default WdRadio

export * from './src/radio'
export * from './src/radio-group'
export * from './src/radio-button'
