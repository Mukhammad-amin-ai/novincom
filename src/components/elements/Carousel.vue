<template>
  <div class="carousel">
    <div class="container items-center">
      <swiper
        :loop="true"
        :modules="modules"
        :navigation="true"
        :slides-per-view="1"
        :space-between="150"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
        :pagination="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :draggable="true"
      >
        <swiper-slide v-for="slide in data" :key="slide.id">
          <div class="container swiper-item swiper_custom_item items-center">
            <div class="left-swiper-item">
              <div v-if="slide.image" class="right-swiper-item-img">
                <img
                  format="webp"
                  class="main-img"
                  loading="lazy"
                  :alt="slide.name"
                  :src="slide.image"
                />
              </div>
            </div>
            <div
              class="right-swiper-item d-flex flex-column justify-content-center"
            >
              <div class="swiper-item-desc">
                {{ slide.description }}
              </div>
              <div class="swiper-item-content">
                {{ slide.name }}
              </div>

              <div class="w-100 d-flex justify-content-start">
                <router-link to="'auth/login'" class="buy-btn text-white mb-2"
                  >Вход / Регистрация
                </router-link>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  data() {
    return {
      url: "slider-product",
      data: [
        {
          image: "/assets/images/iphone.svg",
          name: "Товары с доставкой",
          description: "Покупайте за баллы и деньги",
        },
        {
          image: "/assets/images/card.svg",
          name: "Подарочные сертификаты",
          description: "Покупайте за баллы и деньги",
        },
        {
          image: "/assets/images/plane.svg",
          name: "Билеты на самолет",
          description: "Покупайте за баллы и деньги",
        },
      ],
    };
  },
  props: {
    circle: Boolean,
    square: Boolean,
  },
  components: {
    Swiper,
    SwiperSlide,
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
<style>
.swiper-button-next,
.swiper-button-prev {
  background: #fff;
  border-radius: 50px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  border: 1px solid #9dadcb;
}
.swiper-button-next::after {
  position: absolute;
  top: 5%;
  left: 20%;
  color: #5c6ac4 !important;
  width: 10px;
  height: 10px;
  padding: 10px;
  font-size: 15px;
}

.swiper-button-prev::after {
  position: absolute;
  top: 5%;
  left: 10%;
  color: #5c6ac4 !important;
  width: 10px;
  height: 10px;
  padding: 10px;
  font-size: 15px;
}
@media (max-width: 576px) {
  .carousel .swiper-button-next {
    position: absolute;
    top: auto !important;
    bottom: 7px !important;
    right: 20px !important;
    width: 32px !important;
    height: 32px !important;
  }
  .carousel .swiper-button-prev {
    position: absolute;
    width: 32px !important;
    height: 32px !important;
    top: auto !important;
    bottom: 7px !important;
    right: 64px !important;
    left: auto !important;
  }
  .carousel .swiper-button-next::after {
    position: absolute;
    top: 25%;
    left: 13px !important;
    color: #5c6ac4 !important;
    width: 8px;
    height: 8px;
    padding: 0 !important;
  }
  .carousel .swiper-button-prev::after {
    position: absolute;
    top: 25%;
    right: 13px !important;
    left: auto !important;
    color: #5c6ac4 !important;
    width: 8px !important;
    padding: 0px !important;
  }
}
</style>
