import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
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
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      external: [
        "vue",
        "vue-router",
        "element-plus",
        "@element-plus/icons-vue",
        "@fast-crud/ui-interface",
        "@fast-crud/ui-element",
        "@fast-crud/fast-crud",
      ],
      output: {
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
          "element-plus": "ElementPlus",
          "@element-plus/icons-vue": "ElementPlusIconsVue",
          "@fast-crud/ui-interface": "FsUiInterface",
          "@fast-crud/ui-element": "FsUiElement",
          "@fast-crud/fast-crud": "FastCrud",
        },
        manualChunks: {
          // "fast-curd": [
          //   "@fast-crud/ui-interface",
          //   "@fast-crud/ui-element",
          //   "@fast-crud/fast-crud",
          // ],
          // other: ["lodash-es"],
        },
      },
    },
  },
});
