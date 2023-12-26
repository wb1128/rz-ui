import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "RzUI",
      fileName: "rz-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
  plugins: [
    vueJsx(),
    // 添加UnoCSS插件
    Unocss(),
  ],
});
