<template>
  <div>
    <van-nav-bar
      :title="nameList[index]"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      nameList: [
        "课程购买",
        "选择学员",
        "新增学员",
        "选择教师",
        "支付成功",
        "支付失败",
      ],
      index: 0,
      routerList: [
        "/buy/buy1",
        "/buy/stu",
        "/buy/addstu",
        "/buy/teacher",
        "/buy/suc",
        "/buy/defeated",
      ],
    };
  },
  created() {
    this.routerList.forEach((v, k) => {
      if (this.$route.path == v) {
        this.index = k;
      }
    });
  },
  methods: {
    onClickLeft: function () {
      this.$router.go(-1);
    },
  },
  watch: {
    $route: function (val) {
      this.routerList.forEach((v, k) => {
        if (val.path == v) {
          this.index = k;
        }
      });
    },
  },
};
</script>