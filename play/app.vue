<template>
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px">Normal</wd-button>
    <wd-button style="margin-left: 10px" type="primary">Primary</wd-button>
    <wd-button style="margin-left: 10px" type="info">Info</wd-button>
    <wd-button style="margin-left: 10px" type="success">Success</wd-button>
    <wd-button style="margin-left: 10px" type="warning">Warning</wd-button>
    <wd-button style="margin-left: 10px" type="error">Error</wd-button>
  </div>

  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" bold>Normal</wd-button>
    <wd-button style="margin-left: 10px" type="primary" bold>Primary</wd-button>
    <wd-button style="margin-left: 10px" type="info" bold>Info</wd-button>
    <wd-button style="margin-left: 10px" type="success" bold>Success</wd-button>
    <wd-button style="margin-left: 10px" type="warning" bold>Warning</wd-button>
    <wd-button style="margin-left: 10px" type="error" bold>Error</wd-button>
  </div>

  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" round>Normal</wd-button>
    <wd-button style="margin-left: 10px" type="primary" round
      >Primary</wd-button
    >
    <wd-button style="margin-left: 10px" type="info" round>Info</wd-button>
    <wd-button style="margin-left: 10px" type="success" round
      >Success</wd-button
    >
    <wd-button style="margin-left: 10px" type="warning" round
      >Warning</wd-button
    >
    <wd-button style="margin-left: 10px" type="error" round>Error</wd-button>
  </div>

  <div style="margin: 10px 0">
    <wd-button
      style="margin-left: 10px"
      icon="xiasanjiao"
      circle
      size="mini"
    ></wd-button>
    <wd-button
      style="margin-left: 10px"
      icon="xiasanjiao"
      type="primary"
      size="small"
      circle
    />
    <wd-button style="margin-left: 10px" icon="xiasanjiao" type="info" circle />
    <wd-button
      style="margin-left: 10px"
      icon="xiasanjiao"
      type="success"
      size="large"
      circle
    />
    <wd-button
      style="margin-left: 10px"
      icon="xiasanjiao"
      type="warning"
      circle
    />
    <wd-button
      style="margin-left: 10px"
      icon="xiasanjiao"
      type="error"
      circle
    />
  </div>

  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" size="mini">小小</wd-button>
    <wd-button style="margin-left: 10px" size="small">小了</wd-button>
    <wd-button style="margin-left: 10px" size="normal">不小</wd-button>
    <wd-button style="margin-left: 10px" size="large">不小了</wd-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const bold = ref(false)
    setTimeout(() => {
      bold.value = true
    }, 2000)
    return {
      bold,
    }
  },
})
</script>
