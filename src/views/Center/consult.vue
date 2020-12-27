<template>
  <div>
    <van-nav-bar
      title="立即咨询"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <img
      src="http://img.mukewang.com/szimg/5fdb394608def73a00000000-358-201.jpg"
      alt=""
      class="pic"
    />
    <div class="contactUs">
      <div class="contactUs1">联系我们</div>
      <p>北京校区：0591-8332467</p>
      <p>北京校区：0591-8332467</p>
      <p>北京校区：0591-8332467</p>
      <p>北京校区：0591-8332467</p>
      <p>北京校区：0591-8332467</p>
      <p>北京校区：0591-8332467</p>
      <p>北京校区：0591-8332467</p>
    </div>

    <div class="contactUs">
      <div class="contactUs1">联系地址</div>
      <p>福清市中联天御财富广场4楼</p>
      <p>福清市中联天御财富广场4楼</p>
      <p>福清市中联天御财富广场4楼</p>
      <p>福清市中联天御财富广场4楼</p>
      <p>福清市中联天御财富广场4楼</p>
      <p>福清市中联天御财富广场4楼</p>
      <p>福清市中联天御财富广场4楼</p>
      <p>福清市中联天御财富广场4楼</p>
    </div>

     <div class="contactUs">
      <div class="contactUs1">联系邮箱</div>
      <p>891362392@qq.com</p>
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
<style lang="postcss" scoped>
.pic {
  margin-left: 28px;
  margin-top: 15px;
  box-shadow: 0px 0px 10px #c2c2c2;
}
.contactUs{
  text-align: center;
  font-size: 16px;
}
.contactUs1{
  font-size: 18px;
  color: #3279FD;
  font-weight: bold;
  padding-top: 40px;
  padding-bottom: 35px;
}
p{
  margin: 0;
}
</style>