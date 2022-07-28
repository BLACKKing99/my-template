import { defineStore } from 'pinia'
import route from '@/router/index'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menus: getMenus()
  })
})

const getMenus = () => {
  const routes = route.getRoutes().filter(item => item.meta.isMenu && item.children.length)
  routes.forEach(item => {
    item.children = item.children.filter(value => value.meta?.isMenu)
  })
  return routes
}
