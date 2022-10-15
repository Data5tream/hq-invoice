<template>
  <UiTable :data="props.data" :thead="tableData.thead" :tbody="tableData.tbody" fullwidth>
    <template #time="{ data }">
      {{ data.totalTime.toFixed(2) }}
    </template>
    <template #value="{ data }">
      {{ formatCurrency(data.value) }}
    </template>
  </UiTable>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import { UiTable } from 'balm-ui';

const props = defineProps({
  data: {
    type: Array,
  },
});

const tableData = reactive({
  thead: ['Projekt', 'Stunden', 'Wert'] as Array<string>,
  tbody: ['name', { slot: 'time' }, { slot: 'value' }] as Array<string>,
});

const formatCurrency = (val: number) =>
  (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })).format(val);
</script>

<style scoped>
:deep(.mdc-data-table__cell) {
  text-align: right;
}

:deep(.mdc-data-table__cell:first-child) {
  text-align: left;
}
</style>
