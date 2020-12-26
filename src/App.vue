<template>
  <div id="app">
    
    <router-view />
    <Footer v-show="$store.state.bool"></Footer>
  </div>
</template>
<script>
import Vue from "vue";
import Footer from "./components/Naviation/Footer";
export default {
  data() {
    return {};
  },
  components: {
    Footer,
  },
  created() {
    //获取用户信息
   
  },
};
</script>
<style lang="scss">
</style>
