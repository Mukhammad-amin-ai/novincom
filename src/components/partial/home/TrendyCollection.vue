<template>
  <div class="bg-light pt-5 pb-5">
    <div class="container trending-products">
      <div class="heading heading-flex mb-3">
        <div class="heading-left">
          <h2 class="title">Популярные товары</h2>
        </div>
        <div class="heading-right">
          <tabs class="nav nav-pills nav-border-anim justify-content-center" :data="tabsData" id="trendy"></tabs>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col" v-for="(product, index) in ratedProducts" :key="index">
          <product-twelve :product="product" class="mb-3"></product-twelve>
        </div>
      </div> -->
      <div class="row">
        <div class="col-xl-5col d-none d-xl-block">
          <div class="banner">
            <router-link to="/shop/sidebar/list">
              <img src="../../../assets/newImg/banner-trend.png" alt="banner" width="218" height="390" />
            </router-link>
          </div>
        </div>
        <div class="col-xl-4-5col">
          <div class="tab-content tab-content-carousel just-action-icons-sm">
            <div class="tab-pane p-0 fade show active" id="trendy-top-rated">
              <div class="swiper-carousel carousel-with-shadow swiper-1">
                <swiper :breakpoints="{
                  '320': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  '576': {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },

                  '768': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  '1200': {
                    slidesPerView: 5,
                  },
                  '1201': {
                    slidesPerView: 4,
                    spaceBetween: 35,
                  },
                }" :modules="modules" :navigation="false" :slidesPerView="1" :spaceBetween="10" class="row">
                  <swiper-slide class="" v-for="(product, index) in ratedProducts" :key="index">
                    <ProductTwelve :product="product" class="mb-3" />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from "../../elements/Tabs.vue";
import ProductTwelve from "../../elements/products/ProductTwelve.vue";

