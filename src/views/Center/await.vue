<template>
  <div>
    <van-nav-bar
      title="待支付订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="order">
      <van-card :price="list.price" :title="list.name" :thumb="list.pic" />
      <van-card
        desc="描述信息"
      >
        <template #footer>
          <van-button  round type="info" color="#CBCBCB">取消支付</van-button>
          <van-button  round type="info">确认支付</van-button>
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
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {

    this.$store.commit("setShow", false);

    this.$http.get(`http://127.0.0.1/vue/getCourse.php`).then((res) => {
      if (res.status == 200) {
        this.list = res.data.data[0];
      }
      // console.log(this.list.data);
    });
  },
   beforeDestroy() {
        this.$store.commit("setShow", true);
    },
};
</script>
<style lang="scss" scoped>
.order {
  width: 350px;
  box-shadow: 0px 0px 10px #c2c2c2;
  margin: 0 auto;
  margin-top: 10px;
}
.van-card:not(:first-child) {
    margin-top: 0px;
}
.van-button{
  width: 100px;
  height: 30px;
  box-shadow: 0px 0px 10px #74A4FD;
}
</style>