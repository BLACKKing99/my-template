<template>
  <div class="flex bg-slate-400 w-full h-screen items-center justify-center">
    <div class="w-[750px] bg-white grid grid-cols-2 -mt-48">
      <div class="p-5 flex items-center flex-col justify-center -translate-y-20">
        <h2 class="text-lg mb-5">
          登录
        </h2>
        <l-input
          class="account mt-5"
          placeholder="请输入账号"
        />
        <l-input class="account mt-5" />
        <l-button class="mt-5" />
      </div>
      <div class="h-[450px] overflow-hidden">
        <img
          src="@/assets/img/login.jpg"
          class="object-cover"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
</style>
