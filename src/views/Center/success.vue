<template>
  <div>
    <van-nav-bar
      title="已结束课程"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="order">
      <van-card :price="list.price" :title="list.name" :thumb="list.pic" />
      <van-card class="details">
        <template #desc> 
          <div class="refund">
            结束于：
          </div>
        </template>

        <template #footer>
          <van-button class="xfBut" square type="primary" color="#3279FD"
            >重新报名</van-button
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
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {
    this.$store.commit("setShow", false);

    this.$http.get(`https://www.fastmock.site/mock/e69183d9c2316e1982d198fe4e7d1d57/school/getList`).then((res) => {
      if (res.status == 1) {
        this.list = res.data[0];
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
.refund{
  color: #989898;
  margin-top: 20px;
}
</style>