<template>
  <UiGrid class="config-container">
    <UiGridCell columns="12">
      <h2>Einstellungen</h2>
    </UiGridCell>
    <UiGridCell columns="12">
      <UiTextfield label="€/h" inputType="number" :modelValue="rate" @update:modelValue="updateRate" outlined />
    </UiGridCell>
    <UiGridCell columns="12">
      <UiTextfield label="Steuern (%)" inputType="number" :modelValue="tax" @update:modelValue="updateTax" outlined />
    </UiGridCell>
  </UiGrid>
</template>

<script setup lang="ts">
import { UiGrid, UiGridCell, UiTextfield } from 'balm-ui';

defineProps({
  rate: {
    type: Number,
    default: 10,
  },
  tax: {
    type: Number,
    default: 20,
  },
});

const emit = defineEmits(['update:rate', 'update:tax']);

const updateRate = (event: number) => {
  emit('update:rate', Number(event));
};
const updateTax = (event: number) => {
  emit('update:tax', Number(event));
};
</script>

<style scoped>
h2 {
  margin-bottom: 16px;
}

.config-container {
  --mdc-layout-grid-margin-desktop: 0 0 24px;
}
</style>
