<script setup lang="ts">
import HeaderBar from "./components/header/index.vue"
import SlideBar from "./components/SlideBar.vue"
import TabsBar from "./components/TabsBar.vue"
import { useSidebarStore } from "@/store/sidebar"
const sidebarStore = useSidebarStore()
</script>

<template>
  <div class="common-layout">
    <header-bar />
    <el-container class="content">
      <el-aside :style="sidebarStore.isCollapse ? 'width:64px' : 'width:200px'">
        <slide-bar />
      </el-aside>
      <el-main>
        <tabs-bar />
        <div class="mt-2">
          <router-view />
        </div>
      </el-main>
    </el-container>
    <app-footer />
  </div>
</template>

<style scoped lang="scss">
.content {
  min-height: calc(100vh - 50px);
  background-color: #f1f1f1;
}
</style>
