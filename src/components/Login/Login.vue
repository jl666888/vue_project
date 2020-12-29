<template>
  <div>
    <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="phone"
          name="phone"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, Field, Button, Toast, NavBar } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);

export default {
  data() {
    return {
      phone: "",
      password: "",
      number: 0,
      one: ""
    };
  },
  methods: {
    onSubmit(values) {
      this.$http
        .post("/api/login", `phone=${values.phone}&password=${values.password}`)
        .then(ret => {
          // console.log(ret)
          if (this.one !== "no") {
            if (ret.error == 0) {
              this.$store.commit("setToken", ret._token);
              Toast.success("登入成功");
              setTimeout(() => {
                this.$router.go(-2);
                this.$store.commit("setShow", true);
              }, 1000);
            } else {
              this.number++;
              Toast.fail(ret.msg);
              if (this.number >= 3) {
                this.one = "no";
                Toast.fail("错误3++次,请在3秒钟后重试");
                setTimeout(() => {
                  this.one = "yes";
                }, 3000);
              }
            }
          } else {
            Toast.fail("时候未到,请稍后");
          }
        });
    },
    onClickLeft: function() {
      this.$router.go(-1);
    }
  },
  created() {
    this.$store.commit("setShow", false);
  }
};
</script>