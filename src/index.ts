import { App } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button/Button.vue'
import Icon from './components/Icon/Icon.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Message, { createMessage, closeAll as closeMessageAll } from './components/Message/index'

import './styles/index.css'

library.add(fas)

const components = [Button, Collapse, CollapseItem, Dropdown, Icon, Message, Tooltip]

const install = (app: App) => {
  components.forEach((compoment) => {
    app.component(compoment.name, compoment)
  })
}

export { install, Button, Collapse, CollapseItem, Dropdown, Icon, Message, Tooltip, createMessage, closeMessageAll }

export default {
  install
}
