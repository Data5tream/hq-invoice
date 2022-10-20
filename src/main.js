import { createApp } from 'vue';
import App from './App.vue';

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components

const app = createApp(App);

import 'balm-ui-css';

app.use(BalmUI);
app.use(BalmUIPlus);

import './assets/main.css'

createApp(App).mount('#app')