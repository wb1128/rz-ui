---
title: Dropdown
description: Dropdown  组件的文档
---

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

悬停在下拉菜单上以展开更多操作。

<preview path="../demo/Dropdown/Basic.vue" title="基础用法"></preview>

## 触发方式

可以配置点击激活或者悬停激活。

将 trigger 属性设置为 `click` 即可， 默认为 hover。

<preview path="../demo/Dropdown/Trigger.vue"></preview>

## 手动打开关闭

将 `manual` 属性设置为 true 即可， 然后可以使用实例上面的 `show` 和 `hide` 方法打开关闭下拉菜单。

<preview path="../demo/Dropdown/Manual.vue"></preview>

### Attributes

| 属性名         | 详情                   | 类型                                                                                                                                                                      | 默认值 |
| -------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| menuOptions    | 菜单选项               | ^MenuOption[]                                                                                                                                                             | []     |
| placement      | 菜单位置               | ^[enum]'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end' | bottom |
| popper-options | popper.js 参数         | ^[object] 参考 popper.js 文档                                                                                                                                             | {}     |
| open-delay     | 出现延迟，单位：毫秒   | ^[number]                                                                                                                                                                 | 0      |
| close-delay    | 消失延迟，单位：毫秒   | ^[number]                                                                                                                                                                 | 200    |
| trigger        | 触发方式               | ^[enum]'hover' \| 'click'                                                                                                                                                 | hover  |
| manual         | 是否开启手动触发模式   | ^[boolean]                                                                                                                                                                | false  |
| transition     | 过渡效果名称           | ^[string]                                                                                                                                                                 | ''     |
| hideAfterClick | 点击后是否自动隐藏菜单 | ^[boolean]                                                                                                                                                                | true   |

### MenuOption

| 属性名   | 详情           | 类型                 | 默认值 |
| -------- | -------------- | -------------------- | ------ |
| label    | 菜单展示标签   | 'string' \| 'vNode'  |        |
| key      | 菜单选项 Key   | 'string' \| 'number' |        |
| disabled | 是否禁用       | boolean              | false  |
| divided  | 是否显示分隔符 | boolean              | false  |

### Events

| 属性名         | 详情                           | 类型       |
| -------------- | ------------------------------ | ---------- |
| visible-change | 当 tooltip 展示/隐藏时被触发   | boolean    |
| select         | 当选择到某一个选项的时候被触发 | MenuOption |

### Exposes

| 属性名 | 详情                 | 类型                                            |
| ------ | -------------------- | ----------------------------------------------- |
| show   | expose show function | ^[Function](event?: Event \| undefined) => void |
| hide   | expose hide function | ^[Function](event?: Event \| undefined) => void |
