<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
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
        <span class="wj" @click="forget">?忘记密码</span>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >登录</van-button
          >
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
      one: "",
    };
  },
  methods: {
    onSubmit(values) {
      this.$http
        .post("/api/login", `phone=${values.phone}&password=${values.password}`)
        .then((ret) => {
          // console.log(ret)
          if (this.one !== "no") {
            if (ret.error == 0) {
              let t = new Date();
              t.setTime(t.getTime() - 8 * 60 * 60 * 1000 + 60 * 10 * 1000);
              this.$store.commit("setToken", {
                name: "token",
                val: ret._token,
                time: t,
              });

              Toast.success("登入成功");
              setTimeout(() => {
                if(this.$route.query._R){
                  this.$router.go(-3)
                }else{
                this.$router.go(-2);
                }
                this.$store.commit("setShow", true);
              }, 1000);
            }else

            {
              Toast.fail(ret.msg)
            }
          }
        });
    },
    onClickLeft: function () {
      this.$router.go(-1);
    },
    forget() {
      this.$router.push("/login2/forget");
    },
  },
  created() {
    this.$store.commit("setShow", false);
  },
};
</script>
<style lang="scss" scoped>
.wj {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 12px;
}
</style>