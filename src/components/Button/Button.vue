<template>
  <button
    ref="_ref"
    class="rz-button"
    :class="{
      [`rz-button--${type}`]: type,
      [`rz-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'
defineOptions({
  name: 'RzButton'
})

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref
})
</script>
<style scoped></style>
