import { FastCrud } from "@fast-crud/fast-crud";
import FsUiElement from "@fast-crud/ui-element";
import "@fast-crud/ui-interface";
import ElementPlus from "element-plus";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "./style.css";

const app = createApp(App);
app.use(router).use(ElementPlus);

app.use(FsUiElement);

app.use(FastCrud).mount("#app");
