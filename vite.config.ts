import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { importMap } from "./src/plugins";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dist",
  plugins: [
    vue(),
    // visualizer({
    //   emitFile: true,
    //   filename: "stats.html",
    // }),
    importMap({
      modules: [
        {
          name: "@fast-crud/fast-crud",
          path: "https://cdn.jsdelivr.net/npm/@fast-crud/fast-crud@1.14.6/dist/fast-crud.mjs",
          css: "https://cdn.jsdelivr.net/npm/@fast-crud/fast-crud@1.14.6/dist/style.css",
        },
        {
          name: "@fast-crud/ui-element",
          path: "https://cdn.jsdelivr.net/npm/@fast-crud/ui-element@1.14.6/dist/ui-element.mjs",
        },
        {
          name: "@fast-crud/ui-interface",
          path: "https://cdn.jsdelivr.net/npm/@fast-crud/ui-interface@1.14.6/dist/ui-interface.mjs",
        },
        {
          name: "element-plus",
          path: "https://cdn.jsdelivr.net/npm/element-plus@2.3.8/dist/index.full.mjs",
          css: [
            "https://cdn.jsdelivr.net/npm/element-plus@2.3.1/dist/index.min.css",
            "https://cdn.jsdelivr.net/npm/element-plus@2.3.1/theme-chalk/dark/css-vars.css",
          ],
        },
        {
          name: "@element-plus/icons-vue",
          path: "https://cdn.jsdelivr.net/npm/@element-plus/icons-vue@2.1.0/dist/index.min.js",
        },
        {
          name: "vue",
          path: "https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.esm-browser.js",
        },
        {
          name: "vue-router",
          path: "https://cdn.jsdelivr.net/npm/vue-router@4.2.4/dist/vue-router.esm-browser.js",
        },
        {
          name: "lodash-es",
          path: "https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/+esm",
        },
        {
          name: "dayjs",
          path: "https://cdn.jsdelivr.net/npm/dayjs@1.11.8/+esm",
        },
        {
          name: "@vue/devtools-api",
          path: "https://cdn.jsdelivr.net/npm/@vue/devtools-api@6.5.0/+esm",
        },
      ],
    }),
  ],
  build: {
    sourcemap: true,
  },
});
