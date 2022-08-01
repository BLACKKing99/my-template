import { defineStore } from 'pinia'
import route from '@/router/index'
import { IHistoryMenu } from '@/types/store'
import { localCatch } from '@/util'

const catchHistoryMenu = (localCatch.getItem('historyMenu').data || []) as IHistoryMenu[]

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menus: getMenus(),
    historyMenu: catchHistoryMenu as IHistoryMenu[],
    navMenu: getNavMenu()
  }),
  actions: {
    addHistoryMenu (route:IHistoryMenu) {
      const index = this.historyMenu.findIndex(item => item.name === route.name)
      if (index === -1) {
        this.historyMenu.push(route)
      }

      localCatch.setItem('historyMenu', this.historyMenu)
    },
    delHistoryMenu (router:IHistoryMenu) {
      const index = this.historyMenu.findIndex(item => item.name === router.name)
      this.historyMenu.splice(index, 1)
      // 删除之后 回到上一个元素
      if (this.historyMenu.length === 0) {
        route.push({
          name: 'admin'
        })
      }
      if (index - 1 >= 0) {
        route.push({
          name: this.historyMenu[index - 1].name
        })
      } else {
        route.push({
          name: this.historyMenu[index].name
        })
      }
      localCatch.setItem('historyMenu', this.historyMenu)
    }
  }
})

const getMenus = () => {
  const routes = route.getRoutes().filter(item => item.meta.isMenu && item.children.length)
  routes.forEach(item => {
    item.children = item.children.filter(value => value.meta?.isMenu)
  })
  return routes
}

const getNavMenu = () => {
  console.log(route.options)
}
