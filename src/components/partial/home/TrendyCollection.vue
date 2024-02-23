<template>
  <div class="bg-light pt-5 pb-5">
    <div class="container trending-products">
      <div class="heading heading-flex mb-3">
        <div class="heading-left">
          <h2 class="title">Популярные товары</h2>
        </div>
        <div class="heading-right">
          <tabs
            class="nav nav-pills nav-border-anim justify-content-center"
            :data="tabsData"
            id="trendy"
          ></tabs>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col" v-for="(product, index) in ratedProducts" :key="index">
          <product-twelve :product="product" class="mb-3"></product-twelve>
        </div>
      </div> -->
      <div class="row">
        <div class="col-xl-5col d-none d-xl-block">
          <div class="banner">
            <router-link to="/shop/sidebar/list">
              <img
                src="../../../assets/newImg/banner-trend.png"
                alt="banner"
                width="218"
                height="390"
              />
            </router-link>
          </div>
        </div>
        <div class="col-xl-4-5col">
          <div class="tab-content tab-content-carousel just-action-icons-sm">
            <div class="tab-pane p-0 fade show active" id="trendy-top-rated">
              <div class="swiper-carousel carousel-with-shadow swiper-1">
                <swiper
                  :breakpoints="{
                    '320': {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    '576': {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },

                    '768': {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    '1200': {
                      slidesPerView: 5,
                    },
                    '1201': {
                      slidesPerView: 4,
                      spaceBetween: 35,
                    },
                  }"
                  :modules="modules"
                  :navigation="false"
                  :slidesPerView="1"
                  :spaceBetween="10"
                  class="row"
                >
                  <swiper-slide
                    class=""
                    v-for="(product, index) in ratedProducts"
                    :key="index"
                  >
                    <ProductTwelve :product="product" class="mb-3" />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from "../../elements/Tabs.vue";
import ProductTwelve from "../../elements/products/ProductTwelve.vue";

import { attrFilter } from "../../../utilities/common.js";
import { carouselSetting1 } from "../../../utilities/carousel.js";
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default {
  components: {
    Tabs,
    ProductTwelve,
  },
  props: {
    products: Array,
  },
  data: function () {
    return {
      tabsData: [
        {
          id: "top-rated",
          title: "Все",
          active: true,
        },
      ],
      carouselSetting1: {
        ...carouselSetting1,
        slidesPerView: 4,
        navigation: {
          nextEl: ".trending-products .swiper-1 .swiper-next",
          prevEl: ".trending-products .swiper-1 .swiper-prev",
        },
      },
      carouselSetting2: {
        ...carouselSetting1,
        slidesPerView: 4,
        navigation: {
          nextEl: ".trending-products .swiper-2 .swiper-next",
          prevEl: ".trending-products .swiper-2 .swiper-prev",
        },
      },
      carouselSetting3: {
        ...carouselSetting1,
        slidesPerView: 4,
        navigation: {
          nextEl: ".trending-products .swiper-3 .swiper-next",
          prevEl: ".trending-products .swiper-3 .swiper-prev",
        },
      },
    };
  },
  computed: {
    featuredProducts: function () {
      return attrFilter(this.products, "featured");
    },
    ratedProducts: function () {
      return attrFilter(this.products, "rated");
    },
    saleProducts: function () {
      return attrFilter(this.products, "sale");
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    ProductTwelve,
  },
  setup() {
    const onSwiper = (swiper) => {
      return swiper;
    };
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar],
    };
  },
};
</script>
<style scoped></style>
