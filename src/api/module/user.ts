import http from '@/plugins/axios'
import { IUser, ILoginInfo } from '../types/user'

export const getUserInfo = async () => {
  return http.request<IUser>({
    url: 'get'
  })
}

export const login = (data:ILoginInfo) => {
  return http.request<{
    token:string
  }>({
    url: 'login',
    method: 'POST',
    data
  })
}
