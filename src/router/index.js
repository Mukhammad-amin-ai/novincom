import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home-component.vue";
import loginVue from "@/views/pages/login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sign_up",
      name: "sign_up",
      component: loginVue,
    },
    {
      path: "/product/default/:slug",
      name: "product show",
      component: () => import("@/views/product/centered/_slug.vue"),
    },
  ],
});

export default router;
