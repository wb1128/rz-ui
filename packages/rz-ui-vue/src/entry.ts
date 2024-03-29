import { App } from 'vue'
import { Button } from './Button'
import 'uno.css'

// 单独导出组件
export { Button }

// 编写一个插件实现install方法
export default {
  install(app: App) {
    // 注册组件
    app.component(Button.name, Button)
  }
}
