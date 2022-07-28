import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/admin',
  component: () => import('@/components/layout/admin.vue'),
  name: 'admin',
  meta: {
    isAuth: true,
    isMenu: true,
    menuTitle: '首页'
  },
  children: [
    {
      path: 'user',
      name: 'admin.user',
      meta: {
        isAuth: true,
        isMenu: false,
        menuTitle: '主页'
      },
      component: () => import('@/components/layout/views/admin/user.vue')
    },
    {
      path: 'account',
      name: 'account.user',
      meta: {
        isAuth: true,
        isMenu: true,
        menuTitle: '用户'
      },
      component: () => import('@/components/layout/views/admin/account.vue')
    },
    {
      path: 'set',
      name: 'set.user',
      meta: {
        isAuth: true,
        isMenu: true,
        menuTitle: '设置'
      },
      component: () => import('@/components/layout/views/admin/set.vue')
    }
  ]
} as RouteRecordRaw
