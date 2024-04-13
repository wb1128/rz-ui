import { defineConfig } from "vitepress";
import {
  demoblockPlugin,
  demoblockVitePlugin,
} from "vitepress-theme-demoblock";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RzUI",
  description: "vue3 + vite 组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/quickstart" },
      { text: "组件", link: "/components/button" },
    ],

    sidebar: [
      {
        text: "基础",
        items: [{ text: "快速使用", link: "/guide/quickstart" }],
      },
      {
        text: "基础组件",
        items: [{ text: "Button", link: "/components/button" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/wb1128/rz-ui" }],
  },
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin);
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },
});
