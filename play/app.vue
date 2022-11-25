<template>
  <div style="margin: 200px">
    <!-- top -->
    <div style="margin-top: 40px">
      <wd-popover trigger="click" placement="top-start">
        <template #trigger>
          <wd-button type="info">Click to activate</wd-button>
        </template>
        <div class="block">
          <span
            >this is content,this is content,this is content,this is
            content,this is content,this is content</span
          >
        </div>
      </wd-popover>
    </div>
    <!-- bottom -->
    <!-- <div style="margin-top: 40px">
      <wd-popover trigger="click" placement="bottom">
        <template #trigger>
          <wd-button type="info">Click to activate</wd-button>
        </template>
        <div class="block">
          <span
            >this is content,this is content,this is content,this is
            content,this is content</span
          >
        </div>
      </wd-popover>
    </div> -->
    <!-- left -->
    <!-- <div style="margin-top: 40px">
      <wd-popover trigger="click" placement="left">
        <template #trigger>
          <wd-button type="info">Click to activate</wd-button>
        </template>
        <div class="block">
          <span>this is content,this is content,this is content</span>
        </div>
      </wd-popover>
    </div> -->
    <!-- right -->
    <!-- <div style="margin-top: 40px">
      <wd-popover trigger="click" placement="right">
        <template #trigger>
          <wd-button type="info">Click to activate</wd-button>
        </template>
        <div class="block">
          <span>this is content,this is content,this is content</span>
        </div>
      </wd-popover>
    </div> -->
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
<style .>
.block {
  background: grey;
  color: white;
  word-break: break-all;
}
</style>
