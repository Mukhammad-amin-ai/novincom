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
      path: "/login",
      name: "login",
      component: loginVue,
    }
  ],
});

export default router;
