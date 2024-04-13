import fs from 'fs-extra'
import path from 'path'
import { config } from '../vite.config.mts'
import { generateDTS } from './type'
import { build, defineConfig, UserConfig } from 'vite'
// import packageJson from '../package.json'
const buildAll = async () => {
  // 全量打包
  await build(
    defineConfig({
      ...config,
      configFile: false
    } as UserConfig)
  )

  const baseOutDir = config.build.outDir
  // 复制 Package.json 文件
  const packageJson = require('../package.json')
  packageJson.main = 'rz-ui.umd.js'
  packageJson.module = 'rz-ui.mjs'
  packageJson.types = 'rz-ui.d.ts'
  fs.outputFile(path.resolve(baseOutDir, `package.json`), JSON.stringify(packageJson, null, 2))

  // 拷贝 README.md文件
  fs.copyFileSync(path.resolve('./README.md'), path.resolve(baseOutDir + '/README.md'))

  // 生成配置DTS配置文件入口
  generateDTS(path.resolve(config.build.outDir, `rz-ui.mjs`))

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
