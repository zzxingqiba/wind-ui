<template>
  <!-- size: large | null | small -->
  <!-- disabeld -->
  <wd-radio v-model="radio1" label="text" size="large"></wd-radio>
  <wd-radio v-model="radio1" label="text1"></wd-radio>
  <wd-radio
    v-model="radio1"
    label="text2"
    size="small"
    :disabled="disabled"
    @change="onChangeRadio"
  ></wd-radio>
  <wd-switch v-model="disabled" @change="onChangeSwitch"></wd-switch>

  <!-- wd-radio-group -->
  <div style="margin-top: 10px">
    {{ radio3 }}
    <wd-radio-group v-model="radio3" size="large">
      <wd-radio label="text3"></wd-radio>
      <wd-radio label="text4"></wd-radio>
    </wd-radio-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const radio1Ref = ref('text2')
    const disabled = ref(true)
    const onChangeRadio: <T>(val: T) => void = (val) => {
      // console.log(val)
    }
    const onChangeSwitch: <T>(val: T) => void = (val) => {
      radio1Ref.value = 'text2'
    }

    const radio3Ref = ref('text3')
    const radio4Ref = ref()
    return {
      radio1: radio1Ref,
      radio3: radio3Ref,
      radio4: radio4Ref,
      disabled,
      onChangeRadio,
      onChangeSwitch,
    }
  },
})
</script>
