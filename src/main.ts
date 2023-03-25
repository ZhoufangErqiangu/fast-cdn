import { FastCrud } from "@fast-crud/fast-crud";
import ui from "@fast-crud/ui-element";
import ElementPlus from "element-plus";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

createApp(App).use(router).use(ElementPlus).use(ui).use(FastCrud).mount("#app");
