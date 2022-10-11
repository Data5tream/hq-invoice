<template>
  <UiTopAppBar contentSelector="main">
    HQ Invoice
  </UiTopAppBar>

  <main>
    Content> {{ test }}
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { UiTopAppBar } from "balm-ui";

const test = ref('test1');
</script>

<style scoped>

</style>
