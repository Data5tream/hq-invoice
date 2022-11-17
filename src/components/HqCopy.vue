<template>
  <div v-copy="copy(val)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { state } from '@/tools/state';

defineProps({
  val: {
    type: String,
    default: ''
  },
});

const copy = (text: string) => ({
  text,
  success: () => {
    state.showNotification();
  },
});
</script>

<style scoped>
div {
  cursor: pointer;
}
</style>
