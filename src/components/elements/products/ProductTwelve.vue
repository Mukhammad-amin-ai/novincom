<template>
  <div class="product product-2">
    <figure class="product-media">
      <span class="product-label label-circle label-new" v-if="product.new">Новинка</span>
      <span class="product-label label-circle label-sale" v-if="product.featured">Выгодно</span>
      <span class="product-label label-circle label-top" v-if="product.top">Топ</span>
      <span class="product-label label-circle label-out" v-if="product.stock === 0">Out Of Stock</span>
      <router-link to="/product/default/">
        <img :src="`${product.sm_pictures[0].url}`" alt="Product" :width="product.sm_pictures[0].width"
          :height="product.sm_pictures[0].height" class="product-image" />
        <img :src="`${product.sm_pictures[1].url}`" alt="Product" :width="product.sm_pictures[1].width"
          :height="product.sm_pictures[1].height" class="product-image-hover" v-if="product.sm_pictures[1]" />
      </router-link>
    </figure>
    <div class="product-body">
      <div class="product-cat">
        <span v-for="(cat, index) of product.category" :key="index">
          <router-link :to="{ path: '/shop/sidebar/list', query: { category: cat.slug } }">{{ cat.name }}</router-link>
          {{ index < product.category.length - 1 ? "," : "" }} </span>
      </div>
      <h3 class="product-title" style="width: 90%;">
        <router-link :to="'/product/default/' + product.slug">{{
          product.name
        }}</router-link>
      </h3>

      <div class="product-price" v-if="product.stock == 0" key="outPrice">
        <span class="out-price">{{ formatNumber(product.price) }}</span>
      </div>
      <div class="product-price" style="gap:5px;" v-if="product.stock == null">
        {{ formatNumber(product.price.toFixed(2)) }} <span style="font-size: 13px;font-family: Gilroy-Medium !important;">
          Бонусов</span>
      </div>
      <template v-else>
        <div class="product-price" style="gap:5px;" v-if="minPrice == maxPrice">
          от {{ minPrice.toFixed(2) }}<span style="font-size: 13px; font-family: Gilroy-Medium !important;">Бонусов</span>
        </div>
        <template v-else>
          <div class="product-price" v-if="product.variants.length == 0">
            <span class="new-price" style=" font-family: Gilroy-Medium !important;">{{ formatNumber(minPrice.toFixed(2))
            }}</span>
            <span class="old-price" style=" font-family: Gilroy-Medium !important;">{{ formatNumber(maxPrice.toFixed(2))
            }} <span style="font-size: 13px; font-family: Gilroy-Medium !important;"> Бонусов</span></span>

          </div>
          <div class="product-price" style="gap:5px;" v-else>
            {{ formatNumber(minPrice) }}&ndash;{{ formatNumber(maxPrice) }}<span
              style="font-size: 13px; font-family: Gilroy-Medium !important;"> Бонусов</span>
          </div>
        </template>
      </template>
      <div class="mb-4"></div>

    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { baseUrl } from "../../../repositories/repository.js";

export default {
  props: {
    product: Object,
  },
  data: function () {
    return {
      baseUrl: baseUrl,
      maxPrice: 0,
      minPrice: 99999,
    };
  },
  computed: {
    ...mapGetters("cart", ["canAddToCart"]),
    // ...mapGetters("wishlist", ["isInWishlist"]),
    ...mapGetters("compare", ["isInCompare"]),
  },

  created: function () {
    let min = this.minPrice;
    let max = this.maxPrice;
    this.product.variants.map((item) => {
      if (min > item.price) min = item.price;
      if (max < item.price) max = item.price;
    }, []);

    if (this.product.variants.length == 0) {
      min = this.product.sale_price
        ? this.product.sale_price
        : this.product.price;
      max = this.product.price;
    }

    this.minPrice = min;
    this.maxPrice = max;
  },
  methods: {
    formatNumber(number) {
      return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    isInWishlist(product) {
      this.$store.commit("isInWishlist", product);
    },
    ...mapActions("cart", ["addToCart"]),
    ...mapActions("wishlist", ["addToWishlist"]),
    ...mapActions("compare", ["addToCompare"]),
    // quickView: function () {
    //   this.$modal.show(
    //     () => import("../modals/QuickViewModal.vue"),
    //     {
    //       product: this.product,
    //     },
    //     { width: "1030", height: "auto", adaptive: true }
    //   );
    // },
  },
};
</script>
<style scoped>


@media screen and (max-width:425px) {
  .product-title{
    text-overflow: ellipsis;
  }
}

</style>
