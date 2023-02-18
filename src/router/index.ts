import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: () => import("@/pages/index.vue"),
    meta: {
      title: "首页",
    },
    children: [],
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
