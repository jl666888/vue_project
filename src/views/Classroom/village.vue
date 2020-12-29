<template>
  <div>
    <h3>请选择查看的校区</h3>

    <van-button
      class="button"
      v-for="(val, key) in arr"
      :key="key"
      @click="fun(val)"
      type="default"
      v-show="val.name !== ''"
      style="margin: 10px"
      >{{ val.name }}</van-button
    >
    <van-button class="button" @click="fun2" type="default" style="margin: 10px"
      >无</van-button
    >
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
Vue.use(Button);
export default {
  data: function () {
    return {
      arr: [],
    };
  },
  created() {
    this.$http
      .get(
        "https://www.fastmock.site/mock/e69183d9c2316e1982d198fe4e7d1d57/school/getSchool"
      )
      .then((ret) => {
        ret.forEach((v, k) => {
          if (k < 10) {
            this.arr.push(v);
          }
        });
      });
      this.$store.commit('setShow',false)
  },
  methods: {
    fun: function (val) {
      // console.log(val)
      this.$router.push({ path: "/classroom", query: { location: val.name } });
      window.localStorage.setItem("query", val.name);
    },
    fun2: function () {
      this.$router.push({ path: "/classroom", query: { location: "" } });
      window.localStorage.setItem("query", "");
    },
  },
};
</script>

<style scoped>
.button {
  box-shadow: 0 0 10px 6px #f4f4f4;
}
</style>