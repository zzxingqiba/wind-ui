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
      :maxlength="maxlength"
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

  <!-- textarea -->
  <div>
    <wd-input
      v-model="value1"
      style="margin-top: 10px"
      type="textarea"
      placeholder="Please input"
      show-word-limit
      :maxlength="100"
    />
  </div>
  <!-- disabled -->
  <div>
    <wd-input
      v-model="value1"
      disabled
      style="margin-top: 10px"
      type="textarea"
      placeholder="Please input"
      show-word-limit
      :maxlength="100"
    />
  </div>
  <!-- rows -->
  <div>
    <wd-input
      v-model="value1"
      style="margin-top: 10px"
      type="textarea"
      placeholder="Please input"
      show-word-limit
      :maxlength="100"
      :rows="6"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value1 = ref()
    const input = ref()
    const maxlength = ref(4)
    const onClick = () => {
      console.log(input.value)
      input.value?.blur()
      maxlength.value = 12
    }
    return {
      value1,
      input,
      maxlength,
      onClick,
    }
  },
})
</script>
