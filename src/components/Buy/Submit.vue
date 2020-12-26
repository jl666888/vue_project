<template>
  <div>
    <div>
      <van-submit-bar
        :price="money"
        button-text="立即支付"
        @submit="onSubmit"
      />
    </div>
    <div>
      <van-popup
        v-model="show"
        position="bottom"
        :style="{ height: '30%', fontSize: '20px' }"
        >确认支付
        <van-button round type="info" @click="dian1">支付成功</van-button>
        <van-button round plain type="primary" @click="dian2"
          >支付失败</van-button
        >
      </van-popup>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { SubmitBar, Popup, Toast } from "vant";
Vue.use(SubmitBar);
Vue.use(Popup);
Vue.use(Toast);
export default {
  data() {
    return {
      dataList: { price: 0 },
      show: false,
      money: 0,
    };
  },
  created() {
    this.dataList = this.$store.state.buyData;
    this.money = this.dataList.price * this.$store.state.stuNumber;
    if (this.dataList.price == undefined) {
      this.money = 0;
    }
  },
  methods: {
    onSubmit: function () {
      if (!this.$store.state.stuNumber) {
        Toast.fail("请选择学员");
        return;
      }
      if (!this.$store.state.teach.name) {
        Toast.fail("请选择教师");
        return;
      }
      this.show = true;
    },
    dian1() {
      this.$router.push("/buy/suc");
    },
    dian2() {
      this.$router.push("/buy/defeated");
    },
  },
};
</script>
<style lang="scss" scoped>
.van-button--info {
  position: relative;
  top: 50%;
}
.van-button--primary {
  position: relative;
  top: 50%;
  left: 20%;
}
</style>