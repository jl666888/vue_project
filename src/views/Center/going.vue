<template>
  <div>
    <van-nav-bar
      title="学习中课程"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="order" v-for="(item, index) in dataLists1" :key="'suc' + index">
      <van-card
        class="VanCard"
        :price="item.price + '/时'"
        @click="fun(item)"
        :title="item.name"
        :thumb="item.img"
      />
      <van-card class="details">
        <template #desc>
          <div v-show="item.id == id2[index]">
            课程剩余节数：{{ number[index] }}节
          </div>
          <div v-show="item.id !== id2[index]">课程剩余节数：12节</div>
          <div class="refund">如需退款请线下联系</div>
        </template>

        <template #footer>
          <van-button
            class="zxBut"
            square
            type="primary"
            color="#CBCBCB"
            plain
            v-if="item.id == id[index]"
            >{{ zx }}</van-button
          >

          <van-button
            class="xfBut"
            square
            type="primary"
            color="#3279FD"
            @click="xfBut(item)"
            >立即续费</van-button
          >
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
      dataLists1: [],
      zx: "",
      id: [],
      number: [],
      num: 1,
      id2: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    fun: function (val) {
      this.$router.push({
        path: "/details/clas",
        query: { key: val.key, id: val.id },
      });
    },
    xfBut: function (val) {
      this.$store.commit("setBuyData", val);

      this.$router.push({ path: "/buy/buy1", query: { id: val.id, xf: 1 } });
    },
    zxBut2: function (val) {
      this.$store.commit("setBuyData", val);
      this.$router.push({ path: "/buy/buy1", query: { id: val.id, zx: 1 } });
    },
  },
  created() {
    this.$store.commit("setShow", false);
    this.dataLists1 = JSON.parse(localStorage.getItem("Success"));

    if (this.dataLists1) {
      this.dataLists1.forEach((v, k) => {
        if (v.zx) {
          this.id.push(v.id);
          this.zx = "审核中";
        }
        if (v.xf) {
          this.id2.push(v.id);
          this.number.push(12 * v.xf);
        }
      });
    }
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
.van-button {
  width: 100px;
  height: 40px;
  border: 1px solid #3279fd;
  box-shadow: 0px 0px 10px #74a4fd;
  border-radius: 5px;
}
.xfBut {
  position: absolute;
  bottom: 28px;
  right: 10px;
}
.details {
  height: 80px;
  position: relative;
}
.refund {
  color: #989898;
  margin-top: 20px;
}
</style>