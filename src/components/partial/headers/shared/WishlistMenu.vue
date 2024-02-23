<template>
  <div class="wishlist">
    <router-link to="#" title="Wishlist">
      <div class="icon">
        <!-- <i class="icon-heart-o"></i> -->
        <img src="../../../../assets/newImg/icons/heart.svg" alt="heart">
        <span class="wishlist-count badge">{{ wishlistQty }}</span>
      </div>
      <p>Избранное</p>
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
<style scoped>
p{
  font-family: Gilroy-Regular;
  font-size: 12px;
}
</style>
