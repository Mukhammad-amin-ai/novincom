<template>
  <div class="main home-page">
    <div class="intro-slider-container mb-5">
      <carousel />
    </div>
    <div class="container">
      <h2 class="title text-center mb-4">Каталог призов</h2>
      <div class="cat-blocks-container">
        <div class="row">
          <div class="col-6 col-sm-4 col-lg-2">
            <router-link to="/shop/sidebar/3cols?category=computers" class="cat-block">
              <figure>
                <span>
                  <img src="../assets/newImg/cat_1.png" alt="Category" class="bg-transparent" />
                </span>
              </figure>
              <h3 class="cat-block-title">Подарочные сертификаты</h3>
            </router-link>
          </div>

          <div class="col-6 col-sm-4 col-lg-2">
            <router-link to="/shop/sidebar/3cols?category=cameras" class="cat-block">
              <figure>
                <span>
                  <img src="../assets/newImg/cat_2.png" alt="Category" class="bg-transparent" />
                </span>
              </figure>

              <h3 class="cat-block-title">Авиабилеты</h3>
            </router-link>
          </div>

          <div class="col-6 col-sm-4 col-lg-2">
            <router-link to="/shop/sidebar/3cols?category=accessories" class="cat-block">
              <figure>
                <span>
                  <img src="../assets/newImg/cat_3.png" alt="Category" class="bg-transparent" />
                </span>
              </figure>

              <h3 class="cat-block-title">ЖД билеты</h3>
            </router-link>
          </div>

          <div class="col-6 col-sm-4 col-lg-2">
            <router-link to="/shop/sidebar/3cols?category=televisions" class="cat-block">
              <figure>
                <span>
                  <img src="../assets/newImg/cat_4.png" alt="Category" class="bg-transparent" />
                </span>
              </figure>

              <h3 class="cat-block-title">Отели</h3>
            </router-link>
          </div>

          <div class="col-6 col-sm-4 col-lg-2">
            <router-link to="/shop/sidebar/3cols?category=audio" class="cat-block">
              <figure>
                <span>
                  <img src="../assets/newImg/cat_5.png" alt="Category" class="bg-transparent" />
                </span>
              </figure>

              <h3 class="cat-block-title">Товары</h3>
            </router-link>
          </div>

          <div class="col-6 col-sm-4 col-lg-2">
            <router-link to="/shop/sidebar/3cols?category=watches" class="cat-block">
              <figure>
                <span>
                  <img src="../assets/newImg/cat_6.png" alt="Category" class="bg-transparent" />
                </span>
              </figure>

              <h3 class="cat-block-title">Благотворительность</h3>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-4"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="banner banner-overlay banner-overlay-light">
            <router-link to="/shop/sidebar/3cols">
              <img src="../assets/newImg/banner-1.png" width="376" height="160" alt="Banner" />
            </router-link>
            <div class="banner-content">
              <h4 class="banner-subtitle">
                <a href="#">Специальное предложение</a>
              </h4>
              <h3 class="banner-title">
                <a href="#" style="font-family: Gilroy-Medium !important">
                  Скидка 150 Б
                  <strong>
                    on Samsung
                    <br />Galaxy Note9
                  </strong>
                </a>
              </h3>
              <router-link to="/shop/sidebar/3cols" class="banner-link">
                Купить
                <img src="../assets/newImg/icons/bi_arrow-right.svg" style="width: 16px; height: 16px"
                  alt="arrow-right" />
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="banner banner-overlay banner-overlay-light">
            <router-link to="/shop/sidebar/list">
              <img src="../assets/newImg/banner-2.png" width="376" height="160" alt="Banner" />
            </router-link>
            <div class="banner-content">
              <h4 class="banner-subtitle">
                <a href="#">Выгодно</a>
              </h4>

              <h3 class="banner-title">
                <a href="#" style="font-family: Gilroy-Medium !important">
                  <strong>Bose SoundSport</strong>
                  <br />Скидка –30%
                </a>
              </h3>
              <router-link to="/shop/sidebar/3cols" class="banner-link">
                Купить
                <img src="../assets/newImg/icons/bi_arrow-right.svg" style="width: 16px; height: 16px"
                  alt="arrow-right" />
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="banner banner-overlay banner-overlay-light">
            <router-link to="/shop/sidebar/list">
              <img src="../assets/newImg/banner-3.png" class="bg-transparent" width="376" height="160" alt="Banner" />
            </router-link>
            <div class="banner-content">
              <h4 class="banner-subtitle">
                <a href="#">Выгодное предложение</a>
              </h4>
              <h3 class="banner-title">
                <a href="#" style="font-family: Gilroy-Medium !important">
                  <strong>GoPro - Fusion 360</strong>
                  <br />Экономия 70 Б
                </a>
              </h3>
              <router-link to="/shop/sidebar/3cols" class="banner-link">
                Купить
                <img src="../assets/newImg/icons/bi_arrow-right.svg" style="width: 16px; height: 16px"
                  alt="arrow-right" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3"></div>
    <NewCollection :products="newProducts" v-if="loaded"></NewCollection>
    <div class="mb-6"></div>
    <div class="container">
      <div class="cta cta-border mb-5" style="background-image: url(../assets/newImg/box.png)">
        <img src=" ../assets/newImg/plane.png" alt="camera" class="cta-img bg-transparent" />
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="cta-content d-flex">
              <div class="cta-text text-right text-white">
                <p>
                  Путешествие по всем направлениям!
                  <br />
                  <strong style="font-family: Gilroy-SemiBold !important">Авиа- и железнодорожныебилеты и отели.</strong>
                </p>
              </div>

              <router-link to="/shop/sidebar/list" class="btn btn-primary btn-round" style="display: flex; gap: 10px">
                <span>Смотреть</span>
                <img src="../assets/newImg/icons/w_arrow-right.svg" style="width: 16px; height: 16px" alt="arrow-right" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DealCollection v-if="loaded"></DealCollection>
    <div class="container">
      <hr class="mb-0" />
      <div class="swiper-carousel brands-slider swiper-2 mb-5 mt-5">
        <div v-swiper:swiper2="carouselSetting2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(brand, index) in homeData.brands" :key="index">
              <a href="#" class="brand">
                <img :src="brand.image" class="bg-white" alt="Brand" :width="brand.width" :height="brand.height" />
              </a>
            </div>
          </div>
        </div>
        <div class="swiper-nav">
          <div class="swiper-prev">
            <i class="icon-angle-left"></i>
          </div>
          <div class="swiper-next">
            <i class="icon-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
    <trendy-collection :products="topProducts" v-if="loaded"></trendy-collection>
    <TrendyCollection :products="topProducts" v-if="loaded"></TrendyCollection>

    <div class="mb-5"></div>
    <recommend-collection :products="products" v-if="loaded"></recommend-collection>
    <div class="mb-4"></div>
    <div class="container">
      <hr class="mb-0" />
    </div>
    <div class="icon-boxes-container bg-transparent">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
              <span class="icon-box-icon text-dark">
                <img src="../assets/newImg/icon_1.png" alt="" />
              </span>
              <div class="icon-box-content">
                <h3 class="icon-box-title">Free Shipping</h3>
                <p>Orders $50 or more</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
              <span class="icon-box-icon text-dark">
                <img src="../assets/newImg/icon_2.png" alt="" />
              </span>
              <div class="icon-box-content">
                <h3 class="icon-box-title">Free Returns</h3>
                <p>Within 30 days</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
              <span class="icon-box-icon text-dark">
                <img src="../assets/newImg/icon_3.png" alt="" />
              </span>
              <div class="icon-box-content">
                <h3 class="icon-box-title">Get 20% Off 1 Item</h3>
                <p>when you sign up</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
              <span class="icon-box-icon text-dark">
                <img src="../assets/newImg/icon_4.png" alt="" />
              </span>
              <div class="icon-box-content">
                <h3 class="icon-box-title">We Support</h3>
                <p>24/7 amazing services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cta bg-image bg-dark pt-4 pb-5 mb-0"
      style="background-image: url(./assets/images/bg-nout.png) !important">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-10 col-md-8 col-lg-6">
            <div class="cta-heading text-center">
              <h3 class="cta-title text-white">
                Получайте специальные предложения
              </h3>
              <p class="cta-desc text-white">подпишитесь на нашу рассылку</p>
            </div>
            <form action="#">
              <div class="input-group input-group-round">
                <input type="email" class="form-control form-control-white" aria-label="Email Adress" required />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="submit" style="display: flex; gap: 5px;">
                    <router-link to="#" style="display: flex; gap: 5px; color: #fff;">
                      <span>Подписаться</span>
                      <!-- <i class="icon-long-arrow-right"></i> -->
                      <img src="../assets/newImg/icons/w_arrow-right.svg" alt="w_arrow">
                    </router-link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import NewCollection from "../components/partial/home/NewCollection.vue";
