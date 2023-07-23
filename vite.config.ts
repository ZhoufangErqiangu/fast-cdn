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
    },
  },
});
