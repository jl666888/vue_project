<template>
  <!-- <div>这是高效页面</div> -->

  <div style="margin-left:20px;margin-right:20px">
    <!-- loading -->
    <van-loading style="text-align:center" v-show="show" />

    <div class="to">
      
      <van-nav-bar
        :title="msg"
        left-text="返回"
        left-arrow
        @click-left="back"
      />
    </div>
    <div style="margin-top:20px">
      <van-button class="go" type="primary" block @click="go" color="#f1f1f1">搜索</van-button>
    </div>

    <!--  -->
    <h3 style="margin-top:30px;margin-bottom:30px">{{msg}}</h3>
    <van-grid :gutter="10" :column-num="2" :icon-size="105" style="background:#f4f4f4">
      <van-grid-item
        v-for="(val,key) in arr"
        :key="key"
        :icon="val.pic"
        :text="val.name"
        @click="defalt(val,key)"
      />
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { Loading, Button, Grid, GridItem, NavBar } from "vant";

Vue.use(Loading);
Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);

export default {
  data: function() {
    return {
      id: "",
      show: true,
      arr: "",
      msg: ""
    };
  },
  created() {
    this.$store.commit("setShow", false);
    let id = this.$route.query.id;
    this.id = id;
    this.$http.get("https://www.fastmock.site/mock/e69183d9c2316e1982d198fe4e7d1d57/school/getList").then(ret => {
      this.arr = ret.data;
      this.msg = this.$store.state.grid[this.id];
      
      this.$store.commit("setTitle", this.arr);
      //   console.log(ret);
      if (this.arr.length > 0) {
        this.show = false;
      }
    });
  },

  methods: {
    go: function() {
      // console.log("这是搜索按钮,请跳转搜索路由组件");
      this.$router.push('/classroom/search')
      
    },
    back: function() {
      this.$router.go(-1);
    },
    defalt: function(val, key) {
      // console.log(val.id)
      
      
          this.$router.push({ path: "/details/clas", query: { key: key,id:val.id } });
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
.go {
  margin-top: 60px;
  
}
</style>