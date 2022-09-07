<template>
  <!-- size: large | null | small -->
  <!-- disabeld -->
  <wd-radio v-model="radio1" label="text1" size="large"></wd-radio>
  <wd-radio v-model="radio1" label="text2"></wd-radio>
  <wd-radio
    v-model="radio1"
    label="text3"
    size="small"
    :disabled="disabled"
    @change="onChangeRadio"
  ></wd-radio>
  <wd-switch v-model="disabled" @change="onChangeSwitch"></wd-switch>

  <!-- wd-radio-group -->
  <div style="margin-top: 10px">
    <wd-radio-group v-model="radio4" size="large" @change="onChangeRadio">
      <wd-radio label="text4"></wd-radio>
      <wd-radio label="text5"></wd-radio>
    </wd-radio-group>
  </div>

  <!-- wd-radio-button -->
  <div style="margin-top: 10px">
    <wd-radio-group v-model="radio6" size="large" @change="onChangeRadio">
      <wd-radio-button label="text6"></wd-radio-button>
      <wd-radio-button label="text7"></wd-radio-button>
    </wd-radio-group>
  </div>
  <div style="margin-top: 10px">
    <wd-radio-group v-model="radio7" disabled>
      <wd-radio-button label="text7"></wd-radio-button>
      <wd-radio-button label="text8"></wd-radio-button>
    </wd-radio-group>
  </div>
  <div style="margin-top: 10px">
    <wd-radio-group v-model="radio8" size="small">
      <wd-radio-button label="text8">1</wd-radio-button>
      <wd-radio-button label="text9">2</wd-radio-button>
      <wd-radio-button label="text10">3</wd-radio-button>
      <wd-radio-button label="text11">4</wd-radio-button>
    </wd-radio-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const radio1Ref = ref('text1')
    const radio2Ref = ref()
    const radio3Ref = ref()
    const radio4Ref = ref()
    const radio5Ref = ref()
    const radio6Ref = ref()
    const radio7Ref = ref()
    const radio8Ref = ref()
    const radio9Ref = ref()
    const radio10Ref = ref()
    const radio11Ref = ref()
    const radio12Ref = ref()
    const disabled = ref(true)

    const onChangeRadio: <T>(val: T) => void = (val) => {
      console.log(val)
    }
    const onChangeSwitch: <T>(val: T) => void = (val) => {
      radio1Ref.value = 'text3'
    }
    setTimeout(() => {
      radio8Ref.value = 'text8'
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
      radio9: radio9Ref,
      radio10: radio10Ref,
      radio11: radio11Ref,
      radio12: radio12Ref,
      disabled,
      onChangeRadio,
      onChangeSwitch,
    }
  },
})
</script>
