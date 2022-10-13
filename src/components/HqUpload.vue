<template>
  <div class="hq-upload">
    <UiFile text="CSV Datei auswählen" accept="text/csv" @change="loadFile" />
  </div>
</template>

<script setup lang="ts">
import type { UploadData, UploadFile } from '@/types';

import { parse } from '@vanillaes/csv';

import { UiFile } from 'balm-ui';

const emit = defineEmits(['update']);

const parseTime = (timeStr: string) =>{
  return Date.parse(`20${timeStr.substring(6, 8)}-${timeStr.substring(3, 5)}-${timeStr.substring(0, 2)} ${timeStr.substring(9, 14)}`);
}

const loadFile = (data: Array<UploadFile>) => {
  const reader = new FileReader();
  reader.onload = function(e: any) {
    let binary = '';
    const bytes = new Uint8Array(e.target.result);
    const length = bytes.byteLength;
    for (let i = 0; i < length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    const data = parse(binary);

    const formatRow = data.shift()
    if (JSON.stringify(formatRow) !== '["Projekt","Aufgabe","Beschreibung","Startdatum","Enddatum","Arbeitszeit (hh:mm)"]') {
      console.log('format changed!!!');
      console.log(formatRow);
      return;
    }

    const mappedData: Array<UploadData> = data.map(ele => ({
      project: ele[0],
      activity: ele[1],
      note: ele[2],
      startTime: parseTime(ele[3]),
      endTime: parseTime(ele[3]),
      duration: (parseTime(ele[4]) - parseTime(ele[3])) / 3600000,
    }))

    emit('update', mappedData);
  };
  reader.readAsArrayBuffer(data[0].sourceFile);
}

</script>

<style scoped>
.hq-upload {
  display: flex;
  justify-content: center;
  margin-top: 128px;
}
</style>
