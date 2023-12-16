<script setup lang="ts">
import { useRoute } from "vue-router"
import { useSidebarStore } from "@/store/sidebar"
import { useUserStore } from "@/store/user"
const route = useRoute()
const userStore = useUserStore()
const sidebarStore = useSidebarStore()
</script>
<template>
  <div class="menu" :style="sidebarStore.isCollapse ? 'width:64px' : 'width:200px'">
    <el-menu
      router
      unique-opened
      class="el-menu-vertical"
      :collapse="sidebarStore.isCollapse"
      background-color="#000"
      text-color="#fff"
      :default-active="route.path"
    >
      <el-sub-menu v-for="routes in userStore.routes" :index="routes.path">
        <template #title>
          <el-icon>
            <component :is="routes.meta.icon" />
          </el-icon>
          <span>{{ routes.meta.title }}</span>
        </template>
        <el-menu-item-group v-for="routeItem in routes.children">
          <el-menu-item :index="routeItem.path">
            {{ routeItem.meta.title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<style lang="scss">
.menu {
  color: #fff;
  background: #000;
  height: calc(100vh - 50px);
}
.el-menu {
  border: 0;
}
.el-menu-vertical:not(.el-menu--collapse) {
  height: calc(100vh - 50px);
}
</style>
