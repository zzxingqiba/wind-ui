<template>
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

  <!-- slots: suffix -->
  <div style="margin-top: 10px">
    <wd-input ref="input" v-model="value1" placeholder="Please input">
      <template #suffix>
        <i class="w-icon-caomei" style="color: #7a69eb" />
      </template>
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

  <!-- clearable -->
  <div style="margin-top: 10px">
    <wd-input ref="input" v-model="value1" clearable />
  </div>

  <!-- show-password -->
  <div style="margin-top: 10px">
    <wd-input ref="input" v-model="value1" show-password />
  </div>

  <!-- minlength / maxlength / show-word-limit -->
  <div style="margin-top: 10px">
    <wd-input
      ref="input"
      v-model="value1"
      :maxlength="10"
      show-word-limit
      placeholder="Please input"
    />
  </div>

  <!-- size -->
  <div>
    <wd-input
      ref="input"
      v-model="value1"
      style="margin-top: 10px"
      show-password
      size="small"
    />
    <wd-input
      ref="input"
      v-model="value1"
      style="margin-top: 10px"
      show-password
    />
    <wd-input
      ref="input"
      v-model="value1"
      style="margin-top: 10px"
      show-password
      size="large"
    />
  </div>
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
