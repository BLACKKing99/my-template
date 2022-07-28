<template>
  <el-menu
    :default-active="currentPath"
    class=" admin-menu"
    router
  >
    <template
      v-for="(menu,index) in menuStore.menus"
      :key="index"
    >
      <el-sub-menu
        :index="(menu.path as string)"
      >
        <template #title>
          <div class="menu-icon">
            <i
              v-if="menu.meta?.menuIcon"
              class="iconfont"
              :class="menu.meta.menuIcon"
            />
          </div>
          <span>{{ menu.meta.menuTitle }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="`${menu.path}/${cMenu.path}`"
            v-for="(cMenu,cindex) in menu.children"
            :key="cindex"
            @click="handleMenuClick(cMenu)"
          >
            <div class="cmenu-icon">
              <i
                v-if="cMenu.meta?.menuIcon"
                class="iconfont"
                :class="menu.meta.menuIcon"
              />
            </div>
            <span>{{ cMenu.meta?.menuTitle }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang='ts' setup>
import { useMenuStore } from '@/store/module/menu'
import { RouteRecordNormalized } from 'vue-router'

const menuStore = useMenuStore()

const router = useRouter()

// 获取当前路由，刷新的时候菜单正确定位
const currentPath = ref<string>(router.currentRoute.value.fullPath || menuStore.menus[0].path)

const handleMenuClick = (menu:RouteRecordNormalized) => {

}
</script>

<style scoped lang='scss'>
.admin-menu{
  @apply w-full border-r-0;
  ::v-deep(.el-sub-menu__title){
    height: 40px;
    line-height: 40px;
    @apply font-bold text-slate-500;
    .menu-icon{
      height: 100%;
      width: 16px;
    }
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
    .cmenu-icon{
      width: 16px;
      height: 100%;
    }
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
