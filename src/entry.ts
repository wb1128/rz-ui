import { App } from 'vue'
import RzButton from './button'

// 单独导出组件
export { RzButton }

// 编写一个插件实现install方法
export default {

  install(app: App) {
    // 注册组件
    app.component(RzButton.name, RzButton)
  }
}