<template>
  <div class="mobile-menu-container">
    <div class="mobile-menu-wrapper">
      <span class="mobile-menu-close" @click="hideMobileMenu">
        <!-- <i class="icon-close"></i> -->
        <img src="../../../assets/newImg/icons/modal-close.svg" alt="" />
      </span>
      <form
        action="#"
        method="get"
        class="mobile-search"
        @submit.prevent="submitSearchForm"
      >
        <label for="mobile-search" class="sr-only">Поиск</label>
        <input
          type="text"
          class="form-control"
          name="mobile-search"
          id="mobile-search"
          v-model="searchTerm"
          placeholder="Поиск по каталогу..."
          required
        />
        <button class="btn btn-primary" type="submit">
          <!-- <i class="icon-search"></i> -->
          <img src="../../../assets/newImg/icons/search.svg" alt="" />
        </button>
      </form>
      <tabs class="nav-pills-mobile text-center" :data="tabsData"></tabs>
      <div class="tab-content">
        <div class="tab-pane fade show active" id="mobile-nav">
          <nav class="mobile-nav">
            <ul class="mobile-menu">
              <li class="active">
                <router-link to="/" class="sf-with-ul">Home</router-link>
                <ul>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-1"
                      >01 - furniture store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-2"
                      >02 - furniture store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-3"
                      >03 - electronic store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-4"
                      >04 - electronic store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-5"
                      >05 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-6"
                      >06 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-7"
                      >07 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-8"
                      >08 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-9"
                      >09 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-10"
                      >10 - shoes store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-11"
                      >11 - furniture simple store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-12"
                      >12 - fashion simple store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-13"
                      >13 - market</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-14"
                      >14 - market fullwidth</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-15"
                      >15 - lookbook 1</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-16"
                      >16 - lookbook 2</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-17"
                      >17 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-18"
                      >18 - fashion store (with sidebar)</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-19"
                      >19 - games store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-20"
                      >20 - book store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-21"
                      >21 - sport store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-22"
                      >22 - tools store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-23"
                      >23 - fashion left navigation store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-24"
                      >24 - extreme sport store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-25"
                      >25 - jewelry store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-26"
                      >26 - market store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-28"
                      >27 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-29"
                      >28 - food market store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-30"
                      >29 - t-shirts store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-31"
                      >30 - headphones store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-32"
                      >31 - yoga store</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/shop/sidebar/list">Shop</router-link>
                <ul>
                  <li>
                    <router-link to="/shop/sidebar/list">Shop List</router-link>
                  </li>
                  <li>
                    <router-link to="/shop/sidebar/2cols"
                      >Shop Grid 2 Columns</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/shop/sidebar/3cols"
                      >Shop Grid 3 Columns</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/shop/sidebar/4cols"
                      >Shop Grid 4 Columns</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/shop/nosidebar/boxed">
                      <span>
                        Shop Boxed No Sidebar
                        <span class="tip tip-hot">Hot</span>
                      </span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/shop/nosidebar/fullwidth"
                      >Shop Fullwidth No Sidebar</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/shop/category/boxed"
                      >Product Category Boxed</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/shop/category/fullwidth">
                      <span>
                        Product Category Fullwidth
                        <span class="tip tip-new">New</span>
                      </span>
                    </router-link>
                  </li>
                  <!-- <li>
                    <router-link to="/shop/cart">Cart</router-link>
                  </li>
                  <li>
                    <router-link to="/shop/checkout">Checkout</router-link>
                  </li>
                  <li>
                    <router-link to="/shop/wishlist">Wishlist</router-link>
                  </li>
                  <li>
                    <router-link to="/shop/dashboard">My Account</router-link>
                  </li> -->
                </ul>
              </li>
              <li>
                <router-link
                  to="/product/default/dark-yellow-lace-cut-out-swing-dress"
                  class="sf-with-ul"
                  >Product</router-link
                >
                <!-- <ul>
                  <li>
                    <router-link to="/product/default/dark-yellow-lace-cut-out-swing-dress">Default</router-link>
                  </li>
                  <li>
                    <router-link to="/product/centered/beige-ring-handle-circle-cross-body-bag">Centered</router-link>
                  </li>
                  <li>
                    <router-link to="/product/extended/yellow-tie-strap-block-heel-sandals">
                      <span>
                        Extended Info
                        <span class="tip tip-new">New</span>
                      </span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/product/gallery/beige-metal-hoop-tote-bag">Gallery</router-link>
                  </li>
                  <li>
                    <router-link to="/product/sticky/brown-faux-fur-longline-coat">Sticky Info</router-link>
                  </li>
                  <li>
                    <router-link to="/product/sidebar/beige-v-neck-button-cardigan">Boxed With Sidebar</router-link>
                  </li>
                  <li>
                    <router-link to="/product/fullwidth/black-faux-leather-chain-trim-sandals">Full Width</router-link>
                  </li>
                  <li>
                    <router-link to="/product/masonry/black-denim-dungaree-dress">Masonry Sticky Info</router-link>
                  </li>
                </ul> -->
              </li>
              <!-- <li>
                <router-link to="/pages/about">Pages</router-link>
                <ul>
                  <li>
                    <router-link to="/pages/about" class="sf-with-ul"
                      >About</router-link
                    >

                    <ul>
                      <li>
                        <router-link to="/pages/about">About 01</router-link>
                      </li>
                      <li>
                        <router-link to="/pages/about-2">About 02</router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/pages/contact" class="sf-with-ul"
                      >Contact</router-link
                    >

                    <ul>
                      <li>
                        <router-link to="/pages/contact"
                          >Contact 01</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/pages/contact-2"
                          >Contact 02</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/pages/login">Login</router-link>
                  </li>
                  <li>
                    <router-link to="/pages/faq">FAQs</router-link>
                  </li>
                  <li>
                    <router-link to="/pages/404">Error 404</router-link>
                  </li>
                  <li>
                    <router-link to="/pages/coming-soon"
                      >Coming Soon</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/blog/classic" class="sf-with-ul"
                  >Blog</router-link
                >
                <ul>
                  <li>
                    <router-link to="/blog/classic">Classic</router-link>
                  </li>
                  <li>
                    <router-link to="/blog/listing">Listing</router-link>
                  </li>
                  <li>
                    <router-link to="/blog/grid/grid-2">Grid</router-link>
                    <ul>
                      <li>
                        <router-link to="/blog/grid/grid-2"
                          >Grid 2 columns</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/blog/grid/grid-3"
                          >Grid 3 columns</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/blog/grid/grid-4"
                          >Grid 4 columns</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/blog/grid-sidebar"
                          >Grid sidebar</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/blog/masonry/masonry-2"
                      >Masonry</router-link
                    >
                    <ul>
                      <li>
                        <router-link to="/blog/masonry/masonry-2"
                          >Masonry 2 columns</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/blog/masonry/masonry-3"
                          >Masonry 3 columns</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/blog/masonry/masonry-4"
                          >Masonry 4 columns</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/blog/masonry-sidebar"
                          >Masonry sidebar</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/blog/mask/grid">Mask</router-link>
                    <ul>
                      <li>
                        <router-link to="/blog/mask/grid"
                          >Blog mask grid</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/blog/mask/masonry"
                          >Blog mask masonry</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link
                      to="/blog/single/default/cras-ornare-tristique-elit."
                      >Single Post</router-link
                    >
                    <ul>
                      <li>
                        <router-link
                          to="/blog/single/default/cras-ornare-tristique-elit."
                          >Default with sidebar</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="/blog/single/fullwidth/fusce-pellentesque-suscipit."
                          >Fullwidth no sidebar</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="/blog/single/sidebar/utaliquam-sollicitzdvudin-leo."
                          >Fullwidth with sidebar</router-link
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/elements" class="sf-with-ul"
                  >Elements</router-link
                >

                <ul>
                  <li>
                    <router-link to="/elements/products">Products</router-link>
                  </li>
                  <li>
                    <router-link to="/elements/typography"
                      >Typography</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/elements/titles">Titles</router-link>
                  </li>
                  <li>
                    <router-link to="/elements/banners">Banners</router-link>
                  </li>
                  <li>
                    <router-link to="/elements/categories"
                      >Product Category</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/elements/video-banners"
                      >Video Banners</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/elements/buttons">Buttons</router-link>
                  </li>
                  <li>
                    <router-link to="/elements/accordions"
                      >Accordions</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/elements/tabs">Tabs</router-link>
                  </li>
                  <li>
                    <router-link to="/elements/testimonials"
                      >Testimonials</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/elements/blog-posts"
                      >Blog Posts</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/elements/portfolio"
                      >Portfolio</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/elements/cta">Call to Action</router-link>
                  </li>
                  <li>
                    <router-link to="/elements/icon-boxes"
                      >Icon Boxes</router-link
                    >
                  </li>
                </ul>
              </li> -->
            </ul>
          </nav>
        </div>
        <div class="tab-pane fade" id="mobile-categories">
          <nav class="mobile-cats-nav">
            <ul class="mobile-cats-menu">
              <li class="item-cats-lead">
                <router-link :to="'/shop/sidebar/3cols?category=electronics'"
                  >Electronics</router-link
                >
              </li>
              <li class="item-cats-lead">
                <router-link :to="'/shop/sidebar/3cols?category=gift-idea'"
                  >Gift Ideas</router-link
                >
              </li>
              <li>
                <router-link :to="'/shop/sidebar/3cols?category=beds'"
                  >Beds</router-link
                >
              </li>
              <li>
                <router-link :to="'/shop/sidebar/3cols?category=lighting'"
                  >Lighting</router-link
                >
              </li>
              <li>
                <router-link
                  :to="'/shop/sidebar/3cols?category=sofas-and-sleeper-sofas'"
                  >Sofas & Sleeper sofas</router-link
                >
              </li>
              <li>
                <router-link :to="'/shop/sidebar/3cols?category=storage'"
                  >Storage</router-link
                >
              </li>
              <li>
                <router-link
                  :to="'/shop/sidebar/3cols?category=armchairs-and-chaises'"
                  >Armchairs & Chaises</router-link
                >
              </li>
              <li>
                <router-link :to="'/shop/sidebar/3cols?category=decoration'"
                  >Decoration</router-link
                >
              </li>
              <li>
                <router-link
                  :to="'/shop/sidebar/3cols?category=kitchen-cabinets'"
                  >Kitchen Cabinets</router-link
                >
              </li>
              <li>
                <router-link
                  :to="'/shop/sidebar/3cols?category=coffee-and-tables'"
                  >Coffee & Tables</router-link
                >
              </li>
              <li>
                <router-link :to="'/shop/sidebar/3cols?category=furniture'"
                  >Outdoor Furniture</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from "@/components/elements/Tabs.vue";
import { mobileMenu } from "@/utilities/common.js";
export default {
  components: {
    Tabs,
  },
  data: function () {
    return {
      tabsData: [
        {
          id: "mobile-nav",
          title: "MENU",
          active: true,
        },
        {
          id: "mobile-categories",
          title: "CATEGORIES",
        },
      ],
      searchTerm: "",
    };
  },
  mounted: function () {
    mobileMenu();
  },
  methods: {
    hideMobileMenu: function () {
      document.querySelector("body").classList.remove("mmenu-active");
    },
    submitSearchForm: function () {
      this.hideMobileMenu();
      this.$router.push({
        path: "/shop/sidebar/3cols",
        query: {
          searchTerm: this.searchTerm,
        },
      });
    },
  },
};
</script>
