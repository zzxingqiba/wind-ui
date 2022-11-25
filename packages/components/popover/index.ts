import Popover from './src/popover.vue'
import Content from './src/content.vue'
import { withInstall } from '@wind/utils/index'

const WdPopover = withInstall(Popover)
export const { WdPopoverContent } = withInstall(Content)
export default WdPopover
