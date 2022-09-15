import Checkbox from './src/checkbox.vue'
import CheckboxGroup from './src/checkbox-group.vue'
import CheckboxButton from './src/checkbox-button.vue'
import { withInstall } from '@wind/utils/index'

const WdCheckbox = withInstall(Checkbox)

export const WdCheckboxGroup = withInstall(CheckboxGroup)
export const WdCheckboxButton = withInstall(CheckboxButton)
export default WdCheckbox

export * from './src/checkbox'
export * from './src/checkbox-group'
export * from './src/checkbox-button'
