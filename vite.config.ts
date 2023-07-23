import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { Plugin, autoComplete } from "vite-plugin-cdn-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Plugin({
      modules: [
        autoComplete("vue"),
        {
          name: "vue-router",
          var: "VueRouter",
          path: "https://cdn.jsdelivr.net/npm/vue-router@4.1.6/dist/vue-router.global.min.js",
        },
        {
          name: "element-plus",
          var: "ElementPlus",
          path: "https://cdn.jsdelivr.net/npm/element-plus@2.3.1/dist/index.full.min.js",
          css: [
            "https://cdn.jsdelivr.net/npm/element-plus@2.3.1/dist/index.min.css",
            "https://cdn.jsdelivr.net/npm/element-plus@2.3.1/theme-chalk/dark/css-vars.css",
          ],
        },
        {
          name: "dayjs",
          var: "dayjs",
          path: "https://cdn.jsdelivr.net/npm/dayjs@1.11.7/dayjs.min.js",
        },
        {
          name: "@fast-crud/ui-interface",
          var: "FastCrudUiInterface",
          path: "https://cdn.jsdelivr.net/npm/@fast-crud/ui-interface@1.11.6/dist/ui-interface.umd.min.js",
        },
        {
          name: "@fast-crud/ui-element",
          var: "FastCrudUiElement",
          path: "https://cdn.jsdelivr.net/npm/@fast-crud/ui-element@1.11.7/dist/ui-element.umd.min.js",
        },
        {
          name: "@fast-curd/fast-crud",
          var: "fast-crud",
          path: "https://cdn.jsdelivr.net/npm/@fast-crud/fast-crud@1.11.7/dist/fast-crud.umd.min.js",
          css: "https://cdn.jsdelivr.net/npm/@fast-crud/fast-crud@1.11.7/dist/style.css",
        },
      ],
    }),
    vue(),
  ],
});
