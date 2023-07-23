import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [];

const base = "/";
const router = createRouter({
  history: createWebHashHistory(base),
  routes,
});

router.beforeEach((to, from) => {
  // 避免无限重定向
  if (to.name === from.name) return false;
});

export default router;
