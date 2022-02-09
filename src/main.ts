import { createApp } from "vue";
import App from "./App.vue";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App).use(Toast, { position: POSITION.TOP_LEFT }).mount("#app");
