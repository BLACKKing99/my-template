<template>
  <input
    type="text"
    placeholder="请输入"
    class="l-input"
  >
</template>

<script lang='ts' setup>
</script>

<style scoped lang='scss'>
.l-input{
    @apply w-full border-[1px] placeholder:text-sm px-1 py-1 duration-300 outline-none text-slate-500 rounded-sm focus:outline-offset-1 focus:outline-teal-400 focus:border-white
}
</style>
