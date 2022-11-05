<template>
  <UiTable :data="props.data" :thead="tableData.thead" :tbody="tableData.tbody" fullwidth>
    <template #name="{ data }">
      <HqCopy :val="data.name">
        {{ data.name }}
      </HqCopy>
    </template>
    <template #time="{ data }">
      <HqCopy :val="data.totalTime.toFixed(2)">
        {{ formatNumber(data.totalTime) }}
      </HqCopy>
    </template>
    <template #value="{ data }">
      <HqCopy :val="formatCurrency(data.value)">
        {{ formatCurrency(data.value) }}
      </HqCopy>
    </template>
  </UiTable>
</template>

<script setup lang="ts">
import type { PreparedData } from '@/types';

import { reactive } from 'vue';
import { formatCurrency, formatNumber } from '@/tools/util';

import { UiTable } from 'balm-ui';

import HqCopy from '@/components/HqCopy.vue';

const props = defineProps({
  data: {
    type: Array < PreparedData >,
  },
});

const tableData = reactive({
  thead: ['Projekt', 'Stunden', 'Wert'] as Array<string>,
  tbody: [{ slot: 'name' }, { slot: 'time' }, { slot: 'value' }] as Array<any>,
});
</script>

<style scoped>
:deep(.mdc-data-table__cell) {
  text-align: right;
}

:deep(.mdc-data-table__cell:first-child) {
  text-align: left;
}

span {
  cursor: pointer;
}
</style>
