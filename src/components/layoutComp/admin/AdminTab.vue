<template>
  <div class="flex items-center">
    <el-tag
      v-for="item in 4"
      :key="item"
      type="info"
      effect="plain"
      class="min-w-[50px] mr-2 cursor-pointer"
    >
      {{ item }}
    </el-tag>
  </div>
</template>

<script lang='ts' setup>
</script>

<style scoped lang='scss'>

</style>
