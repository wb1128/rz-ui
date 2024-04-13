import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import './styles/index.css'
import Button from './components/Button/Button.vue'
import Icon from './components/Icon/Icon.vue'

library.add(fas)
const RzUI = {
  install(app: any) {
    // 注册组件
    app.component(Button.name, Button)
    app.component(Button.name, Icon)
  }
}
// 单独导出组件
export { Button }

// 编写一个插件实现install方法
export default RzUI

createApp(App).mount('#app')
