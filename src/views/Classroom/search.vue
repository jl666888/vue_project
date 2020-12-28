<template>
  <div style="margin-left: 20px;  margin-right: 20px">
    <div class="to">
      <!-- &lt;
      <span style="margin-left:10px">详情页</span>-->
      <van-nav-bar title="搜索" left-text="返回" left-arrow @click-left="back" />
    </div>

    <div class="search">
      <van-search v-model="value" placeholder="请输入搜索关键词"  @search="search2" @clear="Clear"/>
      <div v-show="search.length == 0">
        <p>热门搜索</p>
        <van-list>
          <van-cell
            class="cell"
            v-for="(val,key) in list"
            :key="key"
            :title="val"
            @click="HotSearch(key)"
          />
        </van-list>
      </div>
      <van-list v-show="search.length >0">
          <van-cell

            v-for="(val,key) in search"
            :key="key"
            :title="val.name"

          />
        </van-list>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Search, Empty, List } from "vant";
// 导航栏
Vue.use(NavBar);
// 搜索框
Vue.use(Search);
// 当无搜索时
Vue.use(Empty);
Vue.use(List);

export default {
  data: function() {
    return {
      show: true,
      value: "",
      list: ["C语言",'JAVA','程序员数学课','Typescript','H5','JS','Vue','React','Angular','Nodejs'],
      HotWord: ["pcnetwork",'algorithmds','maths','tyscript','html','javascript','vuejs','react','angular','nodejs'],
      search: []
    };
  },
  created() {
    this.$store.commit("setShow", false);
  },
  methods: {
    // 点击导航栏返回上一页
    back: function() {
      this.$router.go(-1);
    },
    HotSearch: function(key) {
      this.$http
        .get("http://127.0.0.1/BK_2003/getSearch.php", {
          params: {
            word: this.HotWord[key]
          }
        })
        .then(ret => {
          this.search = ret.data;
          this.value = this.list[key]
        });
    },
    search2:function(){
      let index = this.list.indexOf(this.value)
     
      this.$http.get("http://127.0.0.1/BK_2003/getSearch.php",{
        params:{
          word:this.HotWord[index]
        }
      }).then(ret=>{
        this.search = ret.data
        
      })
    },
    Clear:function(){
      this.search = []
    },
    
  },
  watch:{
    value:function(newVal){
      if(newVal == ''){
        this.search = []
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.to {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  line-height: 50px;
}
.search {
  margin: 0 auto;
  padding-top: 50px;
}
.cell {
  width: 50%;
  display: inline-block;
  text-align:center
}
</style>