import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  }, {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    meta: {
      title: '登录',
    },
    children: [],
  }, {
    component: () => import('@/pages/fallback/not-found.vue'),
    meta: {
      title: '404',
    },
    path: '/:path(.*)*',
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
