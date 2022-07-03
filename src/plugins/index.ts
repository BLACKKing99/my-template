import { App } from 'vue'
import { setupElementPlus } from './element'
import { setupTailWindCss } from './tailwindcss'
import { camelCase } from 'lodash'

export const setupPlugins = (app:App) => {
  setupTailWindCss()
  // 注册elementplus组件库函数
  setupElementPlus(app)
  autoInstallComps(app)
}

// 自动注册全局组件函数
const autoInstallComps = (app:App) => {
  const comps = import.meta.globEager('../components/autocomps/*.vue')
  Object.entries(comps).forEach(([path, comp]) => {
    const name = path.split('/').pop()?.split('.').shift()
    app.component(camelCase(name), comp.default)
  })
}
