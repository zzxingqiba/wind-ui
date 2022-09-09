<template>
  <div>
    <wd-checkbox v-model="value1" label="wind" size="large"></wd-checkbox>
    <wd-checkbox v-model="value2" label="sky" size="large"></wd-checkbox>
  </div>
  <div>
    <wd-checkbox v-model="value3" label="wind"></wd-checkbox>
    <wd-checkbox v-model="value4" label="sky"></wd-checkbox>
  </div>
  <div>
    <wd-checkbox v-model="value5" label="wind" size="small"></wd-checkbox>
    <wd-checkbox v-model="value6" label="sky" size="small"></wd-checkbox>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value1 = ref()
    const value2 = ref()
    const value3 = ref()
    const value4 = ref()
    const value5 = ref()
    const value6 = ref()
    const value7 = ref()
    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
    }
  },
})
</script>
