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
import type { PreparedData } from '@/types';

import { reactive } from 'vue';
import { formatCurrency } from '@/tools/util';

import { UiTable } from 'balm-ui';

const props = defineProps({
  data: {
    type: Array<PreparedData>,
  },
});

const tableData = reactive({
  thead: ['Projekt', 'Stunden', 'Wert'] as Array<string>,
  tbody: ['name', { slot: 'time' }, { slot: 'value' }] as Array<any>,
});
</script>

<style scoped>
:deep(.mdc-data-table__cell) {
  text-align: right;
}

:deep(.mdc-data-table__cell:first-child) {
  text-align: left;
}
</style>
