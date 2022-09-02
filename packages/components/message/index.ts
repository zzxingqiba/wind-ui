import { useMessage as message } from './src/useMessage'
import messageProvider from './src/message-provider.vue'

import { withInstall, withInstallFunction } from '@wind/utils/index'

const WdMessageProvider = withInstall(messageProvider)
export const useMessage = withInstallFunction(message, 'useMessage')
export default WdMessageProvider
