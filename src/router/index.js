import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home-component.vue";
import loginVue from "@/views/pages/login.vue";
import flyghtTicketsVue from "@/views/flyght-tickets.vue";
import operationVue from "@/views/operation.vue";

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
      name: "sign up",
      component: loginVue,
    },
    {
      path: "/product/default/:slug",
      name: "product show",
      component: () => import("@/views/product/centered/_slug.vue"),
    },
    {
      path: "/shop/sidebar/3cols/:category",
      name: "category show",
      component: () => import("@/views/shop/sidebar/_type.vue"),
    },
    {
      path: "/shop/sidebar/3cols",
      name: "category show with query",
      component: () => import("@/views/shop/sidebar/_type.vue"),
    },
    {
      path: "/tickets_search_results",
      name: "tickets search results",
      component: loginVue,
    },
    {
      path: "/flight-tickets",
      name: "flight tickets",
      component: flyghtTicketsVue,
    },
    {
      path: "/catalog",
      name: "catalog",
      component: loginVue,
    },
    {
      path: "/operation",
      name: "operation",
      component: operationVue,
    }

  ],
});

export default router;
