<template>
  <div>
    <van-nav-bar title="个人中心" />
    <div class="all">
      <!-- 头像展示 -->
      <div class="avatar">
        <img
          data-v-30d22c25=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAQlBMVEXt7e3v7+/r6+v7+/v9/f309PT8/Pzq6ur////+/v729vbu7u7x8fH5+fnz8/P6+vr4+Pjs7Ozy8vL19fXw8PD39/c1tMDaAAAD/0lEQVR42u2a6ZKkKhCFARFZFBf0/V91eubebhGxSjKTmIoJz88uw/4kMw9LwtijR48ePXr06NGjR48ePfpH5XrfBrttNrTLevnUGkZljBpaXgGht6PUscxoF5d5rtkfGVZaBj8YnZNRNvnk6fi7pWNYpzzD96As+6O8SX8eqIIx6neS39/M1flHEo71PcQfEH9FoTU+Lm4z+qaa9YJCG2yeLlLfl5nUxS/IsGyaSBj/OCc9WC0iNzMBUVvbOzaL+ctO203dxoBHpT9RDAvrjmLLcA9DgSmSCjHt3OU0t3dKyUAjcny58aK7kvCmFgY/RsTO3SvNtlJQDsknefdO/I2/jCCKwyTZsO692OviDhCKNn7DJLo7EtMrDIib8zjl2u6u2hfTDWQwRhDFK44ess6KI9KV6CouE2QwoqRvRBGGaOhCEqJKzdQI/1oXGyNHm6tilqtbxZGDwc+GGRmKytg7p6KI8sym/ySd7cxy4rA0FJF/mvm9M5xMZTYkFP3+Bp/8g+zqQqWB8RQUkY0bcacKTsUkDAEFM1fG9bO+GXonBOt/NnHjtYlJKMWyv+M42uFnqvwpziGfyTN2Xv3SnujD8eX/10jIfLfsLsYNvOaKpuslhxFy468SjAU3sf7eo+2pkRjon6BsWZdIZz+G3hfs5Zp+YhekDGf39k3jT39U2H3BnuVbB9cWTUrIzWKLwIhKFoaxJ3mPwOixOboXikNguB1jQc5rDIERlYpnuLWGQGAIbMWafwljxmLIz8iND6mU8TN8Y6B2UY5cAtLMKdqBMML1DFsghZ3aoqgyikKBHgCaq9VXgRbk6cqhYgcwxoA7UEhOp2e8hxoHxPAaXbIt8kQhWRMb2LQS79qgqXE4A/QgjGg8DbxvEKW5gWRHvKMHb9qOpywWgBGfb3gERvweXkzBCY7r0yTNnn29NlBJ1uizmuYkUDoUhpM056KB4RQ0xSmxYlgpTXBm7tEYx/4WrINA0RC3GttPQeZnpocA6S6ZnoIibbUV99qo7mwsafuzqPM4MiqdXl3Qh6WjyHDc7kpTUjCW7Tb/16MXQlz36BtGK3/7AslhLBwxRuaywHttjF5uLIQwnlWRLQqMWlklrfdvtJjAKsrfzJDJsbqa7lz76itDMH5rOEJtCvVXi+S7aO9eZzI1w+IKKmWth1FyA03yWhRlNtpUqtmhdF77CArghREC26o/w8JuaVLbmAVRUNtYgF4NJbWxFn5FVdLZGGwd+r36obKPBUNBtjhHUhDZWI+lILGxFU9BsJlepaZQi6PgNBTaLCgKpYmEsTFHRoFZBTm66/4YGyOlANvYqIkFsrFBk2v6CAqAjU26igptbKtDUWhjVtfS1WbuF/MY5z0qnakpAAAAAElFTkSuQmCC"
          class="avator-icon"
        />
        <div style="color: #fff" @click="login">立即登录</div>
      </div>

      <div class="course">
        <div class="myCourse">我的课程</div>
        <div @click="await1" class="course_icon">
          <van-icon class="iconfont icon-fukuan" slot="icon" size="1.9rem" />
          <div>待付款</div>
        </div>
        <div @click="going1" class="course_icon">
          <van-icon class="iconfont icon-xuexi" slot="icon" size="1.9rem" />
          <div>学习中</div>
        </div>
        <div @click="success1" class="course_icon">
          <van-icon class="iconfont icon-yijieshu1" slot="icon" size="1.9rem" />
          <div>已结束</div>
        </div>
        <div @click="all1" class="course_icon">
          <van-icon class="iconfont icon-quanbu" slot="icon" size="1.9rem" />
          <div>全部</div>
        </div>
      </div>
      <div class="list">
        <div @click="student1" class="myList">
          <van-icon
            class="iconfont icon-xueyuanguanli"
            slot="icon"
            size="1.9rem"
          />
        学员管理
        </div>
        <div @click="coupon1" class="myList">
          <van-icon
            class="iconfont icon-youhuiquan"
            slot="icon"
            size="1.9rem"
          />
          优惠券
        </div>
        <div @click="consult1" class="myList">
          <van-icon
            class="iconfont icon-zixun"
            slot="icon"
            size="1.9rem"
          />
          立即咨询
        </div>
        <div @click="about1" class="myList">
          <van-icon
            class="iconfont icon-guanyuwomen"
            slot="icon"
            size="1.9rem"
          />
          学员管理
        </div>

        
      </div>
      <van-button type="info" size="large" class="button">退出登录</van-button>
    </div>
  </div>
