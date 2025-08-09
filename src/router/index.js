import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/views/Blog.vue"),
    },
    {
      path: "/blog/:id",
      name: "article",
      component: () => import("@/views/Article.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
    },
  ],
});

export default router;
