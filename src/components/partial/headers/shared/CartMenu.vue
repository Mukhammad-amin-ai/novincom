<template>
  <div class="dropdown cart-dropdown">
    <router-link to="#" class="dropdown-toggle">
      <div class="icon">
        <!-- <i class="icon-shopping-cart"></i> -->
        <img src="../../../../assets/newImg/icons/cart.svg" alt="cart">
        <span class="cart-count">0</span>
      </div>
      <p>Корзина</p>
    </router-link>
<!-- 
    <div
      class="dropdown-menu dropdown-menu-right"
      v-if="cartList.length > 0"
      key="hasCart"
    >
      <div class="dropdown-cart-products">
        <div class="product" v-for="(product, index) in cartList" :key="index">
          <div class="product-cart-details">
            <h4 class="product-title">
              <router-link :to="'/product/default/' + product.slug">{{
                product.name
              }}</router-link>
            </h4>

            <span class="cart-product-info">
              <span class="cart-product-qty">{{ product.qty }}</span>
              x ${{
                product.sale_price
                  ? product.sale_price.toFixed(2)
                  : product.price.toFixed(2)
              }}
            </span>
          </div>

          <figure class="product-image-container">
            <router-link
              :to="'/product/default/' + product.slug"
              class="product-image"
            >
              <img
                v-lazy="`${baseUrl}${product.sm_pictures[0].url}`"
                alt="product"
                :width="product.sm_pictures[0].width"
                :height="product.sm_pictures[0].height"
              />
            </router-link>
          </figure>
          <a
            href="#"
            class="btn-remove"
            title="Remove Product"
            @click.prevent="removeFromCart({ product: product })"
          >
            <i class="icon-close"></i>
          </a>
        </div>
      </div>

      <div class="dropdown-cart-total">
        <span>Total</span>

        <span class="cart-total-price">${{ priceTotal.toFixed(2) }}</span>
      </div>

      <div class="dropdown-cart-action">
        <router-link to="/shop/cart" class="btn btn-primary"
          >View Cart</router-link
        >
        <router-link to="/shop/checkout" class="btn btn-outline-primary-2">
          <span>Checkout</span>
          <i class="icon-long-arrow-right"></i>
        </router-link>
      </div>
    </div>
    <div class="dropdown-menu dropdown-menu-right" v-else key="noCart">
      <p class="text-center">No products in the cart.</p>
    </div> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { baseUrl } from "../../../../repositories/repository.js";

export default {
  data: function () {
    return {
      baseUrl: baseUrl,
    };
  },
  computed: {
    ...mapGetters("cart", ["cartList", "priceTotal", "qtyTotal"]),
  },
  methods: {
    // ...mapActions("cart", ["removeFromCart"]),
  },
};
</script>
<style scoped>
p{
  font-family: Gilroy-Regular;
  font-size: 12px;
}
</style>

