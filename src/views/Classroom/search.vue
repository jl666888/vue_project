<template>
  <div style="margin-left: 20px;  margin-right: 20px">
        
    <div class="to">
            <!-- &lt;
      <span style="margin-left:10px">详情页</span> -->
            <van-nav-bar
        title="搜索"
        left-text="返回"
        left-arrow
        @click-left="back"
      />
          
    </div>
        
    <div class="search">
            <van-search v-model="value" placeholder="请输入搜索关键词" />
            <van-empty description="还没有搜索记录哦~" />     
    </div>
      
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Search, Empty } from "vant";
// 导航栏
Vue.use(NavBar);
// 搜索框
Vue.use(Search);
// 当无搜索时
Vue.use(Empty);

export default {
  data: function () {
    return {
      show: true,
      value: "",
    };
  },
  created() {
    this.$store.commit("setShow", false);
  },
  methods: {
    // 点击导航栏返回上一页
    back: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.to {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  line-height: 50px;
}
.search {
  margin: 0 auto;
  padding-top: 50px;
}
</style>