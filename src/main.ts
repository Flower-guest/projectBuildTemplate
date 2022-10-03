import { createApp } from "vue";
import { message } from "ant-design-vue";
import "./style.css";
import 'ant-design-vue/es/message/style/css';
import App from "./App.vue";

const app = createApp(App);

app.config.globalProperties.$messages = message;

app.mount("#app");
