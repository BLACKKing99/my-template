import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/member',
  component: () => import('@/components/layout/member.vue'),
  name: 'member',
  meta: {
    isAuth: true,
    isMenu: true,
    menuTitle: '盟友'
  },
  children: [
    {
      path: 'email',
      name: 'member.email',
      meta: {
        isAuth: true,
        isMenu: true,
        menuTitle: '邮箱'
      },
      component: () => import('@/components/layout/views/member/email.vue')
    }
  ]
} as RouteRecordRaw
