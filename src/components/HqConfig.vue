<template>
  <div>
    <h2>Einstellungen</h2>
    <UiTextfield label="Hourly rate" inputType="number" :modelValue="rate" @update:modelValue="updateRate" outlined />
  </div>
</template>

<script setup lang="ts">
import { UiTextfield } from 'balm-ui';

defineProps({
  rate: {
    type: Number,
    default: 10,
  },
});

const emit = defineEmits(['update:rate']);

const updateRate = (event: number) => {
  emit('update:rate', Number(event));
};
</script>

<style scoped>
h2 {
  margin-bottom: 16px;
}
</style>
