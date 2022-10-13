<template>
  <UiTopAppBar contentSelector="main">
    HQ Invoice
  </UiTopAppBar>

  <main>
    <UiGrid class="app-content">
      <UiGridCell columns="4">
        <Configurator />
      </UiGridCell>
      <UiGridCell columns="8">
        <HqContent v-if="hasUploaded" />
        <HqUpload v-else @update="updateData" />
      </UiGridCell>
    </UiGrid>
  </main>
</template>

<script setup lang="ts">
import type { UploadData } from '@/types';

import { ref } from 'vue';

import { UiTopAppBar, UiGrid, UiGridCell } from 'balm-ui';

import Configurator from '@/components/Configurator.vue';
import HqContent from '@/components/HqContent.vue';
import HqUpload from '@/components/HqUpload.vue';

const hasUploaded = ref(false)

const updateData = (data: Array<UploadData>) => {
  console.log(data[0]);
}

</script>

<style scoped>
.app-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
