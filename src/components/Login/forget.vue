<template>
  <div>
    <div>
      <van-nav-bar
        title="修改密码"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div>
      <van-form>
        <van-field
          v-model="phone"
          name="phone"
          label="手机号"
          placeholder="手机号"
          :rules="[{ pattern, message: '请填写手机号' }]"
        />
        <van-field
          v-model="sms"
          center
          clearable
          name="yzm"
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" @click="yzm">发送验证码</van-button>
          </template>
        </van-field>
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="新密码"
          placeholder="新密码"
          :rules="[{ message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            @click="onSubmit"
            native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
    <div>
      <van-popup v-model="show" position="top" :style="{ height: '25%' }">
        【XX教育】：验证码为<span class="yzm">{{ num }}</span
        >，你正在操作修改密码，1分钟内有效
      </van-popup>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Form, Field, Button, Toast, NavBar, Tag, Popup } from "vant";
Vue.use(Tag);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Popup);
export default {
  data() {
    return {
      phone: "",
      password: "",
      sms: "",
      show: false,
      pattern: /^1[3-9]\d{9}$/,
      num: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit(values) {
      if (this.sms == this.num) {
        if (!this.password) {
          Toast.fail("请输入密码");
          return;
        }
        this.$http
          .post("http://127.0.0.1:8080/setPwd", `phone=${this.phone}&password=${this.password}`)
          .then((ret) => {
            if (ret.error == 0) {
              Toast.success(ret.msg);
              setTimeout(() => {
                this.$router.go(-1);
              }, 2000);
            }
          });
      } else {
        Toast.fail("验证码错误");
      }
    },
    func() {
      let str = "";
      for (let i = 0; i < 6; i++) {
        str += parseInt(Math.random() * 9);
      }
      return str;
    },
    yzm() {
      let rg = /^1[3-9]\d{9}$/;
      let bool = rg.test(this.phone);
      if (bool) {
        this.func();
        this.$http.post("/api/getPho", `phone=${this.phone}`).then((ret) => {
          if (ret.error == 0) {
            let numbers = this.func();
            this.num = numbers;
            this.show = true;
            setTimeout(() => {
              this.show = false;
            }, 10000);
            setTimeout(() => {
              this.num = "";
            }, 15000);
          }
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.yzm {
  color: blue;
}
</style>