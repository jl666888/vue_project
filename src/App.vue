<template>
  <div id="app">
    <Footer v-show="$store.state.isShowFooter" />
    <router-view />
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
      // 默认显示底部导航
      isShowFooter: false,
    };
  },
});
</script>
<style lang="scss">
</style>