import DealCollection from "../components/partial/home/DealCollection.vue";
import TrendyCollection from "../components/partial/home/TrendyCollection.vue";
import RecommendCollection from "../components/partial/home/RecommendCollection.vue";
import NewsletterModal from "../components/elements/modals/NewsletterModal.vue";

import Repository, { baseUrl } from "../repositories/repository.js";
import { attrFilter } from "../utilities/common";
import {
  carouselSettingSingle,
  carouselSettingDefault,
} from "../utilities/carousel";
import { homeData, products } from "../utilities/data";
import Carousel from "@/components/elements/Carousel.vue";
import { shopData } from "../utilities/data";
export default {
  components: {
    RecommendCollection,
    DealCollection,
    TrendyCollection,
    NewCollection,
    Carousel,
  },
  data: function () {
    return {
      loaded: true,
      products: [],
      newProducts: [],
      topProducts: [],
      carouselSetting1: {
        ...carouselSettingSingle,
        pagination: {
          el: ".intro-slider-container .swiper-dots",
          clickable: true,
        },
        navigation: {
          nextEl: ".intro-slider-container .swiper-next",
          prevEl: ".intro-slider-container .swiper-prev",
        },
      },
      carouselSetting2: {
        ...carouselSettingDefault,
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: {
          nextEl: ".brands-slider .swiper-next",
          prevEl: ".brands-slider .swiper-prev",
        },
        breakpoints: {
          992: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 2,
          },
        },
      },
      homeData: homeData,
    };
  },
  computed: {
    ...mapGetters("demo", ["newsletterShow"]),
  },
  created: function () {
    this.getProducts();
  },
  mounted: function () {
    if (this.newsletterShow) {
      setTimeout(() => {
        if (this.$route.path == "/" && this.newsletterShow) {
          this.$modal.show(
            NewsletterModal,
            {},
            { width: "970", height: "auto", adaptive: true }
          );
        }
      }, 8000);
    }
  },
  methods: {
    getProducts: async function () {
      this.loaded = true;
      await Repository.get(`${baseUrl}/demo4`)
        .then((response) => {
          this.products = response.data.products;
          this.newProducts = attrFilter(this.products, "new");
          this.topProducts = attrFilter(this.products, "top");
          this.loaded = true;
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
    },
  },
};
</script>
