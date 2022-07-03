import { RouteRecordRaw } from 'vue-router'
import parseEnv from '@/util/parseEnv'

// 获取类似的路由
// {
//     path:'',
//     component:'',
//     name:'',
//     children:[]
// }
const layoutRoutes:RouteRecordRaw[] = []

export default parseEnv.VITE_APP_AUTOLOAD ? layoutRoutes : [] as RouteRecordRaw[]

// 获取父路由的基本信息
const layout = import.meta.globEager('../components/layout/*.vue')
// 获取子路由的基本信息
const childLayout = import.meta.globEager('../components/layout/views/**/*.vue')

Object.entries(layout).forEach(([file, module]) => {
  const route = getRouteByModule(file, module, false) as RouteRecordRaw
  route.children = getChildrenRoute(route as RouteRecordRaw)
  layoutRoutes.push(route as RouteRecordRaw)
})

// 字符串拆分
// console.log(file.split('/').pop()?.split('.')[0])
// 正则

// 替换 replace
// 处理父路由的基本信息
function getRouteByModule (file:string, module:{[key: string]: any}, children:boolean):RouteRecordRaw | undefined {
  const name = file.split('/').pop()?.split('.')[0]
  if (name) {
    if (children) {
      const routes = {
        path: `${name}`,
        component: module.default,
        name
      } as RouteRecordRaw
      return Object.assign(routes, module.default?.route)
    } else {
      const routes = {
        path: `/${name}`,
        component: module.default,
        name
      } as RouteRecordRaw
      return Object.assign(routes, module.default?.route)
    }
  }
}

// 处理每一级父路由中的子路由
function getChildrenRoute (route:RouteRecordRaw) {
  const childrenRoute:RouteRecordRaw[] = []
  Object.entries(childLayout).forEach(([file, module]) => {
    if (file.includes(`../components/layout/views/${route.name as string}`)) {
      const route = getRouteByModule(file, module, true)
      childrenRoute.push(route as RouteRecordRaw)
    }
  })
  return childrenRoute
}
