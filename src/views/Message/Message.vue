<template>
  <div>
    <div class="xiaoxitongzhi">全部消息通知</div>
    <ul>
      <li v-for="(item, index) in list" :key="'m' + index">
        <div class="kechengxiaoxi">课程消息</div>
        亲爱的{{ user }}，您已购买{{ item.name }}课程，请记得上课
      </li>
    </ul>
  </div>
</template>
<script>
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
  font-size: 40px;
  font-weight: bold;
  border-left: 10px solid skyblue;
  padding: 15px;
}
ul li {
  box-shadow: 0px 0px 2px 4px #f4f4f4;
  padding: 25px;
  width: 300px;
  margin: 0 auto;
}
.kechengxiaoxi {
  font-size: 30px;
  font-weight: bold;
}
</style>