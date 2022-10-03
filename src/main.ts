import { createApp } from "vue";
import App from "./App.vue";
import route from "./router"
import piniaStore from './store';

import { message } from "ant-design-vue";
import "./style.css";
import 'ant-design-vue/es/message/style/css';

const app = createApp(App);

app.config.globalProperties.$messages = message;

app.use(route).use(piniaStore).mount("#app");
