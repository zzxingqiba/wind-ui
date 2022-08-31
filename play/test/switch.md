## Play Switch

## entry main.ts

import { createApp } from 'vue'
import APP from './app.vue'
import WdSwitch from '@wind/components/switch'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdSwitch)
app.mount('#app')

## test app.vue

<template>
  <!-- v-model / v-model:value -->
  <div style="margin: 10px">
    <wd-switch v-model="value1" />
    <div />
    <wd-switch v-model:value="value2" />
  </div>

  <!-- active-value / inactive-value -->
  <div style="margin: 10px">
    <wd-switch v-model="value3" active-value="1" inactive-value="2" />
  </div>

  <!-- active-text / inactive-text -->
  <div style="margin: 10px">
    <wd-switch
      v-model="value4"
      active-value="1"
      inactive-value="2"
      active-text="自然赠予你，树冠 微风 肩头的暴雨"
      inactive-text="片刻后生成，平衡 忠诚 不息的身体"
    />
  </div>

  <!-- size ( large small ) -->
  <div style="margin: 10px">
    <wd-switch v-model="value5" size="small" />
    <div />
    <wd-switch v-model="value6" />
    <div />
    <wd-switch v-model:value="value7" size="large" />
  </div>

  <!-- size ( large small ) / active-text / inactive-text -->
  <div style="margin: 10px">
    <wd-switch
      v-model="value8"
      size="small"
      active-text="自然赠予你，树冠 微风 肩头的暴雨"
      inactive-text="片刻后生成，平衡 忠诚 不息的身体"
    />
    <div />
    <wd-switch
      v-model="value9"
      active-text="自然赠予你，树冠 微风 肩头的暴雨"
      inactive-text="片刻后生成，平衡 忠诚 不息的身体"
    />
    <div />
    <wd-switch
      v-model:value="value10"
      size="large"
      active-text="自然赠予你，树冠 微风 肩头的暴雨"
      inactive-text="片刻后生成，平衡 忠诚 不息的身体"
    />
  </div>

  <!-- active-color / inactive-color -->
  <div style="margin: 10px">
    <wd-switch
      v-model="value11"
      active-color="#7A69EB"
      inactive-color="#7CD0FD"
    />
  </div>

  <!-- disabled -->
  <div style="margin: 10px">
    <wd-switch v-model="value12" disabled />
  </div>

  <!-- active-icon / inactive-icon -->
  <div style="margin: 10px">
    <wd-switch v-model="value13" size="small">
      <template #active-icon>
        <i class="w-icon-xiasanjiao" style="color: #7a69eb" />
      </template>
      <template #inactive-icon>
        <i class="w-icon-caomei" style="color: #7a69eb" />
      </template>
    </wd-switch>
    <div />
    <wd-switch v-model="value14">
      <template #active-icon>
        <i class="w-icon-xiasanjiao" style="color: #7a69eb" />
      </template>
      <template #inactive-icon>
        <i class="w-icon-caomei" style="color: #7a69eb" />
      </template>
    </wd-switch>
    <div />
    <wd-switch
      v-model="value15"
      size="large"
      active-color="#606266"
      :style="{ '--w-switch-ball-color': switchRef ? '#000' : '#fff' }"
      @change="onChangeTheme"
    >
      <template #active-icon>
        <svg viewBox="0 0 24 24" style="color: ##606266">
          <path
            d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z"
            fill="currentColor"
          ></path>
        </svg>
      </template>
      <template #inactive-icon>
        <svg viewBox="0 0 24 24" style="color: #000">
          <path
            d="M6.05 4.14l-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4zm-1.81 15.1l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z"
            fill="currentColor"
          ></path>
        </svg>
      </template>
    </wd-switch>
  </div>

  <!-- round -->
  <div style="margin: 10px">
    <wd-switch v-model="value1" round />
    <div />
    <wd-switch v-model:value="value2" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useTheme } from '@wind/hooks'
export default defineComponent({
  setup() {
    const valueRef1 = ref(false)
    const valueRef2 = ref(false)
    const valueRef3 = ref(false)
    const valueRef4 = ref(false)
    const valueRef5 = ref(true)
    const valueRef6 = ref(true)
    const valueRef7 = ref(true)
    const valueRef8 = ref(false)
    const valueRef9 = ref(false)
    const valueRef10 = ref(false)
    const valueRef11 = ref(false)
    const valueRef12 = ref(false)
    const valueRef13 = ref(false)
    const valueRef14 = ref(false)
    const valueRef15 = ref(false)
    const valueRef16 = ref(false)
    const valueRef17 = ref(false)

    setTimeout(() => {
      valueRef12.value = true
    }, 2000)

    const switchRef = ref(false)
    const onChangeTheme = () => {
      switchRef.value = !switchRef.value
      localStorage.setItem('wd-theme-mode', switchRef.value ? 'dark' : 'light')
      useTheme()
    }
    return {
      value1: valueRef1,
      value2: valueRef2,
      value3: valueRef3,
      value4: valueRef4,
      value5: valueRef5,
      value6: valueRef6,
      value7: valueRef7,
      value8: valueRef8,
      value9: valueRef9,
      value10: valueRef10,
      value11: valueRef11,
      value12: valueRef12,
      value13: valueRef13,
      value14: valueRef14,
      value15: valueRef15,
      value16: valueRef16,
      value17: valueRef17,
      switchRef,
      onChangeTheme,
    }
  },
})
</script>



