<template>
  <div class="products">
    <hooper :settings="hooperSettings">
      <slide v-for="product in products" :key="product.id">
        <SingleProduct :product="product" />
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
 import SingleProduct from "./SingleProduct.vue"

export default {
  name: "ProductSlider",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    SingleProduct,
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 5000,
        itemsToShow: 1,
        wheelControl: false,
         breakpoints: {
          480: {
            itemsToShow: 1,
            spaceBetween: 20,
          },
          768: {
            itemsToShow: 2,
            spaceBetween: 20,
          },
          1024: {
            itemsToShow: 4,
            spaceBetween: 20,
          },
        },
      },
    }
  },
  computed: {
        products(){
            return this.$store.state.products;
        }
    },
    created(){
        this.$store.dispatch("fetchProducts");
    }
};
</script>