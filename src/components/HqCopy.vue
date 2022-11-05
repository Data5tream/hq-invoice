<template>
  <div v-copy="copy(val)">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  val: {
    type: String,
    default: ''
  },
});

const copy = (text: string) => ({
  text,
  success: () => {
    console.log('copy');
  },
});
</script>

<style scoped>
div {
  cursor: pointer;
}
</style>
