// 路由守卫

import { localCatch } from '@/util'
import { RouteLocationNormalized, Router } from 'vue-router'
import useSotre from '@/store'

class Guard {
  private router:Router
  constructor (router:Router) {
    this.router = router
  }

  run () {
    this.router.beforeEach((to, from) => {
      useSotre.useMenuStore().addHistoryMenu({
        name: to.name as string,
        path: to.fullPath,
        title: to.meta.menuTitle
      })
      const data = localCatch.getItem('token')
      if (this.isLogin(to, data?.data) === false) return { name: 'login' }
    })
  }

  isLogin (route:RouteLocationNormalized, token?:string) {
    if (route.meta.isAuth && !token) {
      return false
    }
  }
}

export default (router:Router) => {
  new Guard(router).run()
}