</template>
<script>
import "@/assets/icon_L/iconfont.css";

import Vue from "vue";
import { NavBar, Icon, Button, Col, Row } from "vant";

Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Col);
Vue.use(Row);

export default {
  methods: {
    login() {
      this.$router.push("/login");
    },
    await1() {
      this.$router.push("/center/await");
    },
    going1() {
      this.$router.push("/center/going");
    },
    success1() {
      this.$router.push("/center/success");
    },
    all1() {
      this.$router.push("/center/all");
    },
    student1() {
      this.$router.push("/center/student");
    },
    coupon1() {
      this.$router.push("/center/coupon");
    },
    consult1() {
      this.$router.push("/center/consult");
    },
    about1() {
      this.$router.push("/center/about");
    },
  },
};
</script>



<style lang="scss" scoped>
.all {
  height: 700px;
  background: #fefefe;
  overflow: hidden;
}
.chatHead {
  height: 50px;
  width: 50px;
}
.avator-icon {
  width: 63px;
  height: 63px;
  border-radius: 35px;
  margin-right: 20px;
  border: 2px solid #fff;
}
.nick-name {
  font-size: 16px;
}
.avatar {
  width: 100%;
  height: 150px;
  background: #7489a0;
  text-align: center;
  padding-left: 22px;
  padding-top: 16px;
  display: flex;
  align-items: center;
  img {
    display: block;
  }
}
.login {
  text-align: center;
  margin-top: 200px;
  div {
    font-size: 12px;
  }
  .login_button {
    padding: 10px 50px;
    font-size: 18px;
  }
}
.course {
  height: 155px;
  width: 380px;
  box-shadow: 0px 0px 10px #c2c2c2;
  margin: 0 auto;
  margin-top: 10px;
  .myCourse {
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #f1f1f1;
    line-height: 50px;
    padding-left: 20px;
  }
  .course_icon {
    width: 95px;
    float: left;
    text-align: center;
    margin-top: 30px;
    .iconfont {
      font-size: 20px;
    }
  }
}
.list {
  width: 380px;
  height: 238px;
  margin: 0 auto;
  margin-top: 10px;
  box-shadow: 0px 0px 10px #c2c2c2;
  line-height: 5;
  .myList {
    height: 50px;
    border-bottom: 1px solid #f1f1f1;
    margin-left: 15px;
    
    van-icon{
      padding-right:15px ;
    }
  }
 
}
.button{
  width: 380px;
  margin-top: 10px;
  margin-left: 18px;
 
}
</style>