<template>
  <div class="h-screen min-h-screen">
    <el-container class="h-screen">
      <el-aside
        width="200px"
        class="flex flex-col items-center py-5"
      >
        <div class="w-[100px]">
          <img
            src="/public/img/logo.jpg"
          >
        </div>
        <div class="flex-1 pt-[10px] w-full">
          <admin-menu />
        </div>
      </el-aside>
      <el-container>
        <el-header class="!h-[90px] !px-[20px] !py-[5px]">
          <div class="w-full h-full shadow flex flex-col pl-4">
            <admin-nav class="flex-1" />
            <admin-tab class="flex-1" />
          </div>
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition name="el-fade-in">
              <component :is="Component" />
            </transition>
          </router-view>
          <!-- <transition name="el-fade-in">
            <router-view />
          </transition> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import AdminMenu from '@/components/layoutComp/admin/AdminMenu.vue'
import AdminTab from '../layoutComp/admin/AdminTab.vue'
import AdminNav from '../layoutComp/admin/AdminNav.vue'
</script>

<style scoped lang='scss'>
</style>
