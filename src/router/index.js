import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
import basic from './basic'
import routes from './async'

const router = new VueRouter({
  routes: [...basic, ...routes]
});

export default router;
