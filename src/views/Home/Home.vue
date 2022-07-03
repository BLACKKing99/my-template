<template>
  <div class="flex flex-nowra bg-red-300">
    <h1 class="text-3xl font-bold underline">
      Hello world!
      <el-input />
    </h1>
  </div>
</template>

<script lang="ts" setup>
import { getUserInfo } from '@/api/module/user'

const userInfo = async () => {
  const res = await getUserInfo()
  console.log(res.data.name)
}

onMounted(() => {
  userInfo()
})
</script>

<style scoped lang="scss">
</style>
