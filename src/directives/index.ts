import {Directive, DirectiveBinding} from "vue"

// 自动聚焦
export const useFocus: Directive = {
  mounted: async (el, binding) => {
    el.querySelector("input").focus()
  }
}

// 防抖
export const useDebounce: Directive = {
  mounted(el, binding: DirectiveBinding) {
    const time = binding.value?.time || 1000
    const fn = binding.value?.fn || null
    el.timer = null
    el.addEventListener("click", () => {
      if (el.timer !== null) {
        clearTimeout(el.timer)
        el.timer = null
      }
      el.timer = setTimeout(() => {
        fn && fn()
      }, time)
    })
  }
}

// 节流
export const uesThrottle: Directive = {
  mounted(el, binding: DirectiveBinding) {
    const time = binding.value?.time || 1000
    el.timer = null
    el.addEventListener("click", () => {
      el.disabled = true
      if (el.timer !== null) {
        clearTimeout(el.timer)
        el.timer = null
        el.disabled = true
      }
      el.timer = setTimeout(() => {
        el.disabled = false
      }, time)
    })
  }
}
