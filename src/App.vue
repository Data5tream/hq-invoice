<template>
  <UiTopAppBar contentSelector="main" :navIcon="false">
    HQ Invoice
  </UiTopAppBar>

  <main>
    <UiGrid class="app-content">
      <UiGridCell columns="4">
        <HqConfig v-model:rate="rate" v-model:tax="tax" />
        <transition-group name="fade">
          <template v-if="hasUploaded">
            <HqTotals :totals="data.totals" :tax="tax" />
            <HqUpload key="loader" @update="updateData" />
          </template>
        </transition-group>
      </UiGridCell>
      <UiGridCell columns="8">
        <transition-group name="fade">
          <HqContent v-if="hasUploaded" key="content" :data="data.prepared" />
          <HqUpload v-else key="loader" @update="updateData" />
        </transition-group>
      </UiGridCell>
    </UiGrid>
  </main>
  <HqFooter />
</template>

<script setup lang="ts">
import type { AppData, UploadData } from '@/types';

import { defineAsyncComponent, reactive, ref, watch } from 'vue';

import { UiGrid, UiGridCell, UiTopAppBar } from 'balm-ui';

import HqConfig from '@/components/HqConfig.vue';
import HqUpload from '@/components/HqUpload.vue';
import HqFooter from '@/components/HqFooter.vue';

import convertData from '@/tools/dataConvertor';

const HqContent = defineAsyncComponent(() => import('@/components/HqContent.vue'));
const HqTotals = defineAsyncComponent(() => import('@/components/HqTotals.vue'));

const hasUploaded = ref(false);
const rate = ref(10);
const tax = ref(20);

const data = reactive({ raw: [], prepared: [], totals: { hours: 0, value: 0 } } as AppData);

const updateData = (rawData: Array<UploadData>) => {
  hasUploaded.value = true;
  data.raw = rawData;
  data.prepared = convertData(rawData, rate.value);
  calculateValues(rate.value);
};

const calculateValues = (newRate: number) => {
  data.totals.hours = 0;
  data.totals.value = 0;
  data.prepared.forEach(ele => {
    ele.value = ele.totalTime * newRate;
    data.totals.hours += ele.totalTime;
    data.totals.value += ele.value;
  });
};

watch(rate, (newRate) => {
  calculateValues(newRate);
});
</script>

<style scoped>
main {
  min-height: calc(100vh - 64px);
}

.app-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
