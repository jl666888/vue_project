<template>
  <div style="margin-left: 20px; margin-right: 20px">
    <!-- loading -->
    <van-loading style="text-align: center" v-show="show" />

    <div class="to">
      <!-- &lt;
      <span style="margin-left:10px">详情页</span>-->
      <van-nav-bar title="正常课程详情" left-text="返回" left-arrow @click-left="back" />
    </div>

    <div style="width: 79vw" class="img">
      <!-- 图片 -->
      <img style="width: 100%" :src="img" alt />
      <div style="width: 50%; float: left">
        <p>{{ name }}</p>
        <p>{{ numbers }}人已报名</p>
      </div>
      <div style="float: right; margin-top: 15px">{{ price }}/小时</div>
    </div>
    <!-- 导航 -->
    <div class="main">
      <van-tabs @click="onClick" v-model="active">
        <van-tab title="课程列表">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
            <van-cell v-for="(item, key) in arr" :key="key" :title="item.name" />
          </van-list>
        </van-tab>
        <van-tab title="课程设置">
          <van-grid direction="horizontal" style="margin-top: 30px" :column-num="3">
            <van-grid-item text="课程教室" />
            <van-grid-item text="上课时间" />
            <van-grid-item text="课程" />
          </van-grid>
          <van-grid
            direction="horizontal"
            :border="false"
            v-for="(val, key) in arr"
            :key="key"
            :column-num="3"
          >
            <van-grid-item text="H5-2003" />
            <van-grid-item text="2019-4-11
14:00" />
            <van-grid-item :text="val.name" />
          </van-grid>
        </van-tab>
        <van-tab title="师资介绍">
          {{ teacherName }}
          <p style="margin-bottom: 100px">
            {{
            teacherName.substr(0, 1)
            }}老师是一位多才多艺、幽默风趣的校区校长，是耐寒教育颜值担当之一。一路走过来，靠自己的努力和拼劲，把滨江校区从一个简单的套房校区慢慢打造成耐寒教育福清总部，并在校区管理中积极倡导轻松学习，快乐学习，高效学习。
          </p>
        </van-tab>
      </van-tabs>
    </div>
    <van-submit-bar :price="(price - 0) * 100" @submit="onSubmit" button-text="提交订单" />
  </div>
</template>

<script>
import Vue from "vue";
import {
  Loading,
  Button,
  Grid,
  GridItem,
  Tab,
  Tabs,
  List,
  Cell,
  NavBar,
  SubmitBar
} from "vant";

Vue.use(Loading);
Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tab);
Vue.use(Cell);
Vue.use(Tabs);
Vue.use(List);
Vue.use(NavBar);
Vue.use(SubmitBar);
export default {
  data: function() {
    return {
      arr: [],

      loading: false,
      finished: false,
      show: true,
      img: "",
      name: "",
      //   导航默认显示的索引
      active: 0,
      price: "",
      numbers: "",
      teacher: [],
      id: "",
      teacherName: "",
      cid: "",
      bool: false
    };
  },
  created() {
    this.$http
      .get("/v1/details.php", {
        params: { cid: this.$route.query.id }
      })
      .then(ret => {
        this.arr = ret.data;

        this.$store.commit("setDefalt", this.arr);
      });
    this.$store.commit("setShow", false);
    this.img = this.$store.state.titleArr[this.$route.query.key].pic;
    console.log(this.img);
    this.name = this.$store.state.titleArr[this.$route.query.key].name;
    this.price = this.$store.state.titleArr[this.$route.query.key].pay_price;
    this.numbers = this.$store.state.titleArr[this.$route.query.key].numbers;
    this.$http
      .get(
        "https://www.fastmock.site/mock/e69183d9c2316e1982d198fe4e7d1d57/school/getTeacher"
      )
      .then(ret => {
        this.teacher = ret;
        this.teacherName = this.teacher[this.id].realname;
      });
    this.id = this.$route.query.key;
  },
  methods: {
    back: function() {
      this.$router.go(-1);
    },
    onClick(name, title) {},
    onSubmit() {
      this.$store.commit("setBuyData", {
        name: this.name,
        price: this.price,
        img: this.img,
        id: this.$store.state.titleArr[this.$route.query.key].id,
        key: this.id
      });
      let Success = JSON.parse(window.localStorage.getItem("Success"));
      if (Success) {
        Success.forEach((v, k) => {
          if (v.id == this.$route.query.id) {
            this.bool = true;
            this.$router.push({
              path: "/buy/buy1",
              query: { id: this.$route.query.id, xf: 1 }
            });
          }
        });
      }

      if (!this.bool) {
        this.$router.push({
          path: "/buy/buy1",
          query: { id: this.$route.query.id }
        });
      }
    }
  }
};
</script>

<style scoped>
.to {
  position: fixed;

  z-index: 1;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  background: #f4f4f4;
  line-height: 50px;
}
.img {
  margin: 0 auto;
  padding-top: 50px;
}
.main {
  clear: both;
}
</style>


