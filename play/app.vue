<template>
  <wd-button :bold="bold">
    <template #default>测试</template>
    <template #right-icon>
      <i class="wind-icon-caomei" />
    </template>
  </wd-button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const bold = ref(false)
    setTimeout(() => {
      bold.value = true
    }, 2000)
    return {
      bold,
    }
  },
})
</script>
