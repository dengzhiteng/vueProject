<script setup>
import { useRouter, useRoute } from "vue-router"
const second = toRef(60)
const router = useRouter()
const route = useRoute()
const timeer = setInterval(() => {
  if (second.value == 0) {
    clearInterval(timeer)
    onBack()
  } else {
    second.value--
  }
}, 1000)
const onBack = path => {
  path ? router.replace({ path: path }) : router.back()
}
</script>

<template>
  <div class="content">
    <p class="title">403</p>
    <p class="title-desc">抱歉,您没有权限</p>
    <p class="btn">
      <el-button size="large" @click="onBack()"
        >立即返回 <span v-if="second">{{ second }}s </span></el-button
      >
      <el-button type="primary" size="large" @click="onBack('/')">跳转到首页</el-button>
    </p>
  </div>
</template>
<style scoped lang="scss">
.content {
  width: 300px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  text-align: center;

  .title {
    font-size: 120px;
    font-weight: bold;
    color: #dcdcdc;
  }

  .title-desc {
    font-size: 30px;
    color: #409eff;
  }

  .title-en {
    font-size: 18px;
    color: #dcdcdc;
  }

  .btn {
    margin-top: 20px;
  }
}
</style>
