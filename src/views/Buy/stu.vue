<template>
  <div>
    <div class="add">
      <van-tag size="large" @click="add" type="primary">添加学员</van-tag>
    </div>
    <div class="cnt">
      <van-checkbox-group v-model="result">
        <van-checkbox :name="index" v-for="(item, index) in stu" :key="index">{{
          item
        }}</van-checkbox>
      </van-checkbox-group>
    </div>
    <div class="footer">
      <van-button type="primary" @click="Submit" size="large">保存</van-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Checkbox, CheckboxGroup, Tag, Button, Toast } from "vant";
Vue.use(Tag);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(NavBar);
Vue.use(Toast);
export default {
  data() {
    return {
      result: [],
      stu: ["张三", "李四"],
    };
  },
  created() {
    this.$store.commit("setShow", false);
    if (this.$store.state.username) {
      this.stu.push(this.$store.state.username);
    }
  },
  methods: {
    add() {
      this.$router.push("/buy/addstu");
    },
    Submit() {
      if (!this.result.length) {
        Toast.fail("请选择学员");
        return;
      }
      localStorage.setItem("Buy", JSON.stringify({ result: this.result }));
      this.$store.commit("setStuNum", this.result.length);
      this.$router.push("/buy/buy1");
    },
  },
};
</script>
<style lang="scss" scoped>
.add {
  width: 100%;
  height: 50px;
  margin-top: 10px;
  position: relative;
  right: 10px;
  text-align: right;
}
.cnt {
  width: 90%;
  margin: 0 auto;
}
.van-checkbox {
  padding: 3px 7px;
}
.footer {
  width: 80%;
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  bottom: 80px;
}
</style>