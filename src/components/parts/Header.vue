<template>
  <div>
    <section :class="{ top_header: scrollPosition < 500, sticky: scrollPosition > 500 }">
       <div class="container">
        <nav class="navbar navbar-expand-lg">
          <div class="row menu">
              <div class="menu-bar col-sm-6">
                <a data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                  <button class="navbar-toggler" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                  </button>
                </a>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link class="nav-link active" to="#">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="#">Brands</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="#">Blog</router-link>
                  </li>
                </ul>
                <div class="middle">
                  <router-link to="/"><img src="/static/images/logo.png" alt="logo" /></router-link>
                </div>
              </div>
              <div class="col-sm-1"></div>
              <div class="col-sm-3 search">
                <div class="top-search ">
                  <input type="text" class="form-control">
                  <i class="fas fa-search"></i>
                </div>
              </div>
              <div class="col-sm-2 right">
                <div class="right-top ">
                  <router-link to="#"><i class="far fa-heart"></i></router-link>
                  <router-link to="#"><i class="far fa-user"></i></router-link>
                  <router-link to="/cart"><i class="fas fa-shopping-bag"></i></router-link>
                  <!-- {{ cartSize }} -->
                </div>
              </div>
          </div>
          
          <div class="offcanvas offcanvas-start" tabindex="1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                <img src="/static/images/logo.png" alt="logo" />
              </h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div class="top-search ">
                <input type="text" class="form-control">
                <i class="fas fa-search"></i>
              </div>
              <ul class="navbar-nav my-3">
               <li class="nav-item">
                  <router-link class="nav-link active" to="#">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="#">Brands</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="#">Blog</router-link>
                </li>
              </ul>
              <div class="right-top my-5">
                  <router-link to="#"><i class="far fa-heart"></i></router-link>
                  <router-link to="#"><i class="far fa-user"></i></router-link>
                  <router-link to="/cart"><i class="fas fa-shopping-bag"></i></router-link>
                  <!-- {{ cartSize }} -->
                </div>
            </div>
          </div>
        </nav>
      </div>
    </section>

    <section class="after-top-header">
      <div class="container">
        <router-link to="#">Artificial flower</router-link>
        <router-link to="#">Lighting</router-link>
        <router-link to="#">Rugs</router-link>
        <router-link to="#">Wall decoration</router-link>
        <router-link to="#">Wall decoration</router-link>
      </div>
    </section>
    
  </div>
</template>    

<script>
import Cart from "./Cart.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "Navbar",
  components: {
    Cart,
  },
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartSize", "cartTotalAmount"]),
  },
};
</script>