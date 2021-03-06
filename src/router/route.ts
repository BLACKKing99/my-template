import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home/Home.vue'),
    meta: { isAuth: true }
  }
]
