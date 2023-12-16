<script setup lang="ts">
import { useTagsStore } from "@/store/tags"
import { useSidebarStore } from "@/store/sidebar"
import { useRoute, useRouter } from "vue-router"
import { ClickOutside as vClickOutside } from "element-plus"
import { Close, Minus } from "@element-plus/icons-vue"
const route = useRoute()
const router = useRouter()
const tags = useTagsStore()
const sidebarStore = useSidebarStore()

const setTags = (route: any) => {
  const isExist = tags.list.some(item => {
    return item.path === route.fullPath
  })
  if (!isExist) {
    tags.setTagsItem({
      title: route.meta.title,
      path: route.path
    })
  }
}
watch(route, newVal => {
  setTags(route)
})
setTags(route)

const clickTag = (path: string) => {
  router.push(path)
}
const removeTag = (path: string) => {
  const index = tags.list.findIndex(item => item.path === path)
  tags.delTagsItem(index)
  const item = tags.list[index] ? tags.list[index] : tags.list[index - 1]
  if (item) {
    router.push(item.path)
  } else {
    router.push("/")
  }
}

// 右击菜单
const contextmenuShow = ref(false)
const contextmenuPositon = ref({ top: 0, left: 0 })
const currentIndex = ref(0)
const openContext = (e: Event, index: number) => {
  const { top, left } = getParentOffset(e.target)
  contextmenuShow.value = true
  currentIndex.value = index
  contextmenuPositon.value = {
    top: top - 38,
    left: left + e?.target?.clientWidth - (sidebarStore?.collapse ? 64 : 200) - 84
  }
}
const onClickOutside = () => {
  contextmenuShow.value = false
}
// 获取父元素的相对位移
function getParentOffset(el: any) {
  let offset = { top: 0, left: 0 }
  offset.top = el.offsetTop
  offset.left = el.offsetLeft
  if (el.offsetParent != null) {
    let offsetParent = getParentOffset(el.offsetParent)
    offset.top += offsetParent.top
    offset.left += offsetParent.left
  }
  return offset
}

const closeOther = () => {
  const curRoutes = tags.list.filter((item, index) => index === currentIndex.value)
  router.push(curRoutes[0].path as string)
  tags.closeTagsOther(curRoutes)
}

const closeAll = async () => {
  tags.clearTags()
  await router.push("/")
  setTags(route)
}
</script>

<template>
  <div class="mo-tags shadow backdrop-blur-sm bg-white/75" v-if="tags.show">
    <el-scrollbar>
      <div class="flex" v-click-outside="onClickOutside">
        <el-tag
          class="cursor-pointer ml-2 flex-shrink-0"
          v-for="(item, index) in tags.list"
          :key="index"
          :type="route.path === item.path ? '' : 'info'"
          @click="clickTag(item.path)"
          @close="removeTag(item.path)"
          @contextmenu.prevent="openContext($event, index)"
          closable
        >
          {{ item.title }}</el-tag
        >
      </div>
    </el-scrollbar>
    <div
      v-show="contextmenuShow"
      class="fixed flex flex-col px-2 py-1 text-xs leading-8 text-center bg-white rounded shadow-lg"
      :style="{ left: `${contextmenuPositon.left}px`, top: `${contextmenuPositon.top}px` }"
    >
      <div @click="closeOther">
        <el-button :icon="Close" link size="small">关闭其他页签</el-button>
      </div>
      <div class="cursor-default" @click="closeAll">
        <el-button :icon="Minus" link size="small">关闭所有页签</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.el-main {
  padding: 10px;
}
.el-tag:first-child {
  margin-left: 0;
}
.mo-tags {
  height: 30px;
  padding: 2px;
  transition:
    left 0.3s ease-in-out,
    width 0.3s ease-in-out;
  &.tag-collapse {
    left: 64px;
  }
}
</style>
