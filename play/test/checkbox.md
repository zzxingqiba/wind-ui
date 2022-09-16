## Play Checkbox

## entry main.ts

```typescript
import { createApp } from 'vue'
import APP from './app.vue'
import WdCheckbox, {
  WdCheckboxButton,
  WdCheckboxGroup,
} from '@wind/components/checkbox'
import WdSwitch from '@wind/components/switch'
import '@wind/theme-chalk/src/index.scss'
const app = createApp(APP)
app.use(WdCheckbox).use(WdSwitch).use(WdCheckboxGroup).use(WdCheckboxButton)
app.mount('#app')
```

## 说明

### 基础

```html
<wd-checkbox v-model="value1" label="wind" />
```

### 自定义值

```html
<wd-checkbox
  v-model="value2"
  label="wind"
  true-label="wind"
  false-label="sky"
/>
```

### 尺寸

```html
<wd-checkbox v-model="value3" label="wind" size="large" />
<wd-checkbox v-model="value4" label="sky" />
<wd-checkbox v-model="value5" label="night" size="small" />
```

### 受控状态

```html
<wd-checkbox v-model="value6" label="wind" :disabled="disabled" />
<wd-switch v-model="disabled"></wd-switch>
```

### 多选框组

```html
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
</div>
```

### 按钮样式

```html
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
</div>
```

### 中间状态

```html
<wd-checkbox v-model="value9" indeterminate label="wind" />
<wd-checkbox-group v-model="value10">
  <wd-checkbox-button label="wind"></wd-checkbox-button>
  <wd-checkbox-button label="sky"></wd-checkbox-button>
  <wd-checkbox-button label="night"></wd-checkbox-button>
  <wd-checkbox-button label="star"></wd-checkbox-button>
  <wd-checkbox-button label="sun"></wd-checkbox-button>
</wd-checkbox-group>
```

### 可选项目数量的限制

```html
<wd-checkbox-group v-model="value11" :min="1" :max="3" @change="handleChange">
  <wd-checkbox-button label="wind"></wd-checkbox-button>
  <wd-checkbox-button label="sky"></wd-checkbox-button>
  <wd-checkbox-button label="night"></wd-checkbox-button>
  <wd-checkbox-button label="star"></wd-checkbox-button>
  <wd-checkbox-button label="sun"></wd-checkbox-button>
</wd-checkbox-group>
```

### CheckBox 属性

| 属性名        | 说明                                     | 类型                      | 可选值                      | 默认值    |
| ------------- | ---------------------------------------- | ------------------------- | --------------------------- | --------- |
| v-model       | 绑定值                                   | string / number / boolean | -                           | []        |
| size          | 多选框组尺寸                             | string                    | 'small', 'default', 'large' | 'default' |
| disabled      | 是否禁用                                 | boolean                   | -                           | false     |
| label         | 选中状态的值(只在 checkbox-group 下有效) | string / number           | -                           | -         |
| trueLabel     | 自定义选中值                             | string / number           | -                           | -         |
| falseLabel    | 自定义未选中值                           | string / number           | -                           | -         |
| name          | 原生 name 属性                           | string                    | -                           | -         |
| indeterminate | 中间状态                                 | boolean                   | -                           | false     |

### Checkbox 事件

| 事件名 | 说明                     | 回调参数 |
| ------ | ------------------------ | -------- |
| change | 当绑定值变化时触发的事件 | value    |

### Checkbox 插槽

| 插槽名 | 描述           |
| ------ | -------------- |
| -      | 自定义默认内容 |

### CheckBox-Button 属性

| 属性名     | 说明                                     | 类型            | 可选值                      | 默认值    |
| ---------- | ---------------------------------------- | --------------- | --------------------------- | --------- |
| v-model    | 绑定值                                   | array           | -                           | []        |
| size       | 多选框组尺寸                             | string          | 'small', 'default', 'large' | 'default' |
| disabled   | 是否禁用                                 | boolean         | -                           | false     |
| label      | 选中状态的值(只在 checkbox-group 下有效) | string / number | -                           | -         |
| trueLabel  | 自定义选中值                             | string / number | -                           | -         |
| falseLabel | 自定义未选中值                           | string / number | -                           | -         |
| name       | 原生 name 属性                           | string          | -                           | -         |

### Checkbox-Button 事件

| 事件名 | 说明                     | 回调参数 |
| ------ | ------------------------ | -------- |
| change | 当绑定值变化时触发的事件 | value    |

### Checkbox-Button 插槽

| 插槽名 | 描述           |
| ------ | -------------- |
| -      | 自定义默认内容 |

### CheckBox-Group 属性

| 属性名   | 说明                           | 类型                      | 可选值                      | 默认值    |
| -------- | ------------------------------ | ------------------------- | --------------------------- | --------- |
| v-model  | 绑定值                         | string / number / boolean | -                           | -         |
| size     | 多选框组尺寸                   | string                    | 'small', 'default', 'large' | 'default' |
| disabled | 是否禁用                       | boolean                   | -                           | false     |
| max      | 可被勾选的 checkbox 的最大数量 | index                     | -                           | -         |
| min      | 可被勾选的 checkbox 的最小数量 | archive                   | -                           | -         |

### Checkbox-Group 事件

| 事件名 | 说明                     | 回调参数 |
| ------ | ------------------------ | -------- |
| change | 当绑定值变化时触发的事件 | value    |

### Checkbox-Group 插槽

| 插槽名 | 描述           |
| ------ | -------------- |
| -      | 自定义默认内容 |

## test app.vue

```JavaScript
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

  <!-- 中间状态 -->
  <div>
    <wd-checkbox
      v-model="value9"
      :indeterminate="indeterminate"
      label="全选"
      @change="changeAll"
    />
    <wd-checkbox-group v-model="value10">
      <wd-checkbox-button label="wind"></wd-checkbox-button>
      <wd-checkbox-button label="sky"></wd-checkbox-button>
      <wd-checkbox-button label="night"></wd-checkbox-button>
      <wd-checkbox-button label="star"></wd-checkbox-button>
      <wd-checkbox-button label="sun"></wd-checkbox-button>
    </wd-checkbox-group>
  </div>

  <!-- 可选项目数量的限制 -->
  <div>
    <wd-checkbox-group
      v-model="value11"
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
import { defineComponent, ref, watch } from 'vue'

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
    const value9 = ref()
    const value10 = ref<Array<string>>([])
    const value11 = ref([])
    const handleChange = (val: any) => {
      console.log(val)
    }
    const indeterminate = ref(true)
    const changeAll = (val: any) => {
      value10.value = val ? ['wind', 'sky', 'night', 'star', 'sun'] : []
    }

    watch(
      () => value10.value,
      () => {
        indeterminate.value = value10.value?.length == 5 ? false : true
        value9.value = value10.value?.length ? true : false
      }
    )

    return {
      handleChange,
      changeAll,
      indeterminate,
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
      value10,
      value11,
    }
  },
})
</script>

```
