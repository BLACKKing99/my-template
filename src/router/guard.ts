// 路由守卫

import { localCatch } from '@/util'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  private router:Router
  constructor (router:Router) {
    this.router = router
  }

  run () {
    this.router.beforeEach((to, from) => {
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
