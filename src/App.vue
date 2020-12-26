<template>
  <div id="app">
    {{text}}
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
      text:''
    }
  },
  components: {
    Footer,
    
  },
  created(){
    if(window.localStorage.getItem('token')){
      this.text = 'ok'
    }
  }
};

</script>
<style lang="scss">
</style>
