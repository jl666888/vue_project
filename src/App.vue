<template>
<<<<<<< HEAD
  <div id="app">
=======
  <div id="app" v-cloak>
>>>>>>> 9157a3e6781f7b8bf6a5c7182876a773264fd1e7
    
    <router-view />
    <Footer v-show="$store.state.bool"></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import Footer from "@/components/Naviation/Footer";
export default {
  data() {
    return {};
  },
  components: {
    Footer,
  },
  
};
</script>
<style lang="scss">
[v-cloak]{
  display:none
}
</style>
