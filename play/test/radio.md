## Play Radio | Radio-Button | Radio-Group

## entry main.ts

import { createApp } from 'vue'
import APP from './app.vue'
import WdRadio, { WdRadioGroup, WdRadioButton } from '@wind/components/radio'
import WdSwitch from '@wind/components/switch'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdRadio).use(WdSwitch).use(WdRadioGroup).use(WdRadioButton)
app.mount('#app')

## test app.vue

<template>
  <!-- size: large | null | small -->
  <div>
    <wd-radio v-model="radio1" label="wind" size="large"></wd-radio>
    <wd-radio v-model="radio1" label="sky" size="large"></wd-radio>
  </div>

  <div>
    <wd-radio v-model="radio2" label="wind"></wd-radio>
    <wd-radio v-model="radio2" label="sky"></wd-radio>
  </div>

  <div>
    <wd-radio v-model="radio3" label="wind" size="small"></wd-radio>
    <wd-radio v-model="radio3" label="sky" size="small"></wd-radio>
  </div>

  <!-- disabled -->
  <div>
    <wd-radio v-model="radio4" label="wind"></wd-radio>
    <wd-radio
      v-model="radio4"
      label="sky"
      :disabled="disabled"
      @change="onChangeRadio"
    ></wd-radio>
    <wd-switch v-model="disabled"></wd-switch>
  </div>

  <!-- wd-radio-group / change / disabled / size -->
  <div>
    <wd-radio-group
      v-model="radio5"
      :disabled="disabled"
      size="large"
      @change="onChangeRadio"
    >
      <wd-radio label="wind"></wd-radio>
      <wd-radio label="sky"></wd-radio>
    </wd-radio-group>
  </div>

  <div>
    <wd-radio-group v-model="radio6">
      <wd-radio label="wind"></wd-radio>
      <wd-radio label="sky"></wd-radio>
    </wd-radio-group>
  </div>

  <div>
    <wd-radio-group v-model="radio7" size="small">
      <wd-radio label="wind"></wd-radio>
      <wd-radio label="sky"></wd-radio>
    </wd-radio-group>
  </div>

  <!-- wd-radio-button / size /  disabled -->
  <div style="margin-top: 10px">
    <wd-radio-group
      v-model="radio6"
      size="large"
      :disabled="disabled"
      @change="onChangeRadio"
    >
      <wd-radio-button label="wind"></wd-radio-button>
      <wd-radio-button label="sky"></wd-radio-button>
    </wd-radio-group>
  </div>
  <div style="margin-top: 10px">
    <wd-radio-group v-model="radio7">
      <wd-radio-button label="wind"></wd-radio-button>
      <wd-radio-button label="sky" :disabled="disabled"></wd-radio-button>
    </wd-radio-group>
  </div>
  <div style="margin-top: 10px">
    <wd-radio-group v-model="radio8" size="small">
      <wd-radio-button label="1">1</wd-radio-button>
      <wd-radio-button label="2">2</wd-radio-button>
      <wd-radio-button label="3">3</wd-radio-button>
      <wd-radio-button label="4">4</wd-radio-button>
    </wd-radio-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
setup() {
const radio1Ref = ref()
const radio2Ref = ref()
const radio3Ref = ref()
const radio4Ref = ref('wind')
const radio5Ref = ref()
const radio6Ref = ref()
const radio7Ref = ref()
const radio8Ref = ref()
const disabled = ref(false)

    const onChangeRadio: <T>(val: T) => void = (val) => {
      console.log(val)
    }

    setTimeout(() => {
      radio1Ref.value = 'text8'
    }, 2000)
    return {
      radio1: radio1Ref,
      radio2: radio2Ref,
      radio3: radio3Ref,
      radio4: radio4Ref,
      radio5: radio5Ref,
      radio6: radio6Ref,
      radio7: radio7Ref,
      radio8: radio8Ref,
      disabled,
      onChangeRadio,
    }

},
})
</script>
