<template>
  <div>
    <van-nav-bar
      title="优惠券"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="coupon">优惠券管理</div>
    <div class="couponList">
      <div class="couponMain">优惠券立减1000元</div>
      <div class="couponTime">即将失效</div>
    </div>
    <div class="couponList">
       <div class="couponMain">优惠券立减1000元</div>
      <div class="couponTime">即将失效</div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
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
.coupon {
  font-size: 20px;
  border-left: 5px solid #3279fd;
  padding-left: 15px;
  margin-top: 20px;
}
.couponList {
  width: 380px;
  height: 150px;
  background: #7489a0;
  margin-top: 20px;
  margin-left: 15px;
  border-radius: 15px;
  .couponMain {
    float: left;
    width: 240px;
    font-weight: bold;
    font-size: 26px;
    line-height: 150px;
    border-right: 1px dashed #f5f3e9;
    color: #f5f3e9;
    padding-left: 15px;
  }
  .couponTime{
    float: left;
    width: 120px;
    text-align: center;
    color: #f5f3e9;
    margin-top: 75px;
  }
}
</style>