<template>
  <div class="login">
    <!-- 图标 -->
    <div class="logo">
      <img style="width:150px" src="@/assets/logo.png" alt="" />
      <p style="margin-top: 30px">不忘初心 做有温度的教育</p>
    </div>
    <div class="button">
      <van-button round type="info" @click="register">注册</van-button>
      <van-button round type="info" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";

Vue.use(Button);
export default {
  created() {
    this.$store.commit("setShow", false);
  },
  methods: {
    register: function () {
      this.$router.push("/register");
    },
    login: function () {
      this.$router.push("/login2");
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
}
.logo {
  display: flex;
  height: 60vh;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}
.button {
  margin: 20px auto;
}
</style>