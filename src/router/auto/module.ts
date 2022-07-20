import { RouteRecordRaw } from 'vue-router'

const route:RouteRecordRaw[] = []

const routeModule = import.meta.globEager('../modules/**/*.ts')

Object.entries(routeModule).forEach(([key, file]) => {
  route.push(file.default)
})

export default route
