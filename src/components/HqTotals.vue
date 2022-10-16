<template>
  <div>
    <h2>Gesamtwerte</h2>
    <UiList class="totals-list">
      <UiItem>
        <UiItemTextContent>{{ totals.hours.toFixed(2) }}</UiItemTextContent>
        <UiItemLastContent>
          Std.
        </UiItemLastContent>
      </UiItem>
      <UiItem>
        <UiItemTextContent>{{ formatCurrency(totals.value * (1 - tax / 100)) }}</UiItemTextContent>
        <UiItemLastContent>
          Netto ({{ 100 - tax }}%)
        </UiItemLastContent>
      </UiItem>
      <UiItem>
        <UiItemTextContent>{{ formatCurrency(totals.value * tax / 100) }}</UiItemTextContent>
        <UiItemLastContent>
          Steuern ({{ tax }}%)
        </UiItemLastContent>
      </UiItem>
      <UiItemDivider />
      <UiItem>
        <UiItemTextContent>{{ formatCurrency(totals.value) }}</UiItemTextContent>
        <UiItemLastContent>
          Brutto
        </UiItemLastContent>
      </UiItem>
    </UiList>
  </div>
</template>

<script setup lang="ts">
import { formatCurrency } from '@/tools/util';

import { UiItem, UiItemDivider, UiItemLastContent, UiItemTextContent, UiList } from 'balm-ui';

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
</script>

<style scoped>
.totals-list {
  width: 80%;
}

.totals-list > li {
  padding: 0;
}
</style>