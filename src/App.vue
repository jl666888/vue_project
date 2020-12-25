<template>
  <div id="app">
    <router-view />
    <Footer v-if="$store.state.bool"></Footer>
  </div>
</template>
<script>
import Vue from "vue";
import Footer from "./components/Naviation/Footer";
export default {
  data(){
    return {
      
    }
  },
  components: {
    Footer,
    
  },
};

</script>
<style lang="scss">
</style>
