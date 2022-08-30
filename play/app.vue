<template>
  <!-- v-model / v-model:value -->
  <div style="margin: 10px">
    <wd-switch v-model="value" @update:model-value="handleUpdate" />
    <div />
    <wd-switch v-model:value="value" @update:value="handleUpdate" />
  </div>

  <!-- active-value / inactive-value -->
  <div style="margin: 10px">
    <wd-switch
      v-model="value"
      active-value="1"
      inactive-value="2"
      @update:model-value="handleUpdate"
    />
  </div>

  <!-- active-text / inactive-text -->
  <div style="margin: 10px">
    <wd-switch
      v-model="value"
      active-value="1"
      inactive-value="2"
      active-text="自然赠予你，树冠 微风 肩头的暴雨"
      inactive-text="片刻后生成，平衡 忠诚 不息的身体"
      @update:model-value="handleUpdate"
    />
  </div>

  <!-- size ( large small ) -->
  <div style="margin: 10px">
    <wd-switch
      v-model="value"
      size="small"
      @update:model-value="handleUpdate"
    />
    <div />
    <wd-switch v-model="value" @update:model-value="handleUpdate" />
    <div />
    <wd-switch
      v-model:value="value"
      size="large"
      @update:value="handleUpdate"
    />
  </div>
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
    }, 2000)
    return {
      value: valueRef,
      size: sizeRef,
      handleUpdate,
    }
  },
})
</script>
