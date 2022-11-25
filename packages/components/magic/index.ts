import binder from './src/binder.vue'
import follower from './src/follower.vue'
import target from './src/target.vue'
import { withInstall } from '@wind/utils/index'

export const WdBinder = withInstall(binder)
export const WdFollower = withInstall(follower)
export const WdTarget = withInstall(target)
