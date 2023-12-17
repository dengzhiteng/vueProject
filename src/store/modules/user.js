import { login, logout } from '@/api/user';
const user = {
  state: () => ({
    userInfo: {},
    isLogin: false,
    userRoutes: []
  }),
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    setIsLogin (state, isLogin) {
      state.isLogin = isLogin
    },
    setUserRoutes (state, routes) {
      state.userRoutes = routes
    }
  },
  actions: {
    login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        login(data).then(res => {
          commit('setUserInfo', res.data);
          commit('setIsLogin', true);
          resolve(res.data);
        })
      })
    },
    logOut ({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(res => {
          commit('setUserInfo', {})
          commit('setUserRoutes', []);
          commit('setIsLogin', false);
          resolve(res);
        })
      })
    }
  },
  getters: {
    userRoutes: state => state.userRoutes,
    userInfo: state => state.userInfo,
    isLogin: state => state.isLogin
  }
}
export default user