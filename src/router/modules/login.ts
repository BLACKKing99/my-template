import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/auth',
  component: () => import('@/components/layout/auth.vue'),
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/components/layout/views/auth/login.vue')
    }
  ]
} as RouteRecordRaw
