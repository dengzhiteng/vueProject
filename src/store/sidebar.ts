import { ref } from "vue"
import { defineStore } from "pinia"
export const useSidebarStore = defineStore(
  "sidebar",
  () => {
    const isCollapse = ref(false)

    const setCollapse = () => {
      isCollapse.value = !isCollapse.value
    }

    return { isCollapse, setCollapse }
  },
  {
    persist: true
  }
)
