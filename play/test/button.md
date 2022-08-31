## Play Button

## entry main.ts

import { createApp } from 'vue'
import APP from './app.vue'
import WdButton from '@wind/components/button'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdButton)
app.mount('#app')

## test app.vue

<template>
  <!-- type -->
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px">Normal</wd-button>
    <wd-button style="margin-left: 10px" type="primary">Primary</wd-button>
    <wd-button style="margin-left: 10px" type="info">Info</wd-button>
    <wd-button style="margin-left: 10px" type="success">Success</wd-button>
    <wd-button style="margin-left: 10px" type="warning">Warning</wd-button>
    <wd-button style="margin-left: 10px" type="error">Error</wd-button>
  </div>

  <!-- bold -->
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" bold>Normal</wd-button>
    <wd-button style="margin-left: 10px" type="primary" bold>Primary</wd-button>
    <wd-button style="margin-left: 10px" type="info" bold>Info</wd-button>
    <wd-button style="margin-left: 10px" type="success" bold>Success</wd-button>
    <wd-button style="margin-left: 10px" type="warning" bold>Warning</wd-button>
    <wd-button style="margin-left: 10px" type="error" bold>Error</wd-button>
  </div>

  <!-- round -->
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

  <!-- circle -->
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" icon="xiasanjiao" circle size="mini" />
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

  <!-- size -->
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" size="mini">小小</wd-button>
    <wd-button style="margin-left: 10px" type="primary" size="small"
      >小了</wd-button
    >
    <wd-button style="margin-left: 10px" type="info" size="normal"
      >不小</wd-button
    >
    <wd-button style="margin-left: 10px" type="success" size="large"
      >不小了</wd-button
    >
    <wd-button style="margin-left: 10px" type="warning" size="normal"
      >不小</wd-button
    >
    <wd-button style="margin-left: 10px" type="error" size="small"
      >小了</wd-button
    >
  </div>

  <!-- plain -->
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" plain>Normal</wd-button>
    <wd-button style="margin-left: 10px" type="primary" plain
      >Primary</wd-button
    >
    <wd-button style="margin-left: 10px" type="info" plain>Info</wd-button>
    <wd-button style="margin-left: 10px" type="success" plain
      >Success</wd-button
    >
    <wd-button style="margin-left: 10px" type="warning" plain
      >Warning</wd-button
    >
    <wd-button style="margin-left: 10px" type="error" plain>Error</wd-button>
  </div>

  <!-- dashed -->
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" dashed>Normal</wd-button>
    <wd-button style="margin-left: 10px" type="primary" dashed
      >Primary</wd-button
    >
    <wd-button style="margin-left: 10px" type="info" dashed>Info</wd-button>
    <wd-button style="margin-left: 10px" type="success" dashed
      >Success</wd-button
    >
    <wd-button style="margin-left: 10px" type="warning" dashed
      >Warning</wd-button
    >
    <wd-button style="margin-left: 10px" type="error" dashed>Error</wd-button>
  </div>

  <!-- text -->
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" text>Normal</wd-button>
    <wd-button style="margin-left: 10px" type="primary" text>Primary</wd-button>
    <wd-button style="margin-left: 10px" type="info" text>Info</wd-button>
    <wd-button style="margin-left: 10px" type="success" text>Success</wd-button>
    <wd-button style="margin-left: 10px" type="warning" text>Warning</wd-button>
    <wd-button style="margin-left: 10px" type="error" text>Error</wd-button>
  </div>

  <!-- disabled text -->
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" text disabled>Normal</wd-button>
    <wd-button style="margin-left: 10px" text type="primary" disabled
      >Primary</wd-button
    >
    <wd-button style="margin-left: 10px" type="info" text disabled
      >Info</wd-button
    >
    <wd-button style="margin-left: 10px" type="success" text disabled
      >Success</wd-button
    >
    <wd-button style="margin-left: 10px" type="warning" text disabled
      >Warning</wd-button
    >
    <wd-button style="margin-left: 10px" type="error" text disabled
      >Error</wd-button
    >
  </div>

  <!-- disabled plain -->
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" disabled plain>Normal</wd-button>
    <wd-button style="margin-left: 10px" type="primary" disabled plain
      >Primary</wd-button
    >
    <wd-button style="margin-left: 10px" type="info" disabled plain
      >Info</wd-button
    >
    <wd-button style="margin-left: 10px" type="success" disabled plain
      >Success</wd-button
    >
    <wd-button style="margin-left: 10px" type="warning" disabled plain
      >Warning</wd-button
    >
    <wd-button style="margin-left: 10px" type="error" disabled plain
      >Error</wd-button
    >
  </div>

  <!-- disabled type -->
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" disabled>Normal</wd-button>
    <wd-button style="margin-left: 10px" type="primary" disabled
      >Primary</wd-button
    >
    <wd-button style="margin-left: 10px" type="info" disabled>Info</wd-button>
    <wd-button style="margin-left: 10px" type="success" disabled
      >Success</wd-button
    >
    <wd-button style="margin-left: 10px" type="warning" disabled
      >Warning</wd-button
    >
    <wd-button style="margin-left: 10px" type="error" disabled>Error</wd-button>
  </div>

  <!-- disabled dashed -->
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" disabled dashed>Normal</wd-button>
    <wd-button style="margin-left: 10px" type="primary" disabled dashed
      >Primary</wd-button
    >
    <wd-button style="margin-left: 10px" type="info" disabled dashed
      >Info</wd-button
    >
    <wd-button style="margin-left: 10px" type="success" disabled dashed
      >Success</wd-button
    >
    <wd-button style="margin-left: 10px" type="warning" disabled dashed
      >Warning</wd-button
    >
    <wd-button style="margin-left: 10px" type="error" disabled dashed
      >Error</wd-button
    >
  </div>

  <!-- icon -->
  <div style="margin: 10px 0">
    <wd-button style="margin-left: 10px" icon="caomei">Normal</wd-button>
    <wd-button style="margin-left: 10px" icon="caomei" type="primary"
      >Primary</wd-button
    >
    <wd-button style="margin-left: 10px" icon="caomei" type="info"
      >Info</wd-button
    >
    <wd-button style="margin-left: 10px" icon="caomei" type="success"
      >Success</wd-button
    >
    <wd-button style="margin-left: 10px" icon="caomei" type="warning"
      >Warning</wd-button
    >
    <wd-button style="margin-left: 10px" icon="caomei" type="error"
      >Error</wd-button
    >
  </div>

  <!-- test change theme -->
  <div style="margin: 10px 0">
    <wd-button
      style="margin-left: 10px"
      icon="caomei"
      type="info"
      @click="onChangeTheme"
      >Change Theme</wd-button
    >
  </div>
</template>

<script lang="ts">
const useTheme = () => {
  const themeMode = localStorage.getItem('wd-theme-mode')
  themeMode == 'dark' && document.documentElement.classList.add('dark')
  themeMode != 'dark' && document.documentElement.classList.remove('dark')
}
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    useTheme()
    const switchRef = ref(false)
    const onChangeTheme = () => {
      switchRef.value = !switchRef.value
      localStorage.setItem('wd-theme-mode', switchRef.value ? 'dark' : 'light')
      useTheme()
    }
    return {
      onChangeTheme,
    }
  },
})
</script>
