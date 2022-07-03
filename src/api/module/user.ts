import http from '@/plugins/axios'
import { User } from '../types/user'

export const getUserInfo = async () => {
  return http.request<User>({
    url: 'get'
  })
}
