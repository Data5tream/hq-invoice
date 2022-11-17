<template>
  <div v-if="showNotification" class="notification" :class="{ visible }">
    Daten kopiert
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { state } from '@/tools/state';

const showNotification = ref(false);
const visible = ref(false);
const hideTimer = ref(0);

const hideNotification = () => {
  visible.value = false;
  state.hideNotification();
  hideTimer.value = setTimeout(() => {
    showNotification.value = false;
  }, 1000) as unknown as number;
};

watch(() => state.notificationVisible, () => {
  if (state.notificationVisible) {
    showNotification.value = true;
    clearTimeout(hideTimer.value);
    setTimeout(() => {
      visible.value = true;
      setTimeout(hideNotification, 2000);
    }, 100);
  }
});
</script>

<style scoped>
.notification {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%) perspective(100px) translateZ(-50px);
  background: #333;
  color: #fff;
  padding: 8px 32px;

  opacity: 0;
  transition: all 0.6s ease;
}
.notification.visible {
  opacity: 1;
  transform: translateX(-50%) translateZ(0);
}
</style>
