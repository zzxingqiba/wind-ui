<template>
  <wd-message-provider :appear="appear">
    <wd-button-group @click="onClick" />
  </wd-message-provider>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import WdButtonGroup from './childComponent.vue'

export default defineComponent({
  components: {
    WdButtonGroup,
  },
  setup() {
    const appear = ref()
    const onClick = (value: string) => {
      appear.value = value
    }
    return {
      appear,
      onClick,
    }
  },
})
</script>
