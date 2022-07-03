import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupPlugins } from './plugins'
import './styles/index.scss'
async function mountedApp () {
  const app = createApp(App)
  setupPlugins(app)
  await setupRouter(app)
  app.mount('#app')
}

mountedApp()
