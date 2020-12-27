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

      <div class="couponTime">
        <p>2020-12-31</p>
        即将失效
      </div>
    </div>
    <div class="couponList">
      <div class="couponMain">优惠券立减1000元</div>
      <div class="couponTime">
        <p>2020-12-31</p>
        即将失效
      </div>
    </div>
    <div class="couponList1">
      <div class="couponMain">优惠券立减1000元</div>
      <div class="couponTime">
        已失效
      </div>
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
  width: 350px;
  height: 150px;
  background: #7489a0;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 15px;
  .couponMain {
    float: left;
    width: 210px;
    font-weight: bold;
    font-size: 22px;
    line-height: 150px;
    border-right: 1px dashed #f5f3e9;
    color: #f5f3e9;
    text-align: center;
  }
  .couponTime {
    float: left;
    width: 136px;
    // background: #883;
    color: #f5f3e9;
    margin-top: 60px;
    text-align: center;
    p {
      margin: 0;
    }
  }
}

.couponList1{
  width: 350px;
  height: 150px;
  background:#E8E8EC;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 15px;
  
  .couponMain {
    float: left;
    width: 210px;
    font-weight: bold;
    font-size: 22px;
    line-height: 150px;
    border-right: 1px dashed #656565;;
    color: #656565;
    text-align: center;
  }
  .couponTime {
    font-weight: bold;
    float: left;
    width: 136px;
    // background: #883;
    color: #656565;
    margin-top: 60px;
    text-align: center;
    p {
      margin: 0;
    }
  }
}
</style>