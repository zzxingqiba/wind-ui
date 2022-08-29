<template>
  <wd-switch
    v-model="value"
    active-value="1"
    inactive-value="2"
    :size="size"
    @update:model-value="handleUpdate"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const valueRef = ref('2')
    const sizeRef = ref('')
    const handleUpdate = (val: number | boolean | string) => {
      console.log(val)
    }
    setTimeout(() => {
      valueRef.value = '1'
      sizeRef.value = 'small'
    }, 5000)
    return {
      value: valueRef,
      size: sizeRef,
      handleUpdate,
    }
  },
})
</script>
