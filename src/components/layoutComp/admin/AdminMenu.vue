<template>
  <el-menu
    default-active="2"
    class=" admin-menu"
  >
    <el-sub-menu index="1">
      <template #title>
        <i class="iconfont icon-wode" />
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">
          <i class="iconfont icon-connection" />
          <span>item one</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang='ts' setup>
</script>

<style scoped lang='scss'>
.admin-menu{
  @apply w-full border-r-0;
  ::v-deep(.el-sub-menu__title){
    height: 40px;
    line-height: 40px;
    @apply font-bold text-slate-500;
    span{
      flex: 1;
      padding-left: 10px;
    }
  }
  ::v-deep(.el-menu-item-group__title){
    padding: 0;
  }
  ::v-deep(.el-menu-item){
    height: 40px;
    line-height: 40px;
    padding-left: 20px !important;
    @apply text-slate-500;
    span{
      flex: 1;
      padding-left: 10px;
    }
  }
  .is-active{
    color: var(--el-menu-active-color);
  }
}
</style>
