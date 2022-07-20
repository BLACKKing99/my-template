import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import { setupRouter } from './router'
// 引入插件
import { setupPlugins } from './plugins'
// 引入一些公共的scss
import './styles/index.scss'
// 引入字体文件
import './assets/css/index.scss'
async function mountedApp () {
  const app = createApp(App)
  setupPlugins(app)
  await setupRouter(app)
  app.mount('#app')
}

mountedApp()
