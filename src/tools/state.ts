import { reactive } from 'vue';

export const state = reactive({
  notificationVisible: false,
  showNotification() {
    this.notificationVisible = true;
  },
  hideNotification() {
    this.notificationVisible = false;
  }
});
