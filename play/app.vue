<template>
  <!-- 默认为Boolean值 label为文本显示 -->
  <div>
    <wd-checkbox v-model="value1" label="wind" />
  </div>
  <!-- 自定义值 -->
  <div>
    <wd-checkbox
      v-model="value2"
      label="wind"
      true-label="wind"
      false-label="sky"
    />
  </div>
  <!-- size: large / default / small -->
  <div>
    <wd-checkbox v-model="value3" label="wind" size="large" />
    <wd-checkbox v-model="value4" label="sky" />
    <wd-checkbox v-model="value5" label="night" size="small" />
  </div>

  <!-- 受控状态 -->
  <div>
    <wd-checkbox v-model="value6" label="wind" :disabled="disabled" />
    <wd-switch v-model="disabled"></wd-switch>
  </div>

  <!-- 多选框组 -->
  <div>
    <wd-checkbox-group v-model="value7" size="large">
      <wd-checkbox label="wind"></wd-checkbox>
      <wd-checkbox label="sky"></wd-checkbox>
      <wd-checkbox label="night"></wd-checkbox>
    </wd-checkbox-group>
  </div>
  <div>
    <wd-checkbox-group v-model="value7">
      <wd-checkbox label="wind"></wd-checkbox>
      <wd-checkbox label="sky"></wd-checkbox>
      <wd-checkbox label="night"></wd-checkbox>
    </wd-checkbox-group>
  </div>
  <div>
    <wd-checkbox-group v-model="value7" size="small">
      <wd-checkbox label="wind"></wd-checkbox>
      <wd-checkbox label="sky"></wd-checkbox>
      <wd-checkbox label="night"></wd-checkbox>
    </wd-checkbox-group>
    {{ value7 }}
  </div>

  <!-- 多选框组(按钮样式) -->
  <div>
    <wd-checkbox-group v-model="value8" size="large">
      <wd-checkbox-button label="wind"></wd-checkbox-button>
      <wd-checkbox-button label="sky"></wd-checkbox-button>
      <wd-checkbox-button label="night"></wd-checkbox-button>
    </wd-checkbox-group>
  </div>
  <div>
    <wd-checkbox-group v-model="value8">
      <wd-checkbox-button label="wind"></wd-checkbox-button>
      <wd-checkbox-button label="sky"></wd-checkbox-button>
      <wd-checkbox-button label="night"></wd-checkbox-button>
    </wd-checkbox-group>
  </div>
  <div>
    <wd-checkbox-group v-model="value8" size="small">
      <wd-checkbox-button label="wind"></wd-checkbox-button>
      <wd-checkbox-button label="sky"></wd-checkbox-button>
      <wd-checkbox-button label="night"></wd-checkbox-button>
    </wd-checkbox-group>
    {{ value8 }}
  </div>

  <!-- 可选项目数量的限制 -->
  <div>
    <wd-checkbox-group
      v-model="value9"
      :min="1"
      :max="3"
      @change="handleChange"
    >
      <wd-checkbox-button label="wind"></wd-checkbox-button>
      <wd-checkbox-button label="sky"></wd-checkbox-button>
      <wd-checkbox-button label="night"></wd-checkbox-button>
      <wd-checkbox-button label="star"></wd-checkbox-button>
      <wd-checkbox-button label="sun"></wd-checkbox-button>
    </wd-checkbox-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const disabled = ref(false)
    const value1 = ref()
    const value2 = ref(false)
    const value3 = ref()
    const value4 = ref()
    const value5 = ref()
    const value6 = ref()
    const value7 = ref([])
    const value8 = ref([])
    const value9 = ref([])
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
      value8,
      value9,
    }
  },
})
</script>
