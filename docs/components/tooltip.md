---
title: Tooltip
description: Tooltip  组件的文档
---

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

使用 `content` 属性来决定 hover 时的提示信息。

<preview path="../demo/Tooltip/Basic.vue" title="基础用法"></preview>

## 不同位置

由 placement 属性决定展示效果： placement属性值为：[方向]-[对齐位置]；四个方向：`top、left、right、bottom`；三种对齐位置：`start, end`，默认为空。

<preview path="../demo/Tooltip/Placement.vue"></preview>

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式

用具名 slot content，替代tooltip中的content属性。

<preview path="../demo/Tooltip/TooltipSlot.vue"></preview>

### Attributes

| 属性名         | 详情                             | 类型                                                                                                                                                                    | 默认值 |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| content        | 显示内容，可被 slot#content 覆盖 | string                                                                                                                                                                  | ''     |
| placement      | Tooltip 的位置                   | enum 'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end' | bottom |
| popper-options | popper.js 参数                   | object 参考 popper.js 文档                                                                                                                                              | {}     |
| open-delay     | 出现延迟时间，单位毫秒           | number                                                                                                                                                                  | 0      |
| close-delay    | 消失延迟时间，单位毫秒           | number                                                                                                                                                                  | 200    |
| trigger        | 触发 Tooltip 显示的方式          | enum 'hover' \| 'click'                                                                                                                                                 | hover  |
| manual         | 是否开启手动触发模式             | boolean                                                                                                                                                                 | false  |
| transition     | 动画名称                         | string                                                                                                                                                                  | ''     |

### Tooltip Events

| 属性名         | 详情                                | 类型    |
| -------------- | ----------------------------------- | ------- |
| visible-change | 当 Tooltip 展示或隐藏时触发的事件   | boolean |
| click-outside  | 当点击 Tooltip 外部区域时触发的事件 | boolean |

### Tooltip Slots

| 插槽名  | 详情                                      |
| ------- | ----------------------------------------- |
| default | 默认的 Tooltip 触发行为和参考元素关联方式 |
| content | 自定义 Tooltip 内容                       |

### Tooltip Exposes

| 属性名 | 详情                        | 类型                                 |
| ------ | --------------------------- | ------------------------------------ |
| show   | 暴露用于显示 Tooltip 的函数 | (event?: Event \| undefined) => void |
| hide   | 暴露用于隐藏 Tooltip 的函数 | (event?: Event \| undefined) => void |
