<template>
  <div class="product-details-quantity d-flex">
  
    <div class="input-group input-spinner quantity_btn_parent">
      <div class="input-group-prepend quantity_btn">
        <button
          style="min-width: 26px"
          class="btn btn-decrement btn-spinner"
          @click="decrement"
          type="button"
        >
          <img src="@/assets/newImg/product/minus.svg" alt="" />
        </button>
      </div>
      <input
        type="text"
        class="text-center quantity_input"
        required
        placeholder
        readonly
        v-model="current"
        @change="setCurrent($event)"
      />
      <div class="input-group-append quantity_btn">
        <button
          style="min-width: 26px"
          class="btn btn-increment btn-spinner"
          @click="increment"
          type="button"
        >
          <img src="@/assets/newImg/product/plus.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
  data: function () {
    return {
      current: this.product.qty ? this.product.qty : 1,
    };
  },
  watch: {
    product: function () {
      this.current = this.product.qty ? this.product.qty : 1;
    },
  },
  methods: {
    increment: function () {
      if (this.product.stock && this.current >= this.product.stock) return;
      this.current++;
      this.$emit("change-qty", this.current, this.product);
    },

    decrement: function () {
      if (this.current > 1) {
        this.current--;
        this.$emit("change-qty", this.current, this.product);
      }
    },
    setCurrent: function (event) {
      this.current = parseInt(event.currentTarget.value);
      this.$emit("change-qty", this.current, this.product);
    },
  },
};
</script>
