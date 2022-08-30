<template>
  <!-- v-model / v-model:value -->
  <div style="margin: 10px">
    <wd-switch v-model="value1" />
    <div />
    <wd-switch v-model:value="value2" />
  </div>

  <!-- active-value / inactive-value -->
  <div style="margin: 10px">
    <wd-switch v-model="value3" active-value="1" inactive-value="2" />
  </div>

  <!-- active-text / inactive-text -->
  <div style="margin: 10px">
    <wd-switch
      v-model="value4"
      active-value="1"
      inactive-value="2"
      active-text="自然赠予你，树冠 微风 肩头的暴雨"
      inactive-text="片刻后生成，平衡 忠诚 不息的身体"
    />
  </div>

  <!-- size ( large small ) -->
  <div style="margin: 10px">
    <wd-switch v-model="value5" disabled size="small" />
    <div />
    <wd-switch v-model="value6" disabled />
    <div />
    <wd-switch v-model:value="value7" disabled size="large" />
  </div>

  <!-- size ( large small ) / active-text / inactive-text -->
  <div style="margin: 10px">
    <wd-switch
      v-model="value8"
      size="small"
      active-text="自然赠予你，树冠 微风 肩头的暴雨"
      inactive-text="片刻后生成，平衡 忠诚 不息的身体"
    />
    <div />
    <wd-switch
      v-model="value9"
      active-text="自然赠予你，树冠 微风 肩头的暴雨"
      inactive-text="片刻后生成，平衡 忠诚 不息的身体"
    />
    <div />
    <wd-switch
      v-model:value="value10"
      size="large"
      active-text="自然赠予你，树冠 微风 肩头的暴雨"
      inactive-text="片刻后生成，平衡 忠诚 不息的身体"
    />
  </div>

  <!-- active-color / inactive-color -->
  <div style="margin: 10px">
    <wd-switch
      v-model="value11"
      active-color="#7A69EB"
      inactive-color="#7CD0FD"
    />
  </div>

  <!-- disabled -->
  <div style="margin: 10px">
    <wd-switch v-model="value12" disabled />
  </div>

  <!-- active-icon / inactive-icon -->
  <div style="margin: 10px">
    <wd-switch v-model="value13" size="small">
      <template #active-icon>
        <i class="w-icon-xiasanjiao" style="color: #7a69eb" />
      </template>
      <template #inactive-icon>
        <i class="w-icon-caomei" style="color: #7a69eb" />
      </template>
    </wd-switch>
    <div />
    <wd-switch v-model="value14">
      <template #active-icon>
        <i class="w-icon-xiasanjiao" style="color: #7a69eb" />
      </template>
      <template #inactive-icon>
        <i class="w-icon-caomei" style="color: #7a69eb" />
      </template>
    </wd-switch>
    <div />
    <wd-switch v-model="value15" size="large">
      <template #active-icon>
        <i class="w-icon-xiasanjiao" style="color: #7a69eb" />
      </template>
      <template #inactive-icon>
        <i class="w-icon-caomei" style="color: #7a69eb" />
      </template>
    </wd-switch>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const valueRef1 = ref(false)
    const valueRef2 = ref(false)
    const valueRef3 = ref(false)
    const valueRef4 = ref(false)
    const valueRef5 = ref(true)
    const valueRef6 = ref(true)
    const valueRef7 = ref(true)
    const valueRef8 = ref(false)
    const valueRef9 = ref(false)
    const valueRef10 = ref(false)
    const valueRef11 = ref(false)
    const valueRef12 = ref(false)
    const valueRef13 = ref(false)
    const valueRef14 = ref(false)
    const valueRef15 = ref(false)
    setTimeout(() => {
      valueRef12.value = true
    }, 2000)
    return {
      value1: valueRef1,
      value2: valueRef2,
      value3: valueRef3,
      value4: valueRef4,
      value5: valueRef5,
      value6: valueRef6,
      value7: valueRef7,
      value8: valueRef8,
      value9: valueRef9,
      value10: valueRef10,
      value11: valueRef11,
      value12: valueRef12,
      value13: valueRef13,
      value14: valueRef14,
      value15: valueRef15,
    }
  },
})
</script>
