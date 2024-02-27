<template>
  <header class="header header-4 header-intro-clearance">
    <div class="header-top">
      <div :class="isFullwidth ? 'container-fluid' : 'container'">
        <div class="header-left">
          <a href="tell:#">
            <div class="call">
              <img src="../../../assets/newImg/icons/call-icon.svg" alt="">
              Обратиться в банк: +7 800 250-70-07
            </div>
          </a>
        </div>
        <div class="header-right">
          <ul class="top-menu">
            <li>
              <!-- @click.prevent="openSignInModal" -->
              <a href="/sign_up">
                <span class="logIn">
                  <!-- <img src="../../../assets/newImg/icons/logIn-icon.svg" alt="#"> -->
                  Вход / Регистрация
                </span></a>
              <ul>
                <li>
                  <!-- <div class="header-dropdown">
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
                  </div> -->
                </li>
                <!-- <li>
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
                </li> -->
                <!-- @click.prevent="openSignInModal" -->
                <li>
                  <router-link to="/sign_up" class="callhov">
                    <span class="logIn">
                      <!-- <img src="../../../assets/newImg/icons/logIn-icon.svg" alt="#"> -->
                      Вход / Регистрация
                    </span>
                  </router-link>
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
            <!-- <i class="icon-bars"></i> -->
            <img src="../../../assets/newImg/icons/menu.svg" alt="">
          </button>
          <router-link to="/" class="logo">
            <img src="../../../assets/newImg/logotypes/logo.svg" class="bg-transparent" alt="Molla Logo" width="105"
              height="27" />
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
            <div class="dropdown category-dropdown"
              style="border-top-right-radius: .8rem; border-top-left-radius: .8rem;">
              <a href="javascript:;" class="dropdown-toggle" title="Потратить бонусы"
                style="justify-content: space-between; border-top-right-radius: .8rem; border-top-left-radius: .8rem;">
                <div class="drop-custom">
                  <img src="../../../assets/newImg/icons/twotone-menu.svg" alt="">
                  Потратить бонусы
                </div>
                <!-- <i class="icon-angle-down"></i> -->
                <img src="../../../assets/newImg/icons/arrow_down.svg" alt="arrow_down">
              </a>
              <div class="dropdown-menu">
                <nav class="side-nav">
                  <ul class="menu-vertical sf-arrows">
                    <li class="item-lead" :class="{
                      active: $route.query.category == 'electronics',
                    }">
                      <router-link :to="'/shop/sidebar/3cols?category=electronics'">Электроника</router-link>
                    </li>
                    <li class="item-lead" :class="{ active: $route.query.category == 'gift-idea' }">
                      <router-link :to="'/shop/sidebar/3cols?category=gift-idea'">Идеи подарков</router-link>
                    </li>
                    <li :class="{ active: $route.query.category == 'beds' }">
                      <router-link :to="'/shop/sidebar/3cols?category=beds'">Кровати</router-link>
                    </li>
                    <li :class="{ active: $route.query.category == 'lighting' }">
                      <router-link :to="'/shop/sidebar/3cols?category=lighting'">Освещение</router-link>
                    </li>
                    <li :class="{
                      active:
                        $route.query.category == 'sofas-and-sleeper-sofas',
                    }">
                      <router-link :to="'/shop/sidebar/3cols?category=sofas-and-sleeper-sofas'">Диваны и спальные
                        места</router-link>
                    </li>
                    <li :class="{ active: $route.query.category == 'storage' }">
                      <router-link :to="'/shop/sidebar/3cols?category=storage'">Место хранения</router-link>
                    </li>
                    <li :class="{
                      active:
                        $route.query.category == 'armchairs-and-chaises',
                    }">
                      <router-link :to="'/shop/sidebar/3cols?category=armchairs-and-chaises'">Кресла и
                        шезлонги</router-link>
                    </li>
                    <li :class="{ active: $route.query.category == 'decoration' }">
                      <router-link :to="'/shop/sidebar/3cols?category=decoration'">Украшение</router-link>
                    </li>
                    <li :class="{
                      active: $route.query.category == 'kitchen-cabinets',
                    }">
                      <router-link :to="'/shop/sidebar/3cols?category=kitchen-cabinets'">Кухонные шкафы</router-link>
                    </li>
                    <li :class="{
                      active: $route.query.category == 'coffee-and-tables',
                    }">
                      <router-link :to="'/shop/sidebar/3cols?category=coffee-and-tables'">Журнальные столики</router-link>
                    </li>
                    <li :class="{ active: $route.query.category == 'furniture' }">
                      <router-link :to="'/shop/sidebar/3cols?category=furniture'">Уличная мебель</router-link>
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
            <!-- <i class="la la-lightbulb-o"></i> -->
            <p class="text-truncate" style="display: flex; gap:5px;font-family: Gilroy-Medium !important; color: #000;">
              <img src="../../../assets/newImg/icons/user_icon.svg" alt="user">
              Александр: 3300.00
              <!-- <span class="highlight">&nbsp;Up to 30% Off</span> -->
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
    // openSignInModal: function () {
    //   this.$modal.show(
    //     () => import("../../elements/modals/SignInModal.vue"),
    //     {},
    //     { width: "575", height: "auto", adaptive: true }
    //   );
    // },
    openMobileMenu: function () {
      document.querySelector("body").classList.add("mmenu-active");
    },
  },
};
</script>
<style scoped>
.call {
  display: flex;
  gap: 5px;
  font-size: 14px;
  font-family: Gilroy-Medium !important;

}

.logIn {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-family: Gilroy-Medium !important;
  color: #777777 !important;
}

.logIn:hover {
  color: #3399ff !important;
}

.drop-custom {
  display: flex;
  align-items: center;
  font-family: Gilroy-Medium !important;
  gap: 10px;
}

.category-dropdown:hover {
  background-color: transparent !important;
}
</style>
