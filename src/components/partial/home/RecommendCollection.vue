<template>
  <div class="container for-you">
    <div class="heading heading-flex mb-3">
      <div class="heading-left">
        <h2 class="title">Рекомендации для Вас</h2>
      </div>

      <div class="heading-right">
        <router-link to="/shop/nosidebar/fullwidth" class="title-link" style="display: flex; gap: 5px; color:#777777 ;">
          Смотреть все предложения
          <!-- <i class="icon-long-arrow-right"></i> -->
          <img src="../../../assets/newImg/icons/br_arrow-right.svg" alt="">
        </router-link>
      </div>
    </div>

    <div class="products">
      <div class="row justify-content-center">
        <div class="col-6 col-md-4 col-lg-3" v-for="(product, index) in products.slice(0, 8)" :key="index">
          <product-twelve :product="product"></product-twelve>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductTwelve from "../../elements/products/ProductTwelve.vue";

export default {
  components: {
    ProductTwelve,
  },
  props: {
    products: Array,
  },
};
</script>
