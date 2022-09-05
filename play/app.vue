<template>
  <wd-radio
    v-model="radio1"
    label="hh2222"
    size="large"
    @change="onChangeRadio"
  ></wd-radio>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const radio1Ref = ref(null)
    const onChangeRadio: <T>(val: T) => void = (val) => {
      console.log(val)
    }
    return {
      radio1: radio1Ref,
      onChangeRadio,
    }
  },
})
</script>
