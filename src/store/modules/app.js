const app = {
  state: () => ({
    isCollapse: false
  }),
  mutations: {
    increment (state) {
      !state.isCollapse
    }
  },
  getters: {
    isCollapse: state => state.isCollapse
  }
}
export default app