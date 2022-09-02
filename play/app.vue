<template>
  <wd-message-provider>
    <wd-button-group @change="changeAppear" />
  </wd-message-provider>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import WdButtonGroup from './childComponent.vue'

export default defineComponent({
  components: {
    WdButtonGroup,
  },
  setup() {
    const changeAppear = (value: string) => {
      // console.log(value)
    }
    return {
      changeAppear,
    }
  },
})
</script>
