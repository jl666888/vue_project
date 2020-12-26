<template>
  <div>
    <div class="pic1">
      <van-icon name="checked" size="100" />
      支付成功
    </div>
    <div>
      <div class="cnt1">
        <van-button type="info" size="large" @click="suc">支付成功</van-button>
      </div>
      <div class="cnt2">
        <van-button plain type="primary" size="large" @click="back"
          >返回首页</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon, Button } from "vant";
Vue.use(Button);
Vue.use(Icon);
export default {
  created() {
    this.$store.commit("setShow", false);
  },
  methods: {
    suc: function () {
      //   this.$router.push("/center/going");
    },
    back() {
      //   this.$router.push("/classroom");
    },
  },
};
</script>
<style lang="scss" scoped>
.pic1 {
  width: 100px;
  height: 130px;
  margin: 90px auto;
  text-align: center;
}
.cnt1 {
  width: 80%;
  margin-bottom: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
}
.cnt2 {
  width: 80%;
  margin-bottom: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>