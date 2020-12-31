<template>
  <div style="margin-bottom: 50px; padding: 0 7px; box-sizing: border-box">
    <div>
      <p style="text-align: center; margin-bottom: 0">课程</p>

      <!-- 定位 -->
      <router-link class="location" :to="{ path: '/classroom/village' }">
        <span class="iconfont icon-dingwei" style="fontSize: 40px"></span>
        <span style="margin-bottom: 10px; display: inline-block">
          {{
          location || "选择校区"
          }}
        </span>
      </router-link>
      <van-swipe class="my-swipe" style="overflow: hidden" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="(val, key) in $store.state.titleArr" :key="key" >
          <img :src="val.pic" style="width:100%" />
        </van-swipe-item>
      </van-swipe>
      <!-- 格子 -->
      <van-grid :gutter="10" style="margin-top: 10px">
        <van-grid-item v-for="(value, key) in grid" :key="value" @click="Grid(value)">
          <span :class="'iconfont icon-img' + key" style="fontSize: 14px">
            <p style="fontsize: 14px">{{ value }}</p>
          </span>
        </van-grid-item>
      </van-grid>

      <!-- 加载 (BUG) -->
      <van-loading size="46px" style="margin-top:200px" vertical v-show="bool">加载中...</van-loading>

      <!-- 报错不用管 , 加不了 key , 加了还报错  -->
      <div v-show="!bool">
        <div v-for="(val, key) in grid" v-show="key !== 3" :key="key">
          <div>
            <h3 style="display: inline">{{ val }}</h3>
            <router-link
              style="float: right"
              :to="{ path: '/classroom/efficient', query: { id: key } }"
              tag="span"
            >
              <span style="color: #f1f1f1; fontsize: 16px">更多&gt;</span>
            </router-link>

            <div class="swiper-container" style="margin-top: 15px">
              <div class="swiper-wrapper">
                <!-- ========//////////////============ -->
                <div
                  class="swiper-slide"
                  v-for="(val, key2) in $store.state.titleArr"
                  v-show="key2 < 5 && key == 0"
                >
                  <div>
                    <!-- swiper图片位置 -->
                    <img
                      style="width: 100%; display: block"
                      :src="val.pic"
                      @click="swiperImg(key2, val.id)"
                    />
                    <div class="content" style="width: 100%;text-align: center">
                      {{ val.name }}
                      <p
                        style="float: left; fontsize: 14px; margin: 0 10px 0"
                      >{{ val.pay_price }}/小时</p>
                    </div>
                  </div>
                </div>

                <div
                  class="swiper-slide"
                  v-for="(val, key2) in $store.state.titleArr"
                  v-show="key2 > 5 && key2 < 11 && key == 1"
                >
                  <div>
                    <!-- swiper图片位置 -->
                    <img
                      style="width: 100%; display: block"
                      :src="val.pic"
                      @click="swiperImg(key2, val.id)"
                    />
                    <div class="content" style="text-align: center;width:100%">
                      {{ val.name }}
                      <p
                        style="float: left; fontsize: 16px; margin: 0 10px 0"
                      >{{ val.pay_price }}/小时</p>
                    </div>
                  </div>
                </div>

                <div
                  class="swiper-slide"
                  v-for="(val, key2) in $store.state.titleArr"
                  v-show="key2 > 11 && key2 < 16 && key == 2"
                >
                  <div>
                    <!-- swiper图片位置 -->
                    <img
                      style="width: 100%; display: block"
                      :src="val.pic"
                      @click="swiperImg(key2, val.id)"
                    />
                    <div class="content" style="text-align: center;width:100%">
                      {{ val.name }}
                      <p
                        style="float: left; fontsize: 16px; margin: 0 10px 0"
                      >{{ val.pay_price }}/小时</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================================================HDK====================================================== -->
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Grid, GridItem, Loading } from "vant";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import "@/assets/icon/iconfont.css";
import "@/assets/img/iconfont.css";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Loading);

export default Vue.extend({
  data: function() {
    return {
      grid: ["高校晚辅导", "周末精品班", "一对一", "搜索"],
      one: "",
      location: "",
      dataLists: [],
      bool: "true"
    };
  },
  created() {
    this.$store.commit("setGrid", this.grid);
    this.$store.commit("setShow", true);
    this.location = window.localStorage.getItem("query");
    if (this.$store.state.titleArr.length > 0) {
      this.bool = false;
    } else {
      this.bool = true;
    }
  },


  mounted() {
    if(!JSON.parse(window.localStorage.getItem('titleArr'))){
       this.$http.get("https://www.fastmock.site/mock/e69183d9c2316e1982d198fe4e7d1d57/school/getList").then(ret => {
      this.$store.commit("setTitle", ret.data);
      (function(){
        window.location.reload() //刷新
        this.bool = false;
      })()
    });
    }
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 15,
      
    });
  },
  methods: {
    Grid: function(val) {
      if (this.grid.indexOf(val) !== 3) {
        this.$router.push({
          path: "/classroom/efficient",
          query: { id: this.grid.indexOf(val) }
        });
      } else {
        this.$router.push("/classroom/search");
      }
    },
    swiperImg: function(key) {
      // console.log()
      this.$router.push({
        path: "/details/clas",
        query: { key: key, id: this.$store.state.titleArr[key].id }
      });
    }
  }
});
</script>

<style scoped>
.location {
  margin-top: 100px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  float: left;
  line-height: 0px;
  background: #f4f4f4;
}
.content {
  width: 124px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: #f4f4f4;
  padding-top: 10px;
}
.iconfont {
  text-align: center;
  font-size: 14px;
}
.van-grid-item__content {
  padding: 0 !important;
}
</style>


