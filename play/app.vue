<template>
  {{ value1 }}
  <wd-input ref="input" v-model="value1" readonly></wd-input>
  <div @click="onClick">222</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value1 = ref('')
    const input = ref()
    const onClick = () => {
      console.log(input.value)
      input.value?.blur()
    }
    return {
      value1,
      input,
      onClick,
    }
  },
})
</script>
