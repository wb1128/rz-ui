---
title: Collapse
description: Collapse 组件的文档
---

# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响

<preview path="../demo/Callapse/Basic.vue" title="基础用法"></preview>

## 手风琴效果

每次只能展开一个面板

<preview path="../demo/Callapse/Accordion.vue" title="基础用法"></preview>

### Collapse Attributes

| 属性名                | 详情                                                            | 类型                 | 默认值  |
| --------------------- | --------------------------------------------------------------- | -------------------- | ------- |
| model-value / v-model | 当前活动面板，在手风琴模式下其类型是string，在其他模式下是array | `'string'\| 'array'` | `[]`    |
| accordion             | 是否开启手风琴模式                                              | `boolean`            | `false` |

### Collapse Events

| 事件名 | 详情                                               |
| ------ | -------------------------------------------------- |
| change | 当前展开的面板改变时触发，参数为当前展开的面板名称 |

### Collapse Slots

| 插槽名  | 详情                                               |
| ------- | -------------------------------------------------- |
| default | 折叠面板的内容，该插槽内可以放置 CollapseItem 组件 |

### Collapse Item Attributes

| 属性名   | 详情         | 类型                 | 默认值  |
| -------- | ------------ | -------------------- | ------- |
| name     | 唯一标志符   | `'string'\|'number'` | `''`    |
| title    | 面板标题     | `string`             | `''`    |
| disabled | 是否禁用面板 | `boolean`            | `false` |

### Collapse Item Slot

| 插槽名  | 详情                 |
| ------- | -------------------- |
| default | 折叠面板的内容       |
| title   | Collapse Item 的标题 |
