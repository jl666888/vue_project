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
    return {
      text: "",
    };
  },
  components: {
    Footer,
  },
  created() {
    this.text = window.localStorage.getItem("token");

    //获取用户信息
    this.$http.post("/api/getUser").then((ret) => {
      console.log(ret);
      this.$store.commit("setUsers", ret.data);
    });
  },
  watch: {
    $route: function () {
      this.text = window.localStorage.getItem("token");
    },
  },
};
</script>
<style lang="scss">
</style>
