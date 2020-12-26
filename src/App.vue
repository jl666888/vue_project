<template>
  <div id="app">
    <router-view />
    <Footer v-show="$store.state.bool"></Footer>
  </div>
</template>
<script>
import Vue from "vue";
import Footer from "./components/Naviation/Footer";
export default Vue.extend({
  components: {
    Footer,
  },
  data() {
    return {
      bool: false,
    };
  },
});
</script>
<style lang="scss">
</style>
