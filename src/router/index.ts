import { createRouter, createWebHistory } from 'vue-router'
import { App } from 'vue'
// 导入不需要动态创建的路由
import { routes } from './route'
// 动态创建的路由  动态创建的路由必须要在规定的文件夹里面创建才能生效，否则无法创建动态路由
import autoLoadRoute from './auto'
import guard from './guard'
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoLoadRoute]
})

export const setupRouter = (app: App) => {
  guard(router)
  // 将路由挂载到VUE上
  app.use(router)
}

export default router
