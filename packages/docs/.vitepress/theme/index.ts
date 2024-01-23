import DefaultTheme from "vitepress/theme";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import RzUI from "rz-ui-vue";
import "uno.css";
import "rz-ui-vue/dist/entry.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component("Demo", Demo);
    ctx.app.component("DemoBlock", DemoBlock);
    ctx.app.use(RzUI);
  },
};
