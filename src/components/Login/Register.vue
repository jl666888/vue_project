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
      
      <div style="margin: 16px;">
        <van-button round block type="info"  native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, Field, Button,RadioGroup,Radio,Toast } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Toast);
export default {
  data() {
    return {
      username: "",
      password: "",
      phone:'',
      
    };
  },
  methods: {
    onSubmit(values) {
      
      this.$http.post('/api/info',`username=${values.username}&phone=${values.phone}&password=${values.password}`
      ).then(ret=>{
        if(ret.error==0){
            Toast.success(ret.msg + '正在前往登录界面,请稍后');
             setTimeout(()=>{
                    this.$router.push('/login2')

                },1000)
        }else{
            Toast.fail(ret.msg);              
        }
      })
      // console.log(values)
    }
  },
  created() {
    this.$store.commit("setShow", false);
  },
 
};
</script>