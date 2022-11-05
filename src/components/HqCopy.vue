<template>
  <div v-copy="copy(val)">
    <slot />
  </div>
  <Teleport to="body">
    <div v-if="showNotification" class="notification" :class="{ visible }">
      Daten kopiert
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  val: {
    type: String,
    default: ''
  },
});

const showNotification = ref(false);
const visible = ref(false);

const showNotif = () => {
  showNotification.value = true;
  setTimeout(() => {
    visible.value = true;
    setTimeout(hideNotif, 2000);
  }, 100);
};

const hideNotif = () => {
  visible.value = false;
  setTimeout(() => {
    showNotification.value = false;
  }, 1000);
};

const copy = (text: string) => ({
  text,
  success: () => {
    showNotif();
  },
});
</script>

<style scoped>
div {
  cursor: pointer;
}

.notification {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: #2c3e50;
  color: #fff;
  padding: 8px 32px;

  opacity: 0;
  transition: opacity 1s ease;
}
.notification.visible {
  opacity: 1;
}

</style>
