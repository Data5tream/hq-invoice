<template>
  <UiTopAppBar contentSelector="main">
    HQ Invoice
  </UiTopAppBar>

  <main>
    <UiGrid class="app-content">
      <UiGridCell columns="4">
        <HqConfig v-model:rate="rate" />
      </UiGridCell>
      <UiGridCell columns="8">
        <HqContent v-if="hasUploaded" :data="data.prepared" />
        <HqUpload v-else @update="updateData" />
      </UiGridCell>
    </UiGrid>
  </main>
</template>

<script setup lang="ts">
import type { AppData, UploadData } from '@/types';

import { reactive, ref, watch } from 'vue';

import { UiTopAppBar, UiGrid, UiGridCell } from 'balm-ui';

import HqConfig from '@/components/HqConfig.vue';
import HqContent from '@/components/HqContent.vue';
import HqUpload from '@/components/HqUpload.vue';

import convertData from '@/tools/dataConvertor';

const hasUploaded = ref(false);
const rate = ref(10);
const data = reactive({ raw: [], prepared: [] } as AppData);

const updateData = (rawData: Array<UploadData>) => {
  hasUploaded.value = true;
  data.raw = rawData;
  data.prepared = convertData(rawData, rate.value);
};

watch(rate, (newRate) => {
  data.prepared.forEach(ele => {
    ele.value = ele.totalTime * newRate;
  });
});
</script>

<style scoped>
.app-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
