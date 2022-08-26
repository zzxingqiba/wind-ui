<template>
  <wd-button style="margin-left: 10px">normal</wd-button>
  <wd-button style="margin-left: 10px" type="primary">primary</wd-button>
  <wd-button style="margin-left: 10px" type="info">info</wd-button>
  <wd-button style="margin-left: 10px" type="success">success</wd-button>
  <wd-button style="margin-left: 10px" type="warning">warning</wd-button>
  <wd-button style="margin-left: 10px" type="error">error</wd-button>
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
