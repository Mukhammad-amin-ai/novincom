<template>
    <div>
        <swiper :slidesPerView="3" :spaceBetween="30" :freeMode="true" :modules="modules"
            class="mySwiper">
            <swiper-slide>
                <router-link to="#" style="cursor: pointer;">
                    <img src="../../assets/newImg/logotypes/bosch-logo-simple 1.png" alt="">
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link to="#" style="cursor: pointer;">
                    <img src="../../assets/newImg/logotypes/ozon.png" alt="">
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link to="#" style="cursor: pointer;">
                    <img src="../../assets/newImg/logotypes/xiaomi.png" alt="">
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link to="#" style="cursor: pointer;">
                    <img src="../../assets/newImg/logotypes/десткий мир.png" alt="">
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link to="#" style="cursor: pointer;">
                    <img src="../../assets/newImg/logotypes/аэрофлот.png" alt="">
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link to="#" style="cursor: pointer;">
                    <img src="../../assets/newImg/logotypes/РЖД.png" alt="">
                </router-link>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [FreeMode, Pagination],
        };
    }
}
</script>

<style scoped>
</style>