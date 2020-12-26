<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar
        title="正常课程详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="content">
      <div style="text-align: center">
        <!-- 图片介绍 -->
        <van-image
          width="90%"
          height="90%"
          fit="contain"
          src="//img1.sycdn.imooc.com/szimg/5fdb394608def73a00000000-358-201.jpg"
          radius="10px"
        />
      </div>

      <!-- 课程信息 -->
      <van-cell-group>
        <!-- <van-cell title="单元格" value="内容" /> -->
        <van-cell :title="film.name" :label="film.numbers + '人已报名'" />
        <!-- <van-cell  :value="film.price" label="263人已报名" /> -->
      </van-cell-group>
      <!-- 课程详情信息 -->
      <van-tabs v-model="active">
        <van-tab title="课程简介">
          <div></div>
        </van-tab>
        <van-tab title="课程设置">
          <div>
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <van-cell v-for="item in list" :key="item" :title="item" />
            </van-list>
          </div>
        </van-tab>
        <van-tab title="师资介绍">
          <div></div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="footer">
      <van-submit-bar
        :price="film.price"
        button-text="立即报名"
        @submit="onSubmit"
        label="价格："
      />
    </div>
  </div>
</template>

<script>
// 导入地址
// import uri from "@/config/uri";
import Vue from "vue";

import {
  NavBar,
  Toast,
  Cell,
  CellGroup,
  Image as VanImage,
  Tab,
  Tabs,
  SubmitBar,
  Dialog,
  List,
} from "vant";
// Dialog({ message: "提示" });

Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(SubmitBar);
Vue.use(List);

export default {
  data() {
    return {
      film: {},
      active: 2,
      list: [],
      loading: false,
      finished: false,
    };
  },
  created() {
    // 隐藏app.vue底部导航
    this.$store.commit("isShowFooterNav", false);
    // this.$eventBus.$emit("hide_footer", false);
    // 请求数据
    this.$http.get("http://127.0.0.1/getAirPortInfo.php").then((ret) => {
      // console.log(ret);
      if (ret.status == 200) {
        this.film = ret.data.data[0];
      }
    });
  },
  beforeDestroy() {
    // 通知app.vue显示底部导航（发送数据）
    // this.$eventBus.$emit("hide_footer", true);
    this.$store.commit("isShowFooterNav", true);
  },

  methods: {
    // price: "$" + film.price,
    onClickLeft() {
      // Toast("返回");
      // 返回上一页
      this.$router.go(-1);
      // console.log(this.$router.go(-1))
    },
    onSubmit() {
      Dialog.confirm({
        title: "未登录",
        message: "登录后才可以报名此课程，现在前去登录？",
      })
        .then(() => {
          this.$router.push("/buy/buy1");
        })
        .catch(() => {
          // on cancel
        });
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="stylus" scoped></style>