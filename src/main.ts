import { createApp } from "vue";
import App from "./App.vue";
import route from "./router";
import pinia from "./store";

import "uno.css";
import "ant-design-vue/es/message/style/css";

const app = createApp(App);

app.use(route).use(pinia).mount("#app");
