<template>
  <!-- <div>
    这是是课堂页面
    <button @click="village1">校区选择</button>
    <button @click="efficient1">高效</button>
    <button @click="weekend1">周末</button>
    <button @click="oneto1">一对一</button>
    <button @click="search1">搜索</button>
    <button @click="efficient2">高效晚辅导</button>
  </div>-->

  <div>
    <div>
      <p style="text-align:center">课程</p>

      <!-- 定位 -->
      <router-link class="location" :to="{path:'/classroom/village'}">点我定位</router-link>
      <van-swipe class="my-swipe" style="overflow:hidden" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <!-- 格子 -->
      <van-grid :gutter="10" style="margin-top:10px">
        <van-grid-item
          v-for="value in grid"
          :key="value"
          icon="photo-o"
          :text="value"
          @click="Grid(value)"
        />
      </van-grid>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Grid, GridItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);

export default Vue.extend({
  data: function() {
    return {
      grid: ["高校晚辅导", "周末精品班", "一对一", "搜索"],
      one: ""
    };
  },
  created(){
      this.$store.commit('setGrid',this.grid)
      this.$store.commit('setShow',true)
  },
  
  methods: {
    // village1() {
    //   this.$router.push("/classroom/village");
    // },
    // efficient1() {
    //   this.$router.push("/classroom/efficient");
    // },
    // weekend1() {
    //   this.$router.push("/classroom/weekend");
    // },
    // oneto1() {
    //   this.$router.push("/classroom/oneto");
    // },
    // search1() {
    //   this.$router.push("/classroom/search");
    // },
    // efficient2() {
    //   this.$router.push("/classroom/efficient2");
    // },
    Grid: function(val) {
      if (this.grid.indexOf(val) !== 3) {
        this.$router.push({
          path: "/classroom/efficient",
          query: { id: this.grid.indexOf(val) }
        });
      }else{
        this.$router.push("/classroom/search");
      }
    }
  }
});
</script>

<style scoped>
.location {
  margin-top: 100px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  float: left;
}
</style>