<template>
  <div>
    <van-tabbar @change="setActive" v-model="active">
      <van-tabbar-item icon="home-o">课堂</van-tabbar-item>
      <van-tabbar-item icon="search">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      uri: ["/classroom", "/message", "/center"],
      active: 0,
      
    };
  },
  methods: {
    setActive(val) {
      this.$router.push(this.uri[this.active]);
      if(this.active == 0){
        this.$router.push({path:this.uri[this.active],query:{location:window.localStorage.getItem('query')}})
      }
    },
  },
  created() {
    this.active = this.uri.indexOf(this.$route.path);
  },
  watch: {
    $route: function (val) {
      this.active = this.uri.indexOf(val.path) ;
      
    },
  },
};
</script>