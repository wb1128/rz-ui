import { createApp } from 'vue'
import Button from './components/Button/Button.vue'
import App from './App.vue'

import './styles/index.css'

const RzUI = {
  install(app: any) {
    // 注册组件
    app.component(Button.name, Button)
  }
}
// 单独导出组件
export { Button }

// 编写一个插件实现install方法
export default RzUI

createApp(App).mount('#app')
