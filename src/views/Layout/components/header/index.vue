<script lang="ts" setup>
import avatar from "@/assets/images/avatar.jpg"
import { ArrowDown } from "@element-plus/icons-vue"
import { useUserStore } from "@/store/user"
import { useSidebarStore } from "@/store/sidebar"
import { Expand, Fold } from "@element-plus/icons-vue"
import { useRouter } from "vue-router"
const router = useRouter()
const sidebarStore = useSidebarStore()
const userStore = useUserStore()
const { VITE_APP_TITLE } = import.meta.env
const onCommand = (command: string) => {
  if (command === "loginout") {
    userStore.userLoginOut()
    router.push("/login")
  }
  if (command === "profile") {
  }
}
const onCollapse = () => {
  sidebarStore.setCollapse()
}
</script>
<template>
  <div class="header-bar flex justify-between text-white">
    <div class="logo">
      {{ VITE_APP_TITLE }}
      <el-icon class="cursor-pointer mt-5 ml-5" @click="onCollapse">
        <component :is="sidebarStore.isCollapse ? Fold : Expand"></component>
      </el-icon>
    </div>
    <div>center</div>
    <div class="avatar">
      <el-avatar class="mb-2" :size="30" :src="avatar" />
      <el-dropdown class="ml-2" trigger="click" @command="onCommand">
        <span class="flex items-center cursor-pointer">
          <el-icon class="el-icon--right">
            <ArrowDown color="#fff" />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="profile">个人中心</el-dropdown-item>
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 200px;
  padding-right: 20px;
}
.header-bar {
  height: 50px;
  line-height: 50px;
  background: #000;
  padding: 0 10px;
}
.el-icon--right,
.avatar {
  padding-top: 10px;
}
</style>
