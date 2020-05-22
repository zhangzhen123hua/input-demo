import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "input",
    component: () => import("../views/input.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
