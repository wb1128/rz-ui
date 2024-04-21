# 快速开始

本节将介绍如何在项目中使用 RzUI。

## 安装

使用 npm:

```bash
npm install rz-ui-vue
```

或者使用 yarn:

```bash
yarn add rz-ui-vue
```

## 引入

在 main.js 中引入 RzUI：

```js
import RzUI from 'rz-ui-vue'
import 'rz-ui-vue/index.css'

Vue.use(RzUI)
```

## 示例

在项目中使用 RzUI 组件，例如：

```vue
<template>
  <div>
    <rz-button type="primary">按钮</rz-button>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
```
  
`