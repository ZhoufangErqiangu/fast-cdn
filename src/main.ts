import { useUi } from "@fast-crud/ui-interface";
import FsUiElement from "@fast-crud/ui-element";
import ElementPlus from "element-plus";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "./style.css";

const app = createApp(App);
app.use(router).use(ElementPlus);
const e = FsUiElement.install(app);
const u = useUi();
u.set(e);

import { FastCrud } from "@fast-crud/fast-crud";
app.use(FastCrud, { ui: u.ui }).mount("#app");
