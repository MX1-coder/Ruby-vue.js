<template>
  <div id="app">
    <toast :show="toast.show" :text="toast.text" @hide-toast="hideToast"></toast>
    <Header/>
      <div id="main">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/parts/Header.vue'
import Footer from './components/parts/Footer.vue'
import Toast from './components/parts/Toast.vue'
import AOS from 'aos'


export default {
  name: 'App',
  components: {
    Header,Toast,Footer
  },
  data () {
    return {
    }
  },
  created(){
    AOS.init({
      once: true
    });
  },
  computed: {
    toast() {
      return this.$store.getters.toast;
    }
  },
  methods: {
    hideToast() {
      this.$store.commit("hideToast");
    }
  }

}
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
