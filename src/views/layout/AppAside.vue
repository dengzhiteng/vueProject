<template>
  <el-aside :width="isCollapse ? '65px' : '150px'" style="background-color: #f2f2f2">
    <el-menu
      router
      :default-active="$route.path"
      unique-opened
      :collapse="isCollapse"
      text-color="#333"
      active-text-color="#409eff"
      background-color="#f1f1f1"
    >
      <el-submenu v-for="(route1, index1) in routes" :index="route1.path">
        <template slot="title">
          <i :class="route1.meta.icon"></i>
          <span>{{ route1.meta.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="route2 in route1.children" :index="route2.path">
            {{ route2.meta.title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import routes from '@/router/async'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      routes: [],
    }
  },
  computed: {
    ...mapGetters(['isCollapse']),
  },
  created() {
    routes.forEach((route) => {
      route.children.forEach((child) => {
        child.path = route.path + '/' + child.path
      })
    })
    this.routes = routes
  },
}
</script>
