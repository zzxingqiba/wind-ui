import type { ExtractPropTypes } from 'vue'

export const waveProps = {
  clsPrefix: {
    type: String,
  },
} as const

export interface BaseWaveRef {
  play: () => void
}

export type WaveProps = ExtractPropTypes<typeof waveProps>
