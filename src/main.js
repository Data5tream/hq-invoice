import { createApp } from 'vue';
import App from './App.vue';

import 'balm-ui-css';
import './assets/main.css';

import vCopy from 'balm-ui/directives/copy';
import $toast from 'balm-ui/plugins/toast';

const app = createApp(App);

app.directive(vCopy.name, vCopy);
app.use($toast);

app.mount('#app');
