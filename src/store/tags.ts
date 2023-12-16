import { defineStore } from "pinia"
interface routeItem {
  title: String
  path: String
}

export const useTagsStore = defineStore(
  "tags",
  () => {
    const show = computed(() => {
      return list.value.length !== 0
    })

    const list = ref<routeItem[]>([])
    const setTagsItem = (item: routeItem) => {
      list.value.push(item)
    }
    const clearTags = () => {
      list.value = []
    }
    const closeTagsOther = (data: routeItem[]) => {
      list.value = data
    }
    const delTagsItem = (index: number) => {
      list.value.splice(index, 1)
    }
    return { show, list, setTagsItem, delTagsItem, clearTags, closeTagsOther }
  },
  {
    persist: true
  }
)
