<template>
  <div class="flex bg-slate-400 w-full h-screen items-center justify-center p-5">
    <div class="w-[750px] bg-white grid md:grid-cols-2 -mt-48 h-[450px] rounded-md">
      <div class="p-5 flex items-center flex-col justify-center -translate-y-20">
        <h2 class="text-lg mb-5">
          登录
        </h2>
        <l-form
          :form-layout="formLayout"
          :rules="rules"
          :submit="submit"
        />
      </div>
      <div class="hidden md:block overflow-hidden">
        <img
          src="@/assets/img/login.jpg"
          class="object-cover"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IFormLayout } from '@/components/autocomps/types/LForm'
import { login } from '@/api/module/user'
import { localCatch } from '@/util'

const router = useRouter()

const formLayout:IFormLayout[] = [
  {
    label: '账号',
    name: 'account',
    value: '11759',
    type: 'input',
    placeholder: '请输入账号',
    trigger: 'blur'
  },
  {
    label: '密码',
    name: 'password',
    value: '123456',
    type: 'input',
    placeholder: '请输入密码',
    trigger: 'blur'
  }
]
const rules = {
  account: { required: true },
  password: { required: true, min: 3 }
}
interface ISubmitValue {
  account:string,
  password:string
}
const submit = async (value:ISubmitValue) => {
  const res = await login(value)
  localCatch.setItem('token', res.data.token, 36000)
  router.push({
    path: '/'
  })
}
</script>
<script lang="ts">
export default {
  route: { name: 'login' }
}
</script>
<style scoped lang="scss">
</style>
