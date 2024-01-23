import fs from 'fs-extra'
import path from 'path'
import { config } from '../vite.config'
import { build, defineConfig, UserConfig } from 'vite'

const buildAll = async () => {
  // 全量打包
  await build(
    defineConfig({
      ...config,
      configFile: false
    } as UserConfig)
  )
  const srcDir = path.resolve(__dirname, '../src/')
  const componentsDir = fs.readdirSync(srcDir).filter((name) => {
    // 只要目录不要文件，且里面包含index.ts
    const componentDir = path.resolve(srcDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })
  for (const name of componentsDir) {
    const outDir = path.resolve(config.build.outDir, name)
    const custom = {
      lib: {
        entry: path.resolve(srcDir, name),
        name, // 导出模块名
        fileName: `index`,
        formats: [`es`, `umd`]
      },
      outDir
    }

    Object.assign(config.build, custom)
    await build(defineConfig({ ...config, configFile: false } as UserConfig))

    fs.outputFile(
      path.resolve(outDir, `package.json`),
      `{
          "name": "rz-ui-vue/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js"
        }`,
      `utf-8`
    )
  }
}

buildAll()
