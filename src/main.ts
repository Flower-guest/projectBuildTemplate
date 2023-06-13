import { createApp } from 'vue';

import App from './App.vue';

import route from './router';

import pinia from './store';

import 'uno.css';

const app = createApp(App);

app.use(route).use(pinia).mount('#app');
