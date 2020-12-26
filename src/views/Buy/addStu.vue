<template>
  <div>
    <div>
      <div class="pic"><van-uploader :after-read="afterRead" /></div>
    </div>
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          readonly
          clickable
          name="gender"
          :value="value"
          label="请选择性别"
          placeholder="选择性别"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Buy/header.vue";
import Vue from "vue";
import { Form, NavBar, Field, Popup, Picker, Uploader } from "vant";

Vue.use(Form);
Vue.use(NavBar);
Vue.use(Field);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Uploader);
export default {
  data() {
    return {
      username: "",
      value: "",
      showPicker: false,
      columns: ["男", "女"],
    };
  },
  methods: {
    onSubmit(values) {
      //   console.log("submit", values);
      this.$store.commit("setName", values.username);
      this.$router.push("/buy/stu");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
  created() {
    this.$store.commit("setShow", false);
  },
};
</script>
<style lang="scss" scoped>
.pic {
  width: 80px;
  height: 80px;
  margin: 80px auto;
  border: 1px solid #000;
  border-radius: 50%;
  overflow: hidden;
}
</style>