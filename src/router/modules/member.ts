import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/member',
  component: () => import('@/components/layout/member.vue'),
  name: 'member',
  children: [
    {
      path: 'email',
      name: 'member.email',
      component: () => import('@/components/layout/views/member/email.vue')
    }
  ]
} as RouteRecordRaw
