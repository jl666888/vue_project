<template>
  <div>
    <van-nav-bar title="消息" />
    <div class="xiaoxitongzhi">全部消息通知</div>
    <ul>
      <li v-for="(item, index) in list" :key="'m' + index">
        <div class="kechengxiaoxi">课程消息</div>
        <p>亲爱的{{ user }}，您已购买{{ item.name }}课程，请记得上课</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  data() {
    return {
      user: "",
      list: [],
    };
  },
  created() {
    this.user = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users")).username
      : "XX";
    this.list = localStorage.getItem("Success")
      ? JSON.parse(localStorage.getItem("Success"))
      : [];
  },
};
</script>

<style lang="scss" scoped>
.xiaoxitongzhi {
  font-size: 18px;
  font-weight: bold;
  border-left: 5px solid #3279fd;
  margin-top: 15px;
  padding-left: 10px;
}
ul li {
  box-shadow: 0px 0px 10px #c2c2c2;
  padding: 10px;
  width: 326px;
  margin: 0 auto;
  margin-top: 10px;
}
ul {
  margin-top: 20px;
}
.kechengxiaoxi {
  font-size: 16px;
  font-weight: bold;
}
p{
  margin: 0;
  margin-top: 10px;
  font-size: 14px;
}
</style>