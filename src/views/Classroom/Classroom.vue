<template>
  <div>
    这是是课堂页面
    <button @click="village1">校区选择</button>
    <button @click="efficient1">高效</button>
    <button @click="weekend1">周末</button>
    <button @click="oneto1">一对一</button>
    <button @click="search1">搜索</button>
    <button @click="efficient2">高效晚辅导</button>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  methods: {
    village1() {
      this.$router.push("/classroom/village");
    },
    efficient1() {
      this.$router.push("/classroom/efficient");
    },
    weekend1() {
      this.$router.push("/classroom/weekend");
    },
    oneto1() {
      this.$router.push("/classroom/oneto");
    },
    search1() {
      this.$router.push("/classroom/search");
    },
    efficient2() {
      this.$router.push("/classroom/efficient2");
    },
  },
});
</script>