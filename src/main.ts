import { createApp } from "vue";
import { message } from "ant-design-vue";
import "./style.css";
import 'ant-design-vue/es/message/style/css';
import App from "./App.vue";
import route from "./router"

const app = createApp(App);

app.config.globalProperties.$messages = message;

app.use(route).mount("#app");
