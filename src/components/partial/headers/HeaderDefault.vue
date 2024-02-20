<template>
  <header class="header header-4 header-intro-clearance">
    <div class="header-top">
      <div :class="isFullwidth ? 'container-fluid' : 'container'">
        <div class="header-left">
          <a href="tel:#"> <i class="icon-phone"></i>Call: +0123 456 789 </a>
        </div>
        <div class="header-right">
          <ul class="top-menu">
            <li>
              <a href="#">Links</a>
              <ul>
                <li>
                  <div class="header-dropdown">
                    <a href="#">USD</a>
                    <div class="header-menu">
                      <ul>
                        <li>
                          <a href="#">Eur</a>
                        </li>
                        <li>
                          <a href="#">Usd</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="header-dropdown">
                    <a href="#">English</a>
                    <div class="header-menu">
                      <ul>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">French</a>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#signin-modal" @click.prevent="openSignInModal"
                    >Sign in / Sign up</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="header-middle">
      <div :class="isFullwidth ? 'container-fluid' : 'container'">
        <div class="header-left">
          <button class="mobile-menu-toggler" @click="openMobileMenu">
            <span class="sr-only">Toggle mobile menu</span>
            <i class="icon-bars"></i>
          </button>

          <router-link to="/" class="logo">
            <img
              v-lazy="'./images/logo.png'"
              class="bg-transparent"
              alt="Molla Logo"
              width="105"
              height="27"
            />
          </router-link>
        </div>

        <div class="header-center">
          <header-search></header-search>
        </div>

        <div class="header-right">
          <compare-menu></compare-menu>

          <wishlist-menu></wishlist-menu>

          <cart-menu></cart-menu>
        </div>
      </div>
    </div>

    <sticky-header>
      <div class="header-bottom sticky-header">
        <div :class="isFullwidth ? 'container-fluid' : 'container'">
          <div class="header-left">
            <div class="dropdown category-dropdown">
              <a
                href="javascript:;"
                class="dropdown-toggle"
                title="Browse Categories"
              >
                Browse Categories
                <i class="icon-angle-down"></i>
              </a>

              <div class="dropdown-menu">
                <nav class="side-nav">
                  <ul class="menu-vertical sf-arrows">
                    <li
                      class="item-lead"
                      :class="{
                        active: $route.query.category == 'electronics',
                      }"
                    >
                      <router-link
                        :to="'/shop/sidebar/3cols?category=electronics'"
                        >Electronics</router-link
                      >
                    </li>
                    <li
                      class="item-lead"
                      :class="{ active: $route.query.category == 'gift-idea' }"
                    >
                      <router-link
                        :to="'/shop/sidebar/3cols?category=gift-idea'"
                        >Gift Ideas</router-link
                      >
                    </li>
                    <li :class="{ active: $route.query.category == 'beds' }">
                      <router-link :to="'/shop/sidebar/3cols?category=beds'"
                        >Beds</router-link
                      >
                    </li>
                    <li
                      :class="{ active: $route.query.category == 'lighting' }"
                    >
                      <router-link :to="'/shop/sidebar/3cols?category=lighting'"
                        >Lighting</router-link
                      >
                    </li>
                    <li
                      :class="{
                        active:
                          $route.query.category == 'sofas-and-sleeper-sofas',
                      }"
                    >
                      <router-link
                        :to="'/shop/sidebar/3cols?category=sofas-and-sleeper-sofas'"
                        >Sofas & Sleeper sofas</router-link
                      >
                    </li>
                    <li :class="{ active: $route.query.category == 'storage' }">
                      <router-link :to="'/shop/sidebar/3cols?category=storage'"
                        >Storage</router-link
                      >
                    </li>
                    <li
                      :class="{
                        active:
                          $route.query.category == 'armchairs-and-chaises',
                      }"
                    >
                      <router-link
                        :to="'/shop/sidebar/3cols?category=armchairs-and-chaises'"
                        >Armchairs & Chaises</router-link
                      >
                    </li>
                    <li
                      :class="{ active: $route.query.category == 'decoration' }"
                    >
                      <router-link
                        :to="'/shop/sidebar/3cols?category=decoration'"
                        >Decoration</router-link
                      >
                    </li>
                    <li
                      :class="{
                        active: $route.query.category == 'kitchen-cabinets',
                      }"
                    >
                      <router-link
                        :to="'/shop/sidebar/3cols?category=kitchen-cabinets'"
                        >Kitchen Cabinets</router-link
                      >
                    </li>
                    <li
                      :class="{
                        active: $route.query.category == 'coffee-and-tables',
                      }"
                    >
                      <router-link
                        :to="'/shop/sidebar/3cols?category=coffee-and-tables'"
                        >Coffee & Tables</router-link
                      >
                    </li>
                    <li
                      :class="{ active: $route.query.category == 'furniture' }"
                    >
                      <router-link
                        :to="'/shop/sidebar/3cols?category=furniture'"
                        >Outdoor Furniture</router-link
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div class="header-center">
            <main-menu></main-menu>
          </div>

          <div class="header-right overflow-hidden">
            <i class="la la-lightbulb-o"></i>
            <p class="text-truncate">
              Clearance
              <span class="highlight">&nbsp;Up to 30% Off</span>
            </p>
          </div>
        </div>
      </div>
    </sticky-header>
  </header>
</template>

<script>
// import CartMenu from '../headers/shared/CartMenu.vue';
import CartMenu from "../headers/shared/CartMenu.vue";
import CompareMenu from "../headers/shared/CompareMenu.vue";
import WishlistMenu from "../headers/shared/WishlistMenu.vue";
import MainMenu from "../headers/shared/MainMenu.vue";
import HeaderSearch from "../headers/shared/HeaderSearch.vue";
import StickyHeader from "../../elements/StickyHeader.vue";

export default {
  components: {
    CartMenu,
    CompareMenu,
    WishlistMenu,
    MainMenu,
    HeaderSearch,
    StickyHeader,
  },
  computed: {
    isFullwidth: function () {
      return this.$route.path.includes("fullwidth");
    },
  },
  methods: {
    openSignInModal: function () {
      this.$modal.show(
        () => import("../../elements/modals/SignInModal.vue"),
        {},
        { width: "575", height: "auto", adaptive: true }
      );
    },
    openMobileMenu: function () {
      document.querySelector("body").classList.add("mmenu-active");
    },
  },
};
</script>
