<template>
  <div class="banner-content">
    <hooper :settings="hooperSettings">
      <slide v-for="(banner, index) in bannerData" :key="index">
        <div class="banner-slides">
          <img v-bind:src="'/static/images/' + banner.image" alt="banner">
          <div class="caption">
              <h1>RUBY HOME & GIFTS</h1>
              <p>Limited addition </p>
              <router-link to="#" class="whitebtn">SHOP NOW</router-link>
          </div>
        </div>
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Banner",
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 5000,
        spaceBetween: 20,
        itemsToShow: 1,
        wheelControl: false,
      },
      bannerData: [
          { image: 'banner.jpg'},
          { image: 'banner.jpg'},
          { image: 'banner.jpg'},
          { image: 'banner.jpg'},
          { image: 'banner.jpg'},
      ]
    };
  },
};
</script>