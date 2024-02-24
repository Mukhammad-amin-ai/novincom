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
      path: "/product/default",
      name: "product default",
      component: () => import("@/views/product/centered/_slug.vue"),
    },
    {
      path: "/shop/sidebar/3cols/:category",
      name: "category show",
      component: () => import("@/views/shop/sidebar/_type.vue"),
    },
    {
      path: "/shop/sidebar/4cols",
      name: "category show with 4cols",
      component: () => import("@/views/shop/sidebar/_type.vue"),
    },
    {
      path: "/shop/sidebar/3cols",
      name: "category show with 3cols",
      component: () => import("@/views/shop/sidebar/_type.vue"),
    },
    {
      path: "/shop/sidebar/2cols",
      name: "category show with 2cols",
      component: () => import("@/views/shop/sidebar/_type.vue"),
    },
    {
      path: "/shop/sidebar/list",
      name: "category show with list",
      component: () => import("@/views/shop/sidebar/_type.vue"),
    },
    {
      path: "/shop/market",
      name: "category show market",
      component: () => import("@/views/shop/market.vue"),
    },
    {
      path: "/shop/nosidebar/boxed",
      name: "category show boxed",
      component: () => import("@/views/shop/nosidebar/_type.vue"),
    },
    {
      path: "/shop/nosidebar/fullwidth",
      name: "category show fullwidth",
      component: () => import("@/views/shop/nosidebar/_type.vue"),
    },
    // {
    //   path: "/shop/nosidebar/fullwidth",
    //   name: "category show fullwidth",
    //   component: () => import("@/views/shop/category/fullwidth.vue"),
    // },
    {
      path: "/shop/fullwidth",
      name: "category fullwidth",
      component: () => import("@/views/shop/category/fullwidth.vue"),
    },
    {
      path: "/shop/category/fullwidth",
      name: "shop category fullwidth",
      component: () => import("@/views/shop/category/fullwidth.vue"),
    },
    {
      path: "/shop/category/boxed",
      name: "shop category boxed",
      component: () => import("@/views/shop/category/boxed.vue"),
    },
    {
      path: "/shop/dashboard",
      name: "shop dashboard",
      component: () => import("@/views/shop/dashboard.vue"),
    },
    {
      path: "/shop/cart",
      name: "category show cart",
      component: () => import("@/views/shop/cart.vue"),
    },
    {
      path: "/shop/wishlist",
      name: "category show wishlist",
      component: () => import("@/views/shop/wishlist.vue"),
    },
    {
      path: "/shop/checkout",
      name: "category show checkout",
      component: () => import("@/views/shop/checkout.vue"),
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
    },
  ],
});

export default router;
