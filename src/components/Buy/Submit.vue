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
      length: 0,
    };
  },
  created() {
    this.length = JSON.parse(localStorage.getItem("StuRes"))
      ? JSON.parse(localStorage.getItem("StuRes")).length
      : 0;
    this.dataList = this.$store.state.buyData;
    this.money = this.dataList.price * 100 * this.length;
    if (this.dataList.price == undefined) {
      this.money = 0;
    }
  },
  methods: {
    onSubmit: function () {
      if (this.length < 0) {
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
      let suc = JSON.parse(localStorage.getItem("BuyData"));
      this.$store.commit("setSuccess", {
        name: suc.name,
        img: suc.img,
        pirce: suc.price,
      });
      let arr = JSON.parse(localStorage.getItem("Success"))
        ? JSON.parse(localStorage.getItem("Success"))
        : [];
      arr.push(this.$store.state.BuySuccess);
      localStorage.setItem("Success", JSON.stringify(arr));
      this.$router.push("/buy/suc");
    },
    dian2() {
      let suc = JSON.parse(localStorage.getItem("BuyData"));
      this.$store.commit("setDefeat", {
        name: suc.name,
        img: suc.img,
        pirce: suc.price,
      });
      let arr = JSON.parse(localStorage.getItem("Defeat"))
        ? JSON.parse(localStorage.getItem("Defeat"))
        : [];
      arr.push(this.$store.state.Buydefeat);
      localStorage.setItem("Defeat", JSON.stringify(arr));
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