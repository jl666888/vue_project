<template>
  <div id="app" v-cloak>
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
  watch: {
    $route() {
      console.log(this.$store.state.Res.length);
    },
  },
};
</script>
<style lang="scss">
[v-cloak] {
  display: none;
}
</style>
