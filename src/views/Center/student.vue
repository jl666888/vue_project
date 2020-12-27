<template>
  <div class="xygl">
    <van-nav-bar
      title="学员管理"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="man">学员管理</div>
    <div class="manName">学员姓名</div>
    <div class="manName">学员姓名</div>
    <div class="btu">
      <!-- <van-button type="info" size="normal" class="stuBtu">新增学员</van-button> -->
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Button } from "vant";

Vue.use(NavBar);
Vue.use(Button);
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {
    this.$store.commit("setShow", false);
  },
  beforeDestroy() {
    this.$store.commit("setShow", true);
  },
};
</script>

<style lang="scss" scoped>
.xygl{
  position: relative;
  height: 500px;
}
.man {
  font-size: 20px;
  border-left: 5px solid #3279fd;
  padding-left: 15px;
  margin-top: 20px;
}
.manName {
  width: 350px;
  height: 80px;
  background: #fefefe;
  margin-left: 12px;
  margin-top: 15px;
  line-height: 80px;
  box-shadow: 0px 0px 10px #f3f3f3;
  text-indent: 2em;
}
.btu{
  text-align: center;
  // position: absolute;
  // bottom: 0;
  margin-top:300px ;
}
.van-button{
  width: 350px;
}
</style>