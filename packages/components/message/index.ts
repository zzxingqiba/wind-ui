import Message from './src/method'
import { withInstallFunction } from '@wind/utils/index'

export const WdMessage = withInstallFunction(Message, '$message')
export default WdMessage
