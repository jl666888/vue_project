<template>
  <div>
    <div class="cnt1">校区</div>
    <div class="cnt2">
      <van-tabs @click="City11">
        <van-tab
          v-for="(item, index) in city"
          :name="item.name"
          :title="item.name"
          :key="index"
          v-model="cityName"
        >
        </van-tab>
      </van-tabs>
    </div>
    <div class="img1">
      <div
        @click="Teach(index)"
        :class="{ active1: isActive }"
        id="name1"
        v-for="(item, index) in teacher"
        :key="index"
      >
        <van-image
          width="135"
          height="135"
          src="//img.yzcdn.cn/vant/cat.jp"
        ></van-image>
        {{ item.realname }}
      </div>
    </div>
    <div class="footer">
      <van-button type="primary" @click="submit1" size="large"
        >大号按钮</van-button
      >
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, TreeSelect, Image as VanImage, Button } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(VanImage);
Vue.use(Button);
Vue.use(TreeSelect);
export default {
  data() {
    return {
      city: [],
      teacher: [],
      isActive: false,
      cityName: "",
      teachId: 0,
      teacherName: "",
    };
  },
  created() {
    this.$store.commit("setShow", false);
    this.$http.get("http://127.0.0.1/BK_2003/getTeacher.php").then((ret) => {
      for (var i = 1; i < 7; i++) {
        this.teacher.push(ret[i]);
      }
    });
    this.$http.get("http://127.0.0.1/BK_2003/getLocation.php").then((ret) => {
      for (var i = 1; i < 11; i++) {
        this.city.push(ret[i]);
      }
    });
  },
  methods: {
    City11: function (name) {
      this.cityName = name;
    },
    Teach: function (id) {
      this.teachId = id;
      this.teacherName = this.teacher[id].realname;
    },
    submit1: function () {
      this.$store.commit("setTeach", {
        name: this.teacherName || this.teacher[0].realname,
        city: this.cityName || this.city[0].name,
      });
      // localStorage.setItem(
      //   "Buy",
      //   JSON.stringify({ teach1: this.$store.state.teach })
      // );
      this.$router.push("/buy/buy1");
    },
  },
};
</script>
<style lang="scss" scoped>
.cnt1 {
  position: absolute;
  z-index: 1232;
  font-size: 16px;
  top: 52px;
  width: 55px;
  background: white;
  text-align: center;
  margin-top: 5px;
}
.cnt2 {
  width: 82%;
  margin-left: 55px;
}
.img1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
}
#name1 {
  float: left;
  margin-top: 15px;
  width: 150px;
  margin-left: 15px;
}
.active1 {
  background: rgb(230, 230, 230);
}
.footer {
  position: fixed;
  width: 90%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>