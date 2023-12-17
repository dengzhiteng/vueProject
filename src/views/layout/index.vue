<template>
  <div class="layout">
    <app-header></app-header>
    <el-container class="container">
      <app-aside></app-aside>
      <el-main class="main">
        <app-nav></app-nav>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppNav from './AppNav.vue'
import AppAside from './AppAside.vue'
export default {
  name: 'layout',
  components: {
    AppHeader,
    AppNav,
    AppAside,
  },
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
.container {
  height: calc(100vh - 50px);
}
.main {
  padding: 0 5px 5px 0;
}
</style>
