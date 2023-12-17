<template>
  <el-row class="app-nav">
    <el-tag
      v-for="tag in historyRoutes"
      :key="tag.name"
      hit
      effect="plain"
      size="small"
      class="mr5"
    >
      {{ tag.name }}
    </el-tag>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      historyRoutes: [],
    }
  },
}
</script>

<style scoped lang="scss">
.app-nav {
  text-align: left;
  background-color: #f2f2f2;
  padding: 5px 5px;
  overflow-x: auto;
  overflow-y: hidden;
  max-height: 45px;
  display: flex;
}
</style>
