import Wave from './src/wave.vue'
import { withInstall } from '@wind/utils/index'

const WdWave = withInstall(Wave)

export default WdWave
export type { BaseWaveRef } from './src/wave'
