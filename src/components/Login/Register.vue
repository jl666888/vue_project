<template>
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
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="age"
        name="age"
        label="年龄"
        placeholder="年龄"
        :rules="[{ required: true, message: '请填写年龄' }]"
      />
      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info"  native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, Field, Button,RadioGroup,Radio } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(RadioGroup);
Vue.use(Radio);
export default {
  data() {
    return {
      username: "",
      password: "",
      phone:'',
      age:'',
       radio: '1',
    };
  },
  methods: {
    onSubmit(values) {
      
      this.$http.get('/node/signIn',{
        params:{
          username:values.username,
          password:values.password,
          phone:values.phone,
          age:values.age-0,
          gender:values.radio-0,
        }
      }).then(ret=>{
        console.log(ret)
      })
      console.log(values)
    }
  },
  created() {
    this.$store.commit("setShow", false);
  },
 
};
</script>