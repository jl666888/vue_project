<template>
  <div>
    <van-nav-bar
      title="待支付订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="order">
      <!-- <van-card :price="list.price" :title="list.name" :thumb="list.pic" /> -->
      <van-card
        :price="list.price"
        :title="list.name"
        :thumb="list.pic"
        class="pay"
      >
        <template #desc>
          <span class="red"
            >剩余：00&nbsp;&nbsp;:{{ minutes }}&nbsp;&nbsp;:&nbsp;&nbsp;{{
              second
            }}&nbsp;&nbsp;</span
          >
        </template>
        <template #footer>
          <van-button round type="info" color="#CBCBCB" class="qxpay"
            >取消支付</van-button
          >
          <van-button round type="info" class="conPay">确认支付</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Cell, CellGroup, Card } from "vant";

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(NavBar);
Vue.use(Card);

export default {
  data() {
    return {
      list: {},
      minutes: 15, //分
      seconds: 0, //秒
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
      var time = window.setInterval(function () {
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
      },
    },
    // 倒计时
    minute: {
      handler(newVal) {
        this.num(newVal);
      },
    },
  },
  created() {
    this.$store.commit("setShow", false);

    this.$http.get(`http://127.0.0.1/BK_2003/getList.php`).then((res) => {
      if (res.status == 1) {
        this.list = res.data[0];
        console.log(this.list);
      }
      // console.log(res.data[0]);
    });
  },
  beforeDestroy() {
    this.$store.commit("setShow", true);
  },
  computed: {
    // 倒计时
    second: function () {
      return this.num(this.seconds);
    },
    minute: function () {
      return this.num(this.minutes);
    },
  },
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