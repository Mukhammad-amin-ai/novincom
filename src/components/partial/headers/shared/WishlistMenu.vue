<template>
  <div class="wishlist">
    <router-link to="/shop/wishlist" title="Wishlist">
      <div class="icon">
        <i class="icon-heart-o"></i>
        <span class="wishlist-count badge">{{ wishlistQty }}</span>
      </div>
      <p>Wishlist</p>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("wishlist", ["wishlistQty"]),
  },
};
</script>
