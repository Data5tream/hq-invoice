<template>
  <div>
    <h2>Gesamtwerte</h2>
    <UiList class="totals-list">
      <UiItem v-copy="copy(totals.hours.toFixed(2))">
        <UiItemTextContent>
          {{ formatNumber(totals.hours) }}
        </UiItemTextContent>
        <UiItemLastContent>
          Std.
        </UiItemLastContent>
      </UiItem>
      <UiItem v-copy="copy(formatCurrency(totals.value * (1 - tax / 100)))">
        <UiItemTextContent>
          {{ formatCurrency(totals.value * (1 - tax / 100)) }}
        </UiItemTextContent>
        <UiItemLastContent>
          Netto ({{ 100 - tax }}%)
        </UiItemLastContent>
      </UiItem>
      <UiItem v-copy="copy(formatCurrency(totals.value * tax / 100))">
        <UiItemTextContent>
          {{ formatCurrency(totals.value * tax / 100) }}
        </UiItemTextContent>
        <UiItemLastContent>
          Steuern ({{ tax }}%)
        </UiItemLastContent>
      </UiItem>
      <UiItemDivider />
      <UiItem v-copy="copy(formatCurrency(totals.value))">
        <UiItemTextContent>
          {{ formatCurrency(totals.value) }}
        </UiItemTextContent>
        <UiItemLastContent>
          Brutto
        </UiItemLastContent>
      </UiItem>
    </UiList>
  </div>
</template>

<script setup lang="ts">
import { formatCurrency, formatNumber } from '@/tools/util';

import { UiItem, UiItemDivider, UiItemLastContent, UiItemTextContent, UiList, useToast } from 'balm-ui';

defineProps({
  totals: {
    type: Object,
    default: () => ({ hours: 0, value: 0 }),
  },
  tax: {
    type: Number,
    default: 0,
  },
});

const toast = useToast();

const copy = (text: string) => ({
  text,
  success: () => {
    toast('Daten kopiert');
  },
});
</script>

<style scoped>
.totals-list {
  width: 80%;
}

.totals-list > li {
  padding: 0;
}
</style>