<template>
  <div style="margin-bottom:50px;padding:0 7px;box-sizing:border-box">
    <div>
      <p style="text-align:center;margin-bottom:0;">课程</p>

      <!-- 定位 -->
      <router-link class="location" :to="{path:'/classroom/village'}"><span class="iconfont icon-dingwei" style="fontSize:40px"></span><span style="margin-bottom:10px;display:inline-block">{{location||'选择校区'}}</span></router-link>
      <van-swipe class="my-swipe" style="overflow:hidden" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="(val,key) in $store.state.titleArr" :key="key">
           <img :src="val.pic" />
        </van-swipe-item>
      </van-swipe>
      <!-- 格子 -->
      <van-grid :gutter="10" style="margin-top:10px">
        <van-grid-item
          v-for="(value,key) in grid"
          :key="value"

          @click="Grid(value)"
        >
         <span  :class="'iconfont icon-img'+key" style="fontSize:40px;">
          <p style="fontSize:14px">{{value}}</p>
         </span>
        </van-grid-item>
       
      </van-grid>

      <!-- 报错不用管 , 加不了 key , 加了还报错  -->
   
      <div v-for="(val,key) in grid" v-if="key!==3" :key="key" >
        <p >
            <h3 style="display:inline;">{{val}}</h3>
            <router-link style="float:right"  :to="{path:'/classroom/efficient',query:{id:key}}" tag="span"><span style="color:#f1f1f1;fontSize:16px">更多&gt;</span></router-link>
          
            <div class="swiper-container" style="margin-top:15px;">
              <div class="swiper-wrapper">
              <!-- ========//////////////============ -->
                <div class="swiper-slide" v-for="(val,key2) in $store.state.titleArr"   v-if="key2<5 && key==0">
                  <div>
                 
                <!-- swiper图片位置 -->
                    <img style="width:124px;display:block" :src="val.pic" @click="swiperImg(key2,val.id)">
                    <div class="content" style="text-align:center">{{val.name}}
                        <p style="float:left;fontSize:14px;margin:0 10px 0;">{{val.pay_price}}/小时</p>
                    </div>

                  </div>
                </div>

                 <div class="swiper-slide" v-for="(val,key2) in $store.state.titleArr"  v-if="key2>5 && key2<11 && key==1">
                  <div>
                 
                <!-- swiper图片位置 -->
                    <img style="width:124px;display:block" :src="val.pic" @click="swiperImg(key2,val.id)">
                    <div class="content" style="text-align:center">{{val.name}}
                        <p style="float:left;fontSize:16px;margin:0 10px 0;">{{val.pay_price}}/小时</p>
                    </div>
                    
                  </div>
                </div>

                <div class="swiper-slide" v-for="(val,key2) in $store.state.titleArr"  v-if="key2>11 && key2<16 && key==2">
                  <div>
                
                <!-- swiper图片位置 -->
                    <img style="width:124px;display:block" :src="val.pic" @click="swiperImg(key2,val.id)">
                    <div class="content" style="text-align:center">{{val.name}}
                        <p style="float:left;fontSize:16px;margin:0 10px 0;">{{val.pay_price}}/小时</p>
                    </div>
                    
                  </div>
                </div>


              </div>
            </div>
            
        </p>  
      </div>
    
<!-- ================================================HDK====================================================== -->
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Grid, GridItem } from "vant";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import "@/assets/icon/iconfont.css";
import "@/assets/img/iconfont.css";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);

export default Vue.extend({
  data: function () {
    return {
      grid: ["高校晚辅导", "周末精品班", "一对一", "搜索"],
      one: "",
      location: "",
      dataLists: [],
    };
  },
  created() {
    this.$http.get("http://127.0.0.1/BK_2003/index.php").then((ret) => {
      console.log(ret);
    });
    this.$store.commit("setGrid", this.grid);
    this.$store.commit("setShow", true);
    this.location = window.localStorage.getItem("query");
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
  methods: {
    Grid: function (val) {
      if (this.grid.indexOf(val) !== 3) {
        this.$router.push({
          path: "/classroom/efficient",
          query: { id: this.grid.indexOf(val) },
        });
      } else {
        this.$router.push("/classroom/search");
      }
    },
    swiperImg: function (key, id) {
      this.$router.push({ path: "/details/clas", query: { key: key, id: id } });
    },
  },
});
</script>

<style scoped>
.location {
  margin-top: 100px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  float: left;
}
.my-swipe .van-swipe-item[data-v-1ec788a6] {
  line-height: 60px;
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
}
.van-grid-item__content {
  padding: 0 !important;
}
</style>


//  // village1() {
    //   this.$router.push("/classroom/village");
    // },
    // efficient1() {
    //   this.$router.push("/classroom/efficient");
    // },
    // weekend1() {
    //   this.$router.push("/classroom/weekend");
    // },
    // oneto1() {
    //   this.$router.push("/classroom/oneto");
    // },
    // search1() {
    //   this.$router.push("/classroom/search");
    // },
    // efficient2() {
    //   this.$router.push("/classroom/efficient2");
    // },

    //   <!-- <div>
    这是是课堂页面
    <button @click="village1">校区选择</button>
    <button @click="efficient1">高效</button>
    <button @click="weekend1">周末</button>
    <button @click="oneto1">一对一</button>
    <button @click="search1">搜索</button>
    <button @click="efficient2">高效晚辅导</button>
  </div>-->