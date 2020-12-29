<template>
  <div>
    <van-nav-bar title="待支付订单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="order" v-for="(item, index) in dataList2" :key="'def' + index">
      <!-- <van-card :price="list.price" :title="list.name" :thumb="list.pic" /> -->
      <van-card
        :price="item.price"
        :title="item.name"
        :thumb="item.img"
        class="pay"
        @click="fun($event,item,index)"
      >
        <template #desc>
          <span class="red">
            剩余：00&nbsp;&nbsp;:{{ minutes }}&nbsp;&nbsp;:&nbsp;&nbsp;{{
            second
            }}&nbsp;&nbsp;
          </span>
        </template>
        <template #footer>
          <van-button round type="info" color="#CBCBCB" class="qxpay" name="no">取消支付</van-button>
          <van-button round type="info" class="conPay" name="ok">确认支付</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Cell, CellGroup, Card, Dialog } from "vant";

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(NavBar);
Vue.use(Card);
Vue.use(Dialog);

export default {
  data() {
    return {
      list: {},
      dataList2: [],
      minutes: 15, //分
      seconds: 0 //秒
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    num(n) {
      // 倒计时结束重新刷新页面
      if (this.minutes === 0 && this.seconds === 2) {
        this.$message.warning("支付倒计时结束!即将刷新页面!");
      }
      if (this.minutes === 0 && this.seconds === 0) {
        window.location.reload();
      }
      return n < 10 ? "0" + n : "" + n;
    },
    // 倒计时
    timer() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },
    fun: function(e, val, key) {
      //去详情页
      if (e.target.className == "van-image__img") {
        this.$router.push({
          path: "/details/clas",
          query: { key: val.key, id: val.id }
        });
      }
      //去支付
      if (e.target.name == "ok") {
        this.$store.commit("setBuyData", {
          name: val.name,
          price: val.pirce,
          img: val.img,
          id: val.id,
          key: val.key
        });
        this.$router.push({ path: "/buy/buy1", query: { id: val.id } });
      }
      //取消支付
      if (e.target.name == "no") {
        Dialog.confirm({
          
          message: "是否取消支付"
        })
          .then(() => {
            // on confirm

            let defaultNo = JSON.parse(window.localStorage.getItem("Defeat"));
            defaultNo.splice(key, 1);
            window.localStorage.setItem("Defeat", JSON.stringify(defaultNo));
            window.location.reload();
          })
          .catch(() => {
            // on cancel
          });
      }
    }
  },
  mounted() {
    // 倒计时
    this.timer();
  },
  watch: {
    // 倒计时
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    // 倒计时
    minute: {
      handler(newVal) {
        this.num(newVal);
        if (newVal == 0) {
          let defaultNo = JSON.parse(window.localStorage.getItem("Defeat"));
          defaultNo = [];
          window.localStorage.setItem("Defeat", JSON.stringify(defaultNo));
          window.location.reload();
        }
      }
    }
  },
  created() {
    this.$store.commit("setShow", false);
    this.dataList2 = JSON.parse(localStorage.getItem("Defeat"));
  },
  beforeDestroy() {
    this.$store.commit("setShow", true);
  },
  computed: {
    // 倒计时
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
    }
  }
};
</script>
<style lang="scss" scoped>
.order {
  width: 350px;
  box-shadow: 0px 0px 10px #c2c2c2;
  margin: 0 auto;
  margin-top: 10px;
  // padding-bottom: 20px;
}
.van-card:not(:first-child) {
  margin-top: 0px;
}
.van-button {
  width: 100px;
  height: 30px;
  box-shadow: 0px 0px 10px #74a4fd;
}
.red {
  float: right;
  font-size: 16px;
  position: absolute;
  bottom: -28px;
  right: 0px;
}
.pay {
  height: 180px;
  position: relative;
  margin-top: 20px;
}
.qxpay {
  position: absolute;
  bottom: 10px;
  right: 125px;
}
.conPay {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>