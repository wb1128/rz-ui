/// <reference types="vitest" />
import { UserConfig, defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

export const config = {
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    minify: 'esbuild',
    sourcemap: true, // source文件
    brotliSize: true, // 压缩大小报告
    cssCodeSplit: true, // 启用/禁用 CSS代码拆分
    lib: {
      entry: './src/entry.ts',
      name: 'RzUI',
      fileName: 'rz-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife']
    },
    outDir: './dist'
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outDir: './dist/types',
      insertTypesEntry: false, // 插入TS 入口
      copyDtsFiles: true // 是否将源码里的 .d.ts 文件复制到 outputDir
    })
  ],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件
    testTransformMode: {
      web: ['.jsx', '.tsx']
    },
    coverage: {
      provider: 'istanbul', // or 'c8',
      reporter: ['text', 'json', 'html']
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig(config as UserConfig)
