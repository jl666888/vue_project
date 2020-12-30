<template>
  <div>
    <van-nav-bar title="个人中心" />
    <div class="all">
      <!-- 头像展示 -->
      <div class="avatar">
        <img src="@/assets/logo.png" alt=""  class="avator-icon"/>
        <div style="color: #fff" v-if="users.phone">{{ users.phone }}</div>
        <div style="color: #fff" @click="login" v-else>立即登录</div>
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
          <van-icon class="iconfont icon-xueyuanguanli" slot="icon" size="1.9rem" />&nbsp;&nbsp;&nbsp;学员管理
        </div>
        <div @click="coupon1" class="myList">
          <van-icon class="iconfont icon-youhuiquan" slot="icon" size="1.9rem" />&nbsp;&nbsp;&nbsp;优惠券
        </div>
        <div @click="consult1" class="myList">
          <van-icon class="iconfont icon-zixun" slot="icon" size="1.9rem" />&nbsp;&nbsp;&nbsp;立即咨询
        </div>
        <div @click="about1" class="myList">
          <van-icon class="iconfont icon-guanyuwomen" slot="icon" size="1.9rem" />&nbsp;&nbsp;&nbsp;关于我们
        </div>
      </div>
      <div class="but">
        <van-button type="info" size="large" class="button" @click="unLogin">退出登录</van-button>
      </div>
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
  data() {
    return {
      users: {}
    };
  },
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
    unLogin() {
      let users = window.localStorage.getItem('users')
      this.$store.commit('setToken',{name:'token',time:-1,val:''})
      if (users) {
        window.localStorage.removeItem("users");
        window.localStorage.removeItem("token");
        window.location.href = window.location.href;
      }
    }
  },
  created() {
    
    
    this.$store.commit("setShow", true);
    this.$http.post("/api/getUser").then(ret => {
      if(ret.error==0){
        this.$store.commit("setUsers", ret.data);
         let users = JSON.parse(window.localStorage.getItem("users"));
        if (users) {
          this.users = users;
        }
      
      }
    });
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
      padding-right: 15px;
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

    van-icon {
      padding-right: 15px;
    }
  }
}
.but {
  text-align: center;
}
.button {
  width: 350px;
  margin-top: 10px;
}
</style>