<template>
  <div class="product product-list">
    <div class="row pr-2">
      <div class="col-lg-3 col-md-3 col-6">
        <figure class="product-media">
          <router-link :to="'/product/default/' + product.slug">
            <img :src="`${baseUrl}${product.sm_pictures[0].url}`" alt="Product" :width="product.sm_pictures[0].width"
              :height="product.sm_pictures[0].height" class="product-image" />
            <img :src="`${baseUrl}${product.sm_pictures[1].url}`" alt="Product" :width="product.sm_pictures[1].width"
              :height="product.sm_pictures[1].height" class="product-image-hover" v-if="product.sm_pictures[1]" />
          </router-link>
        </figure>
      </div>
      <div class="col-lg-6 col-md-6 order-last">
        <div class="product-body product-action-inner">
          <div class="product-cat">
            <span v-for="(cat, index) of product.category" :key="index">
              <router-link :to="{
                path: '/shop/sidebar/list',
                query: { category: cat.slug },
              }">{{ cat.name }}
              </router-link>
              {{ index < product.category.length - 1 ? "," : "" }} </span>
          </div>
          <h3 class="product-title">
            <router-link :to="'/product/default/' + product.slug">{{ product.name }}</router-link>
          </h3>
          <div class="product-content">
            <p>{{ product.short_desc }}</p>
          </div>
          <div class="product-nav product-nav-dots" v-if="product.variants.length > 0">
            <div class="row no-gutters">
              <a href="javascript:;" :style="{ 'background-color': item.color }" v-for="(item, index) in product.variants"
                :key="index">
                <span class="sr-only">Color name</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-6 order-md-last order-lg-last">
        <div class="product-list-action">
          <div class="product-price" v-if="product.stock == 0" key="outPrice">
            <span class="out-price">{{ product.price.toFixed(2) }}</span>
          </div>
          <template v-else>
            <div class="product-price" v-if="minPrice == maxPrice">
              {{ minPrice.toFixed(2) }}
            </div>
            <template v-else>
              <div class="product-price" v-if="product.variants.length == 0">
                <span class="new-price">{{ minPrice.toFixed(2) }}</span>
                <span class="old-price">{{ maxPrice.toFixed(2) }}</span>
              </div>
              <div class="product-price" v-else>
                {{ minPrice.toFixed(2) }}&ndash;{{ maxPrice.toFixed(2) }}
              </div>
            </template>
          </template>
          <div class="ratings-container">
            <div class="ratings">
              <div class="ratings-val" :style="{ width: product.ratings * 20 + '%' }"></div>
              <span class="tooltip-text">{{ product.ratings.toFixed(2) }}</span>
            </div>
            <span class="ratings-text">( {{ product.review }} Reviews )</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { baseUrl } from "@/repositories/repository.js";
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
};
</script>