import { attrFilter } from "../../../utilities/common.js";
import { carouselSetting1 } from "../../../utilities/carousel.js";
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default {
  // props: {
  //   products: Array,
  // },
  data: function () {
    return {
      products: [
        {
          id: 122,
          name: "Apple – Watch Series 3 with White Sport Band",
          slug: 'apple-11"-ipad-pro-with-wi-fi-256-gb',
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ",
          price: null,
          sale_price: null,
          review: 2,
          ratings: 5,
          until: "2022-01-01",
          stock: 100,
          featured: true,
          new: null,
          top: true,
          author: null,
          sold: null,
          category: [
            {
              name: "Аксессуары",
              slug: "computers",
              pivot: {
                product_id: "122",
                "product-category_id": "20",
              },
            },
            {
              name: "Умные часы",
              slug: "tablets",
              pivot: {
                product_id: "122",
                "product-category_id": "21",
              },
            }
          ],
          brands: [
            {
              name: "F&F",
              slug: "fandf",
              pivot: {
                product_id: "122",
                brand_id: "20",
              },
            },
            {
              name: "UGG",
              slug: "ugg",
              pivot: {
                product_id: "122",
                brand_id: "1",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/watch.png",
              pivot: {
                related_id: "122",
                upload_file_id: "754",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/watch.png",
              pivot: {
                related_id: "122",
                upload_file_id: "755",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "../../../../public/assets/images/watch.png",
              pivot: {
                related_id: "122",
                upload_file_id: "756",
              },
            },
            {
              width: "300",
              height: "300",
              url: "../../../../public/assets/images/watch.png",
              pivot: {
                related_id: "122",
                upload_file_id: "757",
              },
            },
          ],
          variants: [
            {
              id: 25,
              color: "#3399cc",
              color_name: "Blue",
              price: 10214.99,
              pivot: {
                product_id: "123",
                component_id: "25",
              },
              size: [
                {
                  id: 61,
                  name: "Large",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "25",
                    component_id: "61",
                  },
                },
                {
                  id: 62,
                  name: "Extra Large",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "25",
                    component_id: "62",
                  },
                },
              ],
            },
            {
              id: 24,
              color: "#ebebeb",
              color_name: "Grey",
              price: 12217.99,
              pivot: {
                product_id: "123",
                component_id: "24",
              },
              size: [
                {
                  id: 60,
                  name: "Small",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "24",
                    component_id: "60",
                  },
                },
                {
                  id: 63,
                  name: "Medium",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "24",
                    component_id: "63",
                  },
                },
                {
                  id: 64,
                  name: "Large",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "24",
                    component_id: "64",
                  },
                },
              ],
            },
          ],
        },
        {
          id: 123,
          name: "Подарочный сертификат Озон",
          slug: "apple-smart-folio-for-11-inch-ipad-pro",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 3000.0,
          sale_price: null,
          review: 2,
          ratings: 4,
          until: null,
          stock: 100,
          top: true,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Подарочный сертификат",
              slug: "computers",
              pivot: {
                product_id: "123",
                "product-category_id": "20",
              },
            }
          ],
          brands: [
            {
              name: "UGG",
              slug: "ugg",
              pivot: {
                product_id: "123",
                brand_id: "1",
              },
            },
            {
              name: "F&F",
              slug: "fandf",
              pivot: {
                product_id: "123",
                brand_id: "20",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/Frame_5.png",
              pivot: {
                related_id: "123",
                upload_file_id: "758",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/Frame_5.png",
              pivot: {
                related_id: "123",
                upload_file_id: "759",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "../../../../public/assets/images/Frame_5.png",
              pivot: {
                related_id: "123",
                upload_file_id: "761",
              },
            },
            {
              width: "300",
              height: "300",
              url: "../../../../public/assets/images/Frame_5.png",
              pivot: {
                related_id: "123",
                upload_file_id: "760",
              },
            },
          ],
          variants: [
            // {
            //   id: 25,
            //   color: "#3399cc",
            //   color_name: "Blue",
            //   price: 160.99,
            //   pivot: {
            //     product_id: "123",
            //     component_id: "25",
            //   },
            //   size: [
            //     {
            //       id: 61,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "25",
            //         component_id: "61",
            //       },
            //     },
            //     {
            //       id: 62,
            //       name: "Extra Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "25",
            //         component_id: "62",
            //       },
            //     },
            //   ],
            // },
            // {
            //   id: 24,
            //   color: "#ebebeb",
            //   color_name: "Grey",
            //   price: 150.99,
            //   pivot: {
            //     product_id: "123",
            //     component_id: "24",
            //   },
            //   size: [
            //     {
            //       id: 60,
            //       name: "Small",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "24",
            //         component_id: "60",
            //       },
            //     },
            //     {
            //       id: 63,
            //       name: "Medium",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "24",
            //         component_id: "63",
            //       },
            //     },
            //     {
            //       id: 64,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "24",
            //         component_id: "64",
            //       },
            //     },
            //   ],
            // },
          ],
        },
        {
          id: 124,
          name: "Google – Pixel 6.2-Inch 3 XL 128GB",
          slug: "apple-watch-series-3-with-white-sport-band",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 4000.0,
          sale_price: null,
          review: 2,
          ratings: 4,
          until: null,
          stock: 100,
          top: true,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Планшеты",
              slug: "accessories",
              pivot: {
                product_id: "124",
                "product-category_id": "18",
              },
            },
            {
              name: " Развлечения",
              slug: "smartwatches",
              pivot: {
                product_id: "124",
                "product-category_id": "25",
              },
            },
          ],
          brands: [
            {
              name: "Geox",
              slug: "geox",
              pivot: {
                product_id: "124",
                brand_id: "21",
              },
            },
            {
              name: "UGG",
              slug: "ugg",
              pivot: {
                product_id: "124",
                brand_id: "1",
              },
            },
            {
              name: "River Island",
              slug: "river-island",
              pivot: {
                product_id: "124",
                brand_id: "18",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/watch_2.png",
              pivot: {
                related_id: "124",
                upload_file_id: "762",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/watch_2.png",
              pivot: {
                related_id: "124",
                upload_file_id: "763",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "../../../../public/assets/images/watch_2.png",
              pivot: {
                related_id: "124",
                upload_file_id: "765",
              },
            },
            {
              width: "300",
              height: "300",
              url: "../../../../public/assets/images/watch_2.png",
              pivot: {
                related_id: "124",
                upload_file_id: "764",
              },
            },
          ],
          variants: [
            // {
            //   id: 26,
            //   color: "#f2719c",
            //   color_name: "Red",
            //   price: 214.99,
            //   pivot: {
            //     product_id: "124",
            //     component_id: "26",
            //   },
            //   size: [
            //     {
            //       id: 65,
            //       name: "Small",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "26",
            //         component_id: "65",
            //       },
            //     },
            //     {
            //       id: 70,
            //       name: "Medium",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "26",
            //         component_id: "70",
            //       },
            //     },
            //     {
            //       id: 68,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "26",
            //         component_id: "68",
            //       },
            //     },
            //   ],
            // },
            // {
            //   id: 27,
            //   color: "#669933",
            //   color_name: "Green",
            //   price: 217.99,
            //   pivot: {
            //     product_id: "124",
            //     component_id: "27",
            //   },
            //   size: [
            //     {
            //       id: 69,
            //       name: "Medium",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "27",
            //         component_id: "69",
            //       },
            //     },
            //     {
            //       id: 66,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "27",
            //         component_id: "66",
            //       },
            //     },
            //     {
            //       id: 67,
            //       name: "Extra Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "27",
            //         component_id: "67",
            //       },
            //     },
            //   ],
            // },
          ],
        },
        {
          id: 125,
          name: "Apple Watch Series 4 Gold Aluminum Case",
          slug: "gopro-hero7-black-hd-waterproof-action",
          short_desc:
            "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.",
          price: 30000.99,
          sale_price: 40499.99,
          review: 2,
          ratings: 4,
          until: null,
          stock: 100,
          top: true,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Развлечения",
              slug: "accessories",
              pivot: {
                product_id: "125",
                "product-category_id": "18",
              },
            },
            {
              name: "Телевизоры",
              slug: "camcorders",
              pivot: {
                product_id: "125",
                "product-category_id": "29",
              },
            }
          ],
          brands: [
            {
              name: "Geox",
              slug: "geox",
              pivot: {
                product_id: "125",
                brand_id: "21",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/google.png",
              pivot: {
                related_id: "125",
                upload_file_id: "766",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/google.png",
              pivot: {
                related_id: "125",
                upload_file_id: "767",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/Frame_3.png",
              pivot: {
                related_id: "125",
                upload_file_id: "768",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "../../../../public/assets/images/google.png",
              pivot: {
                related_id: "125",
                upload_file_id: "769",
              },
            },
            {
              width: "300",
              height: "300",
              url: "../../../../public/assets/images/google.png",
              pivot: {
                related_id: "125",
                upload_file_id: "771",
              },
            },
            {
              width: "300",
              height: "300",
              url: "../../../../public/assets/images/Frame_3.png",
              pivot: {
                related_id: "125",
                upload_file_id: "770",
              },
            },
          ],
          variants: [
            // {
            //   id: 25,
            //   color: "#ef837b",
            //   color_name: "Red",
            //   price: 30000.99,
            //   pivot: {
            //     product_id: "123",
            //     component_id: "25",
            //   },
            //   size: [
            //     {
            //       id: 61,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "25",
            //         component_id: "61",
            //       },
            //     },
            //     {
            //       id: 62,
            //       name: "Extra Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "25",
            //         component_id: "62",
            //       },
            //     },
            //   ],
            // },
            // {
            //   id: 24,
            //   color: "#ebebeb",
            //   color_name: "Grey",
            //   price: 40499.99,
            //   pivot: {
            //     product_id: "123",
            //     component_id: "24",
            //   },
            //   size: [
            //     {
            //       id: 60,
            //       name: "Small",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "24",
            //         component_id: "60",
            //       },
            //     },
            //     {
            //       id: 63,
            //       name: "Medium",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "24",
            //         component_id: "63",
            //       },
            //     },
            //     {
            //       id: 64,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "24",
            //         component_id: "64",
            //       },
            //     },
            //   ],
            // },
          ],
        },
      ],
      tabsData: [
        {
          id: "top-rated",
          title: "Все",
          active: true,
        },
      ],
      carouselSetting1: {
        ...carouselSetting1,
        slidesPerView: 4,
        navigation: {
          nextEl: ".trending-products .swiper-1 .swiper-next",
          prevEl: ".trending-products .swiper-1 .swiper-prev",
        },
      },
      carouselSetting2: {
        ...carouselSetting1,
        slidesPerView: 4,
        navigation: {
          nextEl: ".trending-products .swiper-2 .swiper-next",
          prevEl: ".trending-products .swiper-2 .swiper-prev",
        },
      },
      carouselSetting3: {
        ...carouselSetting1,
        slidesPerView: 4,
        navigation: {
          nextEl: ".trending-products .swiper-3 .swiper-next",
          prevEl: ".trending-products .swiper-3 .swiper-prev",
        },
      },
    };
  },
  computed: {
    featuredProducts: function () {
      return attrFilter(this.products, "featured");
    },
    ratedProducts: function () {
      return attrFilter(this.products, "rated");
    },
    saleProducts: function () {
      return attrFilter(this.products, "sale");
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    ProductTwelve,
    Tabs,
  },
  setup() {
    const onSwiper = (swiper) => {
      return swiper;
    };
    const onSlideChange = () => { };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar],
    };
  },
};
</script>
<style scoped></style>
