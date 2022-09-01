<template>
  <wd-button type="primary" @click="showMessage1">点我下</wd-button>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
const useGlobalProperties = () => {
  if (!getCurrentInstance) return
  const {
    appContext: {
      config: { globalProperties },
    },
  } = getCurrentInstance()!
  return globalProperties
}
export default defineComponent({
  setup() {
    const { $message } = useGlobalProperties()!
    const showMessage1 = () => {
      console.log($message)
    }
    return {
      showMessage1,
    }
  },
})
</script>
