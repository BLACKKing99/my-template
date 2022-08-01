<template>
  <div class="flex items-center">
    <el-tag
      v-for="item in menuStore.historyMenu"
      :key="item.name"
      :type="currentPath === item.name?'':'info'"
      effect="plain"
      class="min-w-[50px] mr-2 cursor-pointer"
      closable
      @click="handleTabClick(item)"
      @close="handleTabDel(item)"
    >
      {{ item.title }}
    </el-tag>
  </div>
</template>

<script lang='ts' setup>
import useStore from '@/store'
import { IHistoryMenu } from '@/types/store.js'

const router = useRouter()

const menuStore = useStore.useMenuStore()

// 当前路径
const currentPath = computed(() => {
  return router.currentRoute.value.name
})

// tab点击
const handleTabClick = (value:IHistoryMenu) => {
  router.push({
    name: value.name
  })
}

// tab 删除
const handleTabDel = (value:IHistoryMenu) => {
  menuStore.delHistoryMenu(value)
}
</script>

<style scoped lang='scss'>

</style>
