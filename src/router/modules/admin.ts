import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/admin',
  component: () => import('@/components/layout/admin.vue'),
  name: 'admin',
  children: [
    {
      path: 'user',
      name: 'admin.user',
      component: () => import('@/components/layout/views/admin/user.vue')
    },
    {
      path: 'account',
      name: 'account.user',
      component: () => import('@/components/layout/views/admin/account.vue')
    },
    {
      path: 'set',
      name: 'set.user',
      component: () => import('@/components/layout/views/admin/set.vue')
    }
  ]
} as RouteRecordRaw
