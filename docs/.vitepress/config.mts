import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'RzUI',
  description: 'vue3 + vite 组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/quickstart' },
      { text: '组件', link: '/components/button' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [{ text: '快速使用', link: '/guide/quickstart' }]
      },
      {
        text: '基础组件',
        items: [{ text: 'Button', link: '/components/button' }]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/wb1128/rz-ui' }]
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  vite: {
    // plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  }
})
