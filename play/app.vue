<template>
  <div>
    <wd-checkbox
      v-model="value1"
      true-label="wind"
      false-label="sky"
      size="large"
      :disabled="disabled"
      @change="handleChange"
      >wind</wd-checkbox
    >
    <wd-checkbox v-model="value2" label="sky" size="large"></wd-checkbox>
    <wd-switch v-model="disabled" size="large"></wd-switch>
  </div>
  <div>
    <wd-checkbox v-model="value3" label="wind">wind1</wd-checkbox>
    <wd-checkbox v-model="value4" label="sky">sky2</wd-checkbox>
  </div>
  <div>
    <wd-checkbox v-model="value5" label="wind" size="small"></wd-checkbox>
    <wd-checkbox v-model="value6" label="sky" size="small"></wd-checkbox>
  </div>

  <div>
    <wd-checkbox-group v-model="value7.a" size="large" disabled>
      <wd-checkbox label="wind"></wd-checkbox>
      <wd-checkbox label="sky"></wd-checkbox>
      <wd-checkbox label="night"></wd-checkbox>
    </wd-checkbox-group>
  </div>
  <div>
    <wd-checkbox-group v-model="value7.a">
      <wd-checkbox label="wind"></wd-checkbox>
      <wd-checkbox label="sky"></wd-checkbox>
      <wd-checkbox label="night"></wd-checkbox>
    </wd-checkbox-group>
  </div>
  <div>
    <wd-checkbox-group v-model="value7.a" size="small">
      <wd-checkbox label="wind"></wd-checkbox>
      <wd-checkbox label="sky"></wd-checkbox>
      <wd-checkbox label="night"></wd-checkbox>
    </wd-checkbox-group>
  </div>
  <div style="margin-bottom: 10px">
    <wd-checkbox-group v-model="value7.a" size="large">
      <wd-checkbox-button label="wind"></wd-checkbox-button>
      <wd-checkbox-button label="sky"></wd-checkbox-button>
      <wd-checkbox-button label="night"></wd-checkbox-button>
    </wd-checkbox-group>
  </div>
  <div style="margin-bottom: 10px">
    <wd-checkbox-group v-model="value7.a" disabled>
      <wd-checkbox-button label="wind"></wd-checkbox-button>
      <wd-checkbox-button label="sky"></wd-checkbox-button>
      <wd-checkbox-button label="night"></wd-checkbox-button>
    </wd-checkbox-group>
  </div>
  <div style="margin-bottom: 10px">
    <wd-checkbox-group v-model="value7.a" size="small">
      <wd-checkbox-button label="wind"></wd-checkbox-button>
      <wd-checkbox-button label="sky"></wd-checkbox-button>
      <wd-checkbox-button label="night"></wd-checkbox-button>
    </wd-checkbox-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    const disabled = ref(false)
    const value1 = ref()
    const value2 = ref(false)
    const value3 = ref()
    const value4 = ref()
    const value5 = ref()
    const value6 = ref()
    const value7 = reactive({
      a: [],
    })
    const handleChange = (val: any) => {
      console.log(val)
    }

    return {
      handleChange,
      disabled,
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
