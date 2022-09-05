<template>
  <wd-radio
    v-model="radio1"
    label="hh2222"
    size="large"
    @change="onChangeRadio"
  ></wd-radio>
  <wd-radio v-model="radio1" label="hh2222" @change="onChangeRadio"></wd-radio>
  <wd-radio
    v-model="radio1"
    label="hh2222"
    size="small"
    @change="onChangeRadio"
  ></wd-radio>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const radio1Ref = ref()
    const disabled = ref(false)
    // setTimeout(() => {
    //   disabled.value = true
    // }, 2000)
    const onChangeRadio: <T>(val: T) => void = (val) => {
      console.log(val)
    }
    return {
      radio1: radio1Ref,
      disabled,
      onChangeRadio,
    }
  },
})
</script>
