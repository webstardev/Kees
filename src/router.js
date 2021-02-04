import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "info",
    component: () => import("@/pages/info/info-page"),
  },
];

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
