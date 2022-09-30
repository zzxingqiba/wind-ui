<template>
  {{ value1 }}
  <wd-input ref="input" v-model="value1"></wd-input>
  <!-- slots: prepend -->
  <div style="margin-top: 10px">
    <wd-input ref="input" v-model="value1" placeholder="Please input">
      <template #prepend>Http://</template>
    </wd-input>
  </div>

  <!-- slots: append -->
  <div style="margin-top: 10px">
    <wd-input ref="input" v-model="value1" placeholder="Please input">
      <template #append>.com</template>
    </wd-input>
  </div>

  <!-- slots: prepend / append -->
  <div style="margin-top: 10px">
    <wd-input ref="input" v-model="value1" placeholder="Please input">
      <template #prepend>Http://</template>
      <template #append>.com</template>
    </wd-input>
  </div>

  <!-- disabled -->
  <div style="margin-top: 10px">
    <wd-input ref="input" v-model="value1" placeholder="Please input" disabled>
      <template #prepend>Http://</template>
      <template #append>.com</template>
    </wd-input>
  </div>

  <!-- suffix -->
  <div style="margin-top: 10px">
    <wd-input ref="input" v-model="value1" clearable />
  </div>
  <!-- <wd-input ref="input" v-model="value1">
    <template #suffix>Http://</template>
  </wd-input> -->
  <!-- <div style="margin-top: 10px">
    <wd-input ref="input" v-model="value1" placeholder="Please input">
      <template #prepend>Http://</template>
      <template #append>.com</template>
    </wd-input>
  </div> -->
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value1 = ref()
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
