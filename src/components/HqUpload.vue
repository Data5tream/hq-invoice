<template>
  <div class="hq-upload">
    <UiFile text="CSV Datei auswählen" accept="text/csv" @change="loadFile" />
  </div>
</template>

<script setup lang="ts">
import type { UploadFile } from '@/types';

import { UiFile } from 'balm-ui';
import parser from '@/tools/parser';

const emit = defineEmits(['update']);

const loadFile = (data: Array<UploadFile>) => {
  const reader = new FileReader();
  reader.onload = function(e: any) {
    emit('update', parser(e.target.result));
  };
  reader.readAsArrayBuffer(data[0].sourceFile);
};
</script>

<style scoped>
.hq-upload {
  display: flex;
  justify-content: center;
  margin-top: 128px;
}
</style>
